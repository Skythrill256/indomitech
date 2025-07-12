"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/10 rounded-full bg-black/20 backdrop-blur-md shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-white/80 hover:text-white transition-colors duration-200 items-center flex space-x-1 cursor-hover"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
        </a>
      ))}
      <button className="border border-white/20 text-sm font-medium relative bg-white/10 hover:bg-white/20 transition-all duration-200 text-white px-4 py-2 rounded-full backdrop-blur-sm cursor-hover">
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white/50 to-transparent h-px" />
      </button>
    </motion.div>
  );
};
