import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  onClick?: () => void;
}

export function Card3D({ children, className = "", maxTilt = 10, onClick }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized mouse position: -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery-smooth Apple-like responsiveness
  const springConfig = { stiffness: 220, damping: 22, mass: 0.8 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // RotateX is driven by mouseY (inverse), RotateY is driven by mouseX
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare / Specular shine tracking cursor position in percentage across the FULL card
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative w-full h-full transition-transform duration-300 flex flex-col"
    >
      <motion.div
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-3xl border transition-all duration-300 h-full w-full flex flex-col justify-between bg-surface/60 backdrop-blur ${
          isHovered
            ? "border-brand/50 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(52,211,153,0.18)]"
            : "border-border shadow-md"
        } ${className}`}
      >
        {/* Full-bleed Ambient Hover Mesh Gradient - fills 100% of the entire div */}
        <div
          className={`pointer-events-none absolute inset-0 z-0 bg-mesh transition-opacity duration-700 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
        />

        {/* Dynamic Specular Light Glare - fills 100% of the entire div */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 350px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.4), transparent 75%)`,
            ),
          }}
        />

        {/* Card Content with 3D Depth capability - edge-to-edge padded uniformly */}
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-20 size-full p-7 flex flex-col justify-between flex-1"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
