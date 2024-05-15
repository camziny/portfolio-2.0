"use client";
import React, { useEffect, useState } from "react";
import useScrollPosition from "./GetScrollPosition";
import useRange from "./UseRange";
import { Card } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const CamZiny: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const textScale = useRange(scrollPosition, 0, 50, 1, 0.8);
  const textX = useRange(scrollPosition, 0, 50, 0, 42);

  const links = [
    {
      icon: <FaGithub className="" />,
      link: "https://github.com/camziny",
    },
    {
      icon: <FaLinkedin className="" />,
      link: "https://www.linkedin.com/in/cameron-ziny/",
    },
    {
      icon: <IoMdMail className="" />,
      link: "mailto:cameronziny@gmail.com",
    },
  ];

  return (
    <div className="relative mt-16">
      <h1
        style={{
          transform: `scale(${textScale}) translateX(${textX}px)`,
        }}
        className="text-3xl font-bold transition-transform duration-500 text-cyan-600 dark:text-cyan-300"
      >
        Hi, I'm Cam Ziny
      </h1>
      <Card className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg p-4 mt-2 shadow-xl">
        <p className="text-lg leading-relaxed">
          I'm a passionate software developer with a love for creating beautiful
          and functional web applications. With a background in software
          engineering and a keen eye for design, I aim to bridge the gap between
          technology and user experience.
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
