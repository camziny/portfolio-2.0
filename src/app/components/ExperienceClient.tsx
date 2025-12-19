"use client";
import React, { useRef } from "react";
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
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
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
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
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
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
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
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
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
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
      skills: ["Node.js", "Express", "React", "PostgreSQL", "TypeScript"],
    },
    {
      title: "2023",
      cardTitle: "Scale AI",
      cardSubtitle: "AI Trainer, Computer Science and Software Development",
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
      skills: ["JavaScript", "Python", "C", "C++", "C#", "Java"],
    },
    {
      title: "2022",
      cardTitle: "Launch Academy",
      cardSubtitle: "Apprentice Full-Stack Developer",
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
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
      icon: <FaBriefcase className="text-2xl text-gray-600 dark:text-gray-300" />,
      skills: [],
    },
    {
      title: "2010 - 2014",
      cardTitle: "Sacred Heart University",
      cardSubtitle: "Business Administration",
      icon: <FaGraduationCap className="text-2xl text-gray-600 dark:text-gray-300" />,
      skills: [],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20 pt-28" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Experience
        </h2>
        
        <div className="relative">
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-700">
            <motion.div 
              className="w-full origin-top bg-cyan-500 dark:bg-cyan-400"
              style={{ height: progressHeight }}
            />
          </div>
          
          <div className="absolute md:hidden left-4 w-px h-full bg-gray-200 dark:bg-gray-700">
            <motion.div 
              className="w-full origin-top bg-cyan-500 dark:bg-cyan-400"
              style={{ height: progressHeight }}
            />
          </div>
          
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
        
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default ExperienceClient;
