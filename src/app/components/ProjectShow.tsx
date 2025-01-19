"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
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
    hidden: { scale: 0.95, rotate: -5, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-100 dark:bg-gray-900  shadow-lg rounded-lg">
      <div className="flex items-right text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-500 text-3xl font-bold mb-8">
        <Link href="/">
          <FaArrowLeft />
        </Link>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-5">
          <TextEffectPerChar className="text-3xl font-bold text-cyan-600 dark:text-cyan-500 mb-4">
            {project.name}
          </TextEffectPerChar>
        </div>
      </motion.div>
      <div className="mb-4 flex justify-center">
        <Image
          src={project.image}
          alt={project.name}
          width={300}
          height={100}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-600 mb-4 dark:text-gray-300">
        {project.description}
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
        Key Features
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
        {project.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2 dark:text-gray-200">
        Technologies Used
      </h2>
      <p className="text-gray-600 mb-4 dark:text-gray-300">
        {project.technologies.join(", ")}
      </p>

      <div className="flex space-x-4 mt-4">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            Live Demo
          </a>
        )}
        {project.links.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-700 transition duration-300 ease-in-out"
          >
            Source Code
          </a>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2 dark:text-gray-200">
        Purpose and Goal
      </h2>
      <p className="text-gray-600 mb-4 dark:text-gray-300">{project.purpose}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2 dark:text-gray-200">
        Role
      </h2>
      <p className="text-gray-600 mb-4 dark:text-gray-300">{project.role}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2 dark:text-gray-200">
        Technical Hurdles
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
        {project.technicalHurdles.map((hurdle, index) => (
          <li key={index}>{hurdle}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2 dark:text-gray-200">
        Solutions
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
        {project.solutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectShow;
