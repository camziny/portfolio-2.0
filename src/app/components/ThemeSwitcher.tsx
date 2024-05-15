"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="flex items-center cursor-pointer">
      <FiSun className="text-lg text-gray-600 dark:text-white" />
      <div
        onClick={toggleTheme}
        className={`ml-2 w-10 h-5 flex items-center flex-shrink-0 p-1 rounded-full duration-300 ease-in-out ${
          theme === "dark"
            ? "bg-gray-700 justify-end"
            : "bg-gray-300 justify-start"
        }`}
      >
        <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
      </div>
      <FiMoon className=" text-lg ml-2 text-gray-600 dark:text-white" />
    </label>
  );
};
