"use client";

import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaBriefcase, FaAddressCard, FaHatWizard } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwitcher";
import useScrollPosition from "./GetScrollPosition";
import Experience from "./ExperienceClient";
import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

const NavBarClient = () => {
  const isScrolled = useScrollPosition() > 50;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-8 md:p-2 text-gray-900 dark:text-white sticky top-0 z-50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4 items-center">
              <Link href="/">
                {" "}
                <div className="flex items-center px-3 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-lg font-medium mr-2">Home</span>
                  <FaHome className="text-xl text-cyan-600 dark:text-cyan-400" />
                </div>
              </Link>
              <Link href="/about">
                <div className="flex items-center px-3 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-lg font-medium mr-2">About</span>
                  <FaAddressCard className="text-xl text-cyan-600 dark:text-cyan-400" />
                </div>
              </Link>
              <Link href="/experience">
                <div className="flex items-center px-3 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-lg font-medium mr-2">Experience</span>
                  <FaBriefcase className="text-xl text-cyan-600 dark:text-cyan-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed top-2 left-0 z-50">
          <MenuTrigger>
            <Button
              aria-label="Menu"
              className="text-2xl ml-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
            >
              ☰
            </Button>
            <Popover className="bg-gray-100 text-gray-800 dark:bg-gray-800 shadow-lg mt-2 rounded-lg">
              <Menu className="flex flex-col space-y-1 w-48">
                <MenuItem href="/">
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">
                    Home
                    <FaHome className="text-xl text-cyan-600 dark:text-cyan-400" />
                  </div>
                </MenuItem>
                <MenuItem href="/about">
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">
                    About
                    <FaAddressCard className="text-xl text-cyan-600 dark:text-cyan-400" />
                  </div>
                </MenuItem>
                <MenuItem href="/experience">
                  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">
                    Experience
                    <FaBriefcase className="text-xl text-cyan-600 dark:text-cyan-400" />
                  </div>
                </MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
        </div>
      </div>
      <div className="fixed top-5 right-5 z-50">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBarClient;
