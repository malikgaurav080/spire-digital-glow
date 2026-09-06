import { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  pulsePhase: number;
}

interface Packet3D {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export function NetworkCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // 3D Nodes generation (Distributed network cluster / sphere)
    const nodeCount = 48;
    const sphereRadius = 240;
    const nodes: Node3D[] = [];

    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = sphereRadius * (0.8 + Math.random() * 0.4);
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseRadius: Math.random() * 2 + 1.8,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Packet transmissions
    const packets: Packet3D[] = [];
    const maxPackets = 8;

    // Rotation & Mouse tilt state
    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      targetAngleY = (clientX / rect.width) * 0.6;
      targetAngleX = -(clientY / rect.height) * 0.6;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Handle Resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || 600;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Observer to pause when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );
    observer.observe(canvas);

    // Animation Loop
    const fov = 420;
    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation towards mouse target
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      // Constant ambient rotation
      const currentRotY = angleY + time * 0.00025;
      const currentRotX = angleX + Math.sin(time * 0.0003) * 0.15;

      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      // Project nodes to 2D screen
      const projectedNodes = nodes.map((node) => {
        // Rotate around Y axis
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;

        // Rotate around X axis
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        // Perspective projection
        const scale = fov / (fov + z2 + 300);
        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + sphereRadius) / (sphereRadius * 2)));

        return {
          screenX,
          screenY,
          scale,
          alpha,
          z: z2,
          radius: node.baseRadius * scale,
        };
      });

      // Draw Connections between nearby 3D nodes
      const maxDistance = 140;
      ctx.lineWidth = 0.75;

      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];

          const dx = n1.screenX - n2.screenX;
          const dy = n1.screenY - n2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.22 * Math.min(n1.alpha, n2.alpha);
            ctx.strokeStyle = `rgba(52, 211, 153, ${lineAlpha})`; // brand emerald tone
            ctx.beginPath();
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);
            ctx.stroke();

            // Spawn occasional 3D packets
            if (packets.length < maxPackets && Math.random() < 0.001) {
              packets.push({
                from: i,
                to: j,
                progress: 0,
                speed: 0.8 + Math.random() * 0.8,
              });
            }
          }
        }
      }

      // Draw and update active packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed * dt;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const start = projectedNodes[pkt.from];
        const end = projectedNodes[pkt.to];
        const px = start.screenX + (end.screenX - start.screenX) * pkt.progress;
        const py = start.screenY + (end.screenY - start.screenY) * pkt.progress;
        const pAlpha = (1 - Math.abs(pkt.progress - 0.5) * 2) * Math.min(start.alpha, end.alpha);

        ctx.fillStyle = `rgba(167, 243, 208, ${pAlpha})`;
        ctx.beginPath();
        ctx.arc(px, py, 2.2 * start.scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Nodes (sorted by depth so closer ones render on top)
      projectedNodes
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach((node) => {
          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, node.radius, 0, Math.PI * 2);

          // Glowing node gradient
          const glow = ctx.createRadialGradient(
            node.screenX,
            node.screenY,
            0,
            node.screenX,
            node.screenY,
            node.radius * 2.5,
          );
          glow.addColorStop(0, `rgba(52, 211, 153, ${node.alpha * 0.9})`);
          glow.addColorStop(1, "rgba(52, 211, 153, 0)");

          ctx.fillStyle = glow;
          ctx.arc(node.screenX, node.screenY, node.radius * 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Core dot
          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, node.radius * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${node.alpha * 0.85})`;
          ctx.fill();
        });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full opacity-60 mix-blend-screen"
    />
  );
}
