"use client";
import React from "react";
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
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const links = [
    {
      icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
      link: "https://www.linkedin.com/in/cameron-ziny/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="text-2xl sm:text-3xl" />,
      link: "https://github.com/camziny",
      label: "GitHub",
    },
    {
      icon: <IoMdMail className="text-2xl sm:text-3xl" />,
      link: "mailto:cameronziny@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="relative mt-8 sm:mt-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-600 dark:text-gray-100">Hi, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              Cam Ziny
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border border-cyan-100 dark:border-cyan-900/50 p-6 rounded-2xl shadow-lg">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a software developer with a passion for creating web
                applications that enhance user experiences. My expertise lies in
                developing robust, scalable solutions using modern technologies.
              </p>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-2">
                {links.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg 
                             bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                             hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                             border border-cyan-100 dark:border-cyan-900/50
                             transition-all duration-300 shadow-sm hover:shadow"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={item.label}
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 
                                   group-hover:text-cyan-700 dark:group-hover:text-cyan-300 
                                   transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 
                                   group-hover:text-cyan-700 dark:group-hover:text-cyan-300 
                                   transition-colors duration-300">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CamZiny;
