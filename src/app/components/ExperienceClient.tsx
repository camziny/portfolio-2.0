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
      cardSubtitle: "Software Engineer",
      icon: <FaBriefcase />,
      skills: [
        "React",
        "React Native",
        "Flutter",
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
        "AWS",
      ],
    },
    {
      title: "2023 - Present",
      cardTitle: "Innovators for Purpose",
      cardSubtitle: "Instructor, Web Development",
      icon: <FaBriefcase />,
      skills: [
        "Node.js",
        "Express",
        "JavaScript",
        "Python",
        "SQLite",
      ],
    },
    {
      title: "2023 - 2024",
      cardTitle: "Dart Co.",
      cardSubtitle: "Software Developer",
      icon: <FaBriefcase />,
      skills: [
        "React",
        "Vue.js",
        "Node.js",
        "Docker",
        "PostgreSQL",
        "TypeScript",
      ],
    },
    {
      title: "2023",
      cardTitle: "myTindy",
      cardSubtitle: "Software Developer",
      icon: <FaBriefcase />,
      skills: [
        "React Native",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "AWS",
      ],
    },
    {
      title: "2023",
      cardTitle: "Chingu",
      cardSubtitle: "Full-Stack Developer",
      icon: <FaBriefcase />,
      skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    },
    {
      title: "2023",
      cardTitle: "Scale AI",
      cardSubtitle: "AI Trainer",
      icon: <FaBriefcase />,
      skills: ["Python", "JavaScript", "C++", "Java"],
    },
    {
      title: "2022",
      cardTitle: "Launch Academy",
      cardSubtitle: "Apprentice Developer",
      icon: <FaBriefcase />,
      skills: [
        "React",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
      ],
    },
    {
      title: "2015 - 2022",
      cardTitle: "Natick Eye Associates",
      cardSubtitle: "Practice Manager",
      icon: <FaBriefcase />,
      skills: [],
    },
    {
      title: "2010 - 2014",
      cardTitle: "Sacred Heart University",
      cardSubtitle: "Business Administration",
      icon: <FaGraduationCap />,
      skills: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 pt-28" ref={containerRef}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>
        
        <div className="relative">
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200 dark:bg-gray-700">
            <motion.div 
              className="w-full origin-top bg-cyan-500"
              style={{ height: progressHeight }}
            />
          </div>
          
          <div className="absolute md:hidden left-4 w-px h-full bg-gray-200 dark:bg-gray-700">
            <motion.div 
              className="w-full origin-top bg-cyan-500"
              style={{ height: progressHeight }}
            />
          </div>
          
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
        
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default ExperienceClient;
