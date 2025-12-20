"use client";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  name: string;
  image: StaticImageData;
  skills: string;
  link: string;
  github: string;
}

const ProjectCard = ({
  project: { name, image, skills, link, github },
}: {
  project: Project;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <div className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
        <Link href={`project/${name}`} className="block">
          <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <Image
              alt={`${name} project`}
              src={image}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        <div className="p-4">
          <Link href={`project/${name}`}>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {name}
            </h3>
          </Link>
          
          <p 
            className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${
              !isExpanded && skills.length > 100 ? "line-clamp-2" : ""
            }`}
          >
            {skills}
          </p>
          
          {skills.length > 100 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <Link
              href={`project/${name}`}
              className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              Details <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex gap-3">
              <Link
                href={link}
                target="_blank"
                className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Live demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href={github}
                target="_blank"
                className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
