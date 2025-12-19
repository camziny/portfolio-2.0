"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "../data/projects";
import UnderlineMotion from "./UnderlineMotion";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featuredProject = ProjectsList[0];
  const otherProjects = ProjectsList.slice(1);

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-16 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Projects
        </h2>
        <UnderlineMotion />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-[10px] sm:text-xs font-medium text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                  Featured Project
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {featuredProject.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {featuredProject.skills}
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href={featuredProject.link}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live
                  </Link>
                  <Link
                    href={featuredProject.github}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </Link>
                  <Link
                    href={`/project/${featuredProject.name}`}
                    className="ml-auto text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 
                       hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {showAll ? "Show Less" : `View All Projects (${otherProjects.length} more)`}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ 
            height: showAll ? "auto" : 0,
            opacity: showAll ? 1 : 0 
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
            {otherProjects.map((project: any, index: number) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showAll ? 1 : 0, y: showAll ? 0 : 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

