"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import useScrollPosition from "./GetScrollPosition";
import { motion, AnimatePresence } from "framer-motion";

const NavBarClient = () => {
  const isScrolled = useScrollPosition() > 50;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 
                         hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-400"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-200 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-200 ${
                  isMenuOpen ? "w-0 opacity-0" : "w-full"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transform transition-all duration-200 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>

          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="max-w-5xl mx-auto px-4 py-2">
              {menuItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-2 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 
                           hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBarClient;
