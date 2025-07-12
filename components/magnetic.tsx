"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

const Magnetic = ({ children, className = "", strength = 0.3 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
