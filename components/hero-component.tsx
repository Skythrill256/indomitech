"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Magnetic from "./magnetic";

const HeroComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-hidden flex items-center justify-center">
      {/* Animated background particles - only render on client */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-10"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 23) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Title - Centered */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
            <Magnetic strength={0.1}>
              <motion.div 
                className="block text-center cursor-hover"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                BECAUSE BORING
              </motion.div>
            </Magnetic>
            <Magnetic strength={0.15}>
              <motion.div 
                className="block text-center ml-[-4rem] cursor-hover"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                IS BAD FOR
              </motion.div>
            </Magnetic>
            <Magnetic strength={0.1}>
              <motion.div 
                className="block text-center cursor-hover"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                BUSINESS
              </motion.div>
            </Magnetic>
          </h1>
        </motion.div>

        {/* Description - Top Right */}
        <motion.div
          className="absolute top-20 right-8 lg:top-32 lg:right-16 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.p 
            className="text-sm leading-relaxed text-gray-300 cursor-hover"
            whileHover={{
              color: "#ffffff",
              transition: { duration: 0.3 }
            }}
          >
            ALS FULL-SERVICE AGENTUR MIT MEHR ALS 20 JAHREN ERFAHRUNG IN DER FILM- UND VIDEOPRODUKTION TUN WIR ALLES, UM DEINE BESTE GESCHICHTE ZU FINDEN UND ZU ERZÄHLEN.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroComponent;
