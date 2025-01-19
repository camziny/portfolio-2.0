"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaBriefcase, FaAddressCard } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwitcher";
import useScrollPosition from "./GetScrollPosition";
import { motion, AnimatePresence } from "framer-motion";

const NavBarClient = () => {
  const isScrolled = useScrollPosition() > 50;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaAddressCard },
    { href: "/experience", label: "Experience", icon: FaBriefcase },
  ];

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 }
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.label}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 rounded-lg
                           hover:bg-gray-100 dark:hover:bg-gray-800
                           transition-all duration-200 group"
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium mr-2 
                                 group-hover:text-cyan-600 dark:group-hover:text-cyan-400
                                 transition-colors duration-200">
                    {item.label}
                  </span>
                  <item.icon className="text-xl text-cyan-600 dark:text-cyan-400" />
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                       hover:bg-gray-200 dark:hover:bg-gray-700
                       transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-gray-600 dark:bg-gray-300 transform transition-all duration-300
                              ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 bg-gray-600 dark:bg-gray-300 transform transition-all duration-300
                              ${isMenuOpen ? 'w-0' : 'w-full'}`} />
                <span className={`h-0.5 w-full bg-gray-600 dark:bg-gray-300 transform transition-all duration-300
                              ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </motion.button>
          </div>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute left-0 right-0 mt-2 mx-4 p-2
                       bg-white dark:bg-gray-800 rounded-lg shadow-xl
                       border border-gray-200 dark:border-gray-700"
            >
              {menuItems.map((item) => (
                <Link href={item.href} key={item.label}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg
                             hover:bg-gray-100 dark:hover:bg-gray-700
                             transition-all duration-200"
                  >
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {item.label}
                    </span>
                    <item.icon className="text-xl text-cyan-600 dark:text-cyan-400" />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBarClient;
