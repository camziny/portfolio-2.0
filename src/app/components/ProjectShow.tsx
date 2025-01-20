"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TextEffectPerChar } from "@/utils/textEffects";

interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  links: {
    demo?: string;
    source?: string;
  };
  purpose: string;
  role: string;
  technicalHurdles: string[];
  solutions: string[];
}

interface ProjectProps {
  project: Project;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  variants: any;
}

const ProjectShow: React.FC<ProjectProps> = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        duration: 0.5,
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                     hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                     border border-cyan-100 dark:border-cyan-900/50
                     text-gray-700 dark:text-gray-200
                     transition-all duration-300 shadow-sm hover:shadow group"
          >
            <FaArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 sm:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-md">
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 hover:scale-105 p-2"
                    quality={85}
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <TextEffectPerChar className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  {project.name}
                </TextEffectPerChar>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg
                               bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                               hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                               border border-cyan-100 dark:border-cyan-900/50
                               text-gray-700 dark:text-gray-200
                               transition-all duration-300 shadow-sm hover:shadow"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                  {project.links.source && (
                    <Link
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg
                               bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                               hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                               border border-cyan-100 dark:border-cyan-900/50
                               text-gray-700 dark:text-gray-200
                               transition-all duration-300 shadow-sm hover:shadow"
                    >
                      <FaGithub className="text-sm" />
                      <span>Source Code</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 sm:px-8 pb-8 space-y-6">
            <motion.div variants={itemVariants} className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </motion.div>
            <div className="grid gap-8 pt-6">
              <Section title="Technologies Used" variants={itemVariants}>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full
                                               bg-gray-100 dark:bg-gray-700
                                               text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>
              <Section title="Key Features" variants={itemVariants}>
                <ul className="list-disc pl-5 space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                  ))}
                </ul>
              </Section>

              <Section title="Purpose and Goal" variants={itemVariants}>
                <p className="text-gray-600 dark:text-gray-300">{project.purpose}</p>
              </Section>

              <Section title="Role" variants={itemVariants}>
                <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
              </Section>

              <Section title="Technical Challenges & Solutions" variants={itemVariants}>
                <div className="space-y-4">
                  {project.technicalHurdles.map((hurdle, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">Challenge {index + 1}:</p>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{hurdle}</p>
                      <p className="font-medium text-gray-700 dark:text-gray-200 mb-2">Solution:</p>
                      <p className="text-gray-600 dark:text-gray-300">{project.solutions[index]}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, children, variants }: SectionProps) => (
  <motion.div variants={variants} className="space-y-3">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
    {children}
  </motion.div>
);

export default ProjectShow;
