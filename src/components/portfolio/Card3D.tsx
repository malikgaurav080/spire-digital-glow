import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function Card3D({ children, className = "", maxTilt = 10 }: Card3DProps) {
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

  // Glare / Specular shine tracking cursor position in percentage
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
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden transition-shadow duration-300 h-full w-full flex flex-col justify-between ${className} ${
          isHovered ? "shadow-2xl ring-1 ring-brand/30" : ""
        }`}
      >
        {/* Dynamic Specular Light / Glare overlay */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 240px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.4), transparent 80%)`,
            ),
          }}
        />

        {/* Card Content with 3D Depth capability and equal height flex column */}
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="relative z-10 size-full flex flex-col justify-between flex-1"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
