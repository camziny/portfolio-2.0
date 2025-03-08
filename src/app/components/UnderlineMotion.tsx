"use client";

import { motion } from "framer-motion";

const UnderlineMotion = () => {
  return (
    <div className="flex justify-center overflow-hidden relative">
      <motion.div
        className="w-80 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-gradient-shift mt-2"
        style={{
          backgroundSize: "200% 200%",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.1), 0 0 3px rgba(56, 189, 248, 0.4)"
        }}
        initial={{ width: 0 }}
        animate={{ width: "20rem" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      <motion.div
        className="absolute h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 blur-sm opacity-30 mt-2"
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientShift 6s ease-in-out infinite",
          animationDelay: "0.2s"
        }}
        initial={{ width: 0 }}
        animate={{ width: "16rem" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      />
    </div>
  );
};

export default UnderlineMotion;
