"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 mb-8 sm:mb-10"
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-muted flex-shrink-0">
        <Image
          src="/images/better-pic.jpg"
          alt="Cam Ziny"
          width={44}
          height={44}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-base sm:text-lg font-medium text-foreground">
        Cam Ziny
      </h1>
    </motion.div>
  );
}
