"use client";

import { motion } from "framer-motion";

const UnderlineMotion = () => {
  return (
    <div className="flex justify-center mt-3">
      <motion.div
        className="h-0.5 bg-cyan-500 dark:bg-cyan-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "4rem" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default UnderlineMotion;
