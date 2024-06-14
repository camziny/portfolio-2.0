"use client";
import React, { useEffect, useState } from "react";
import useScrollPosition from "./GetScrollPosition";
import useRange from "./UseRange";
import { Card } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const CamZiny: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
        duration: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const links = [
    {
      icon: <FaLinkedin className="" />,
      link: "https://www.linkedin.com/in/cameron-ziny/",
    },
    {
      icon: <FaGithub className="" />,
      link: "https://github.com/camziny",
    },
    {
      icon: <IoMdMail className="" />,
      link: "mailto:cameronziny@gmail.com",
    },
  ];

  return (
    <div className="relative mt-16 px-4 sm:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row items-center sm:items-start"
      >
        <motion.h1
          variants={itemVariants}
          className="title text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-5xl sm:text-6xl font-extrabold tracking-wide leading-tight whitespace-nowrap drop-shadow-lg"
        >
          Hi, I&apos;m Cam&nbsp;Ziny
        </motion.h1>
        <div className="mt-4 sm:mt-0 sm:ml-4"></div>
      </motion.div>
      <Card className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg p-4 mt-2 shadow-xl">
        <p className="text-lg leading-relaxed">
          I&apos;m a software developer with a passion for creating web
          applications that enhance user experiences. My expertise lies in
          developing robust, scalable solutions using modern technologies.
        </p>
        <div className="flex justify-center text-cyan-600 dark:text-cyan-500 text-2xl rounded-lg p-2 mt-2 items-center">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2 hover:text-cyan-500 dark:hover:text-cyan-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CamZiny;
