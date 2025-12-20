"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-8 sm:mb-10"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 flex-shrink-0">
        <Image
          src="/images/better-pic.jpg"
          alt="Cam Ziny"
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
        Cam Ziny
      </h1>
    </motion.div>
  );
}

