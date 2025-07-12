"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is over hoverable element
      const target = e.target as HTMLElement;
      if (target && (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover') ||
        target.closest('button') ||
        target.closest('a')
      )) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor follower */}
      <motion.div
        className="fixed w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Mouse-following gradient overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04) 0%, transparent 40%)`,
        }}
      />

      {/* Magnetic effect for interactive elements */}
      <motion.div
        className="fixed w-1 h-1 pointer-events-none z-[9996]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className="w-24 h-24 border border-white/20 rounded-full"
          style={{
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: isHovering ? 1.5 : 0,
            opacity: isHovering ? 0.5 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        />
      </motion.div>
    </>
  );
};

export default MouseCursor;
