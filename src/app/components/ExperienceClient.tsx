"use client";
import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Timeline } from "./ui/timeline";

const ExperienceClient = () => {
  const data = [
    {
      title: "Present",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Epipelagic Ventures
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Jan 2025 - Present
              </p>
            </div>
          </div>
          <div className="ml-11 mb-4">
            <div className="border-l-2 border-cyan-200 dark:border-cyan-800 pl-4 space-y-3">
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Senior Software Engineer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">Jan 2026 - Present</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Junior Software Developer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">Jan 2025 - Jan 2026</p>
              </div>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["React", "React Native", "Flutter", "Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "AWS"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4 mt-8">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Innovators for Purpose
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Instructor, Web Development · 2023 - Present
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["Node.js", "Express", "JavaScript", "Python", "SQLite"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Dart Co.
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Software Developer
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["React", "Vue.js", "Node.js", "Docker", "PostgreSQL", "TypeScript"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                myTindy
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Software Developer
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["React Native", "Node.js", "MongoDB", "TypeScript", "AWS"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4 mt-8">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Chingu
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Full-Stack Developer
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "TypeScript"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4 mt-8">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Scale AI
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                AI Trainer
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["Python", "JavaScript", "C++", "Java"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Launch Academy
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Apprentice Developer
              </p>
            </div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "JavaScript"].map((skill) => (
              <span key={skill} className="px-2 py-1 text-xs rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2015 - 2022",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaBriefcase className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Natick Eye Associates
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Practice Manager
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2010 - 2014",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <FaGraduationCap className="text-cyan-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Sacred Heart University
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Business Administration
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
      <Timeline data={data} />
    </div>
  );
};

export default ExperienceClient;
