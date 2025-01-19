"use client";
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import TimelineItem from "./TimelineItem";

const ExperienceClient = () => {
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
        "",
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
    <div className="flex flex-col items-center py-5 bg-gray-50 dark:bg-gray-900">
      <div className="relative w-full max-w-4xl px-4">
        <div className="absolute inset-0 md:flex justify-center hidden">
          <div className="w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>
        </div>
        <div className="absolute w-0.5 bg-gray-300 dark:bg-gray-700 h-full left-4 md:hidden"></div>
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceClient;
