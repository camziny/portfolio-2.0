"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative rounded-full w-16 h-8 flex items-center
                 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}
                 transition-colors duration-500 ease-in-out`}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 w-full h-full flex justify-between items-center px-2">
        <span className={`transition-opacity duration-200 
                       ${isDark ? 'opacity-40 text-gray-400' : 'opacity-70 text-cyan-500'}`}>
          <FiSun className="w-4 h-4" />
        </span>
        <span className={`transition-opacity duration-200 
                       ${isDark ? 'opacity-70 text-cyan-500' : 'opacity-40 text-gray-400'}`}>
          <FiMoon className="w-4 h-4" />
        </span>
      </div>
      <motion.div
        className={`absolute w-6 h-6 rounded-full 
                   ${isDark ? 'bg-cyan-500' : 'bg-cyan-500'}
                   shadow-md flex items-center justify-center`}
        initial={{ x: isDark ? 32 : 2 }}
        animate={{ 
          x: isDark ? 32 : 2,
          rotate: isDark ? 360 : 0 
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          animate={{
            rotateZ: isDark ? 360 : 0,
            scale: 1
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {isDark ? (
            <FiMoon className="text-white w-4 h-4" />
          ) : (
            <FiSun className="text-white w-4 h-4" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
