"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import { motion, useScroll, useTransform } from "framer-motion";

const ExperienceClient = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["0%", "100%"]
  );

  const items = [
    {
      title: "2025 - Present",
      cardTitle: "Epipelagic Ventures",
      cardSubtitle: "Software Developer",
      year: "2025",
      role: "Software Developer",
      company: "Epipelagic Ventures",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: [
        "React",
        "React Native",
        "Flutter",
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "AWS",
      ],
    },
    {
      title: "2023 - Present",
      cardTitle: "Innovators for Purpose",
      cardSubtitle: "Instructor, Fundamentals of Web Development",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: [
        "Node.js",
        "Express",
        "EJS",
        "SQLite",
        "JavaScript",
        "Python",
        "Godot",
      ],
    },
    {
      title: "2023 - 2024",
      cardTitle: "Dart Co.",
      cardSubtitle: "Software Developer",
      year: "2023",
      role: "Software Developer",
      company: "Dart Co.",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: [
        "Node.js",
        "React",
        "Vue.js",
        "Docker",
        "PostgreSQL",
        "JavaScript",
        "TypeScript",
        "Nginx",
        "Wordpress",
        "jQuery",
        "Tailwind CSS",
      ],
    },
    {
      title: "2023",
      cardTitle: "myTindy",
      cardSubtitle: "Software Developer",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: [
        "Node.js",
        "Express",
        "React Native",
        "MongoDB",
        "TypeScript",
        "Shopify API",
        "AWS",
      ],
    },
    {
      title: "2023",
      cardTitle: "Chingu",
      cardSubtitle: "Full-Stack Software Developer",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: ["Node.js", "Express", "React", "PostgreSQL", "TypeScript"],
    },
    {
      title: "2023",
      cardTitle: "Scale AI",
      cardSubtitle: "AI Trainer, Computer Science and Software Development",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: ["JavaScript", "Python", "C", "C++", "C#", "Java"],
    },
    {
      title: "2022",
      cardTitle: "Launch Academy",
      cardSubtitle: "Apprentice Full-Stack Developer",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: [
        "Node.js",
        "Express",
        "React",
        "PostgreSQL",
        "JavaScript",
        "AWS",
      ],
    },
    {
      title: "2015 - 2022",
      cardTitle: "Natick Eye Associates",
      cardSubtitle: "Practice Manager",
      icon: <FaBriefcase className="text-3xl text-black dark:text-white" />,
      skills: [],
    },
    {
      title: "2010 - 2014",
      cardTitle: "Sacred Heart University",
      cardSubtitle: "Business Administration",
      icon: <FaGraduationCap className="text-3xl text-black dark:text-white" />,
      skills: [],
    },
  ];

  return (
    <div className="flex flex-col items-center py-5 pt-24 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
        Experience
      </h2>
      
      <div className="relative w-full max-w-4xl px-4">
        <div className="absolute inset-0 md:flex justify-center hidden">
          <div className="w-[3px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full overflow-hidden shadow-sm h-full">
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 bg-white dark:bg-cyan-900 blur-sm"></div>
            <motion.div 
              className="w-full origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              style={{ height: progressHeight }}
            />
          </div>
        </div>
        
        <div className="absolute w-[3px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full overflow-hidden shadow-sm h-full left-4 md:hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 bg-white dark:bg-cyan-900 blur-sm"></div>
          <motion.div 
            className="w-full origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            style={{ height: progressHeight }}
          />
        </div>
        
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
      
      <div className="h-32 md:h-64"></div>
    </div>
  );
};

export default ExperienceClient;
