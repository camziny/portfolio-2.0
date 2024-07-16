"use client";
import React, { useState, useEffect } from "react";

const ScrollMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-auto max-w-xs px-4 py-2 bg-gray-200 dark:bg-gray-800 text-xs sm:text-sm md:text-base text-black dark:text-white rounded-lg shadow-lg transition-opacity duration-500 z-10 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      Scroll Over Me to Interact
    </div>
  );
};

export default ScrollMessage;
