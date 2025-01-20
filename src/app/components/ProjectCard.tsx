"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
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
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    open: {
      maxHeight: "20rem",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    collapsed: {
      maxHeight: "4.5rem",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="max-w-md backdrop-blur-md bg-white/95 dark:bg-gray-800/95 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
        <div className="relative group">
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <Link href={`project/${name}`}>
              <motion.div
                initial={false}
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {name}
                </p>
                <div className="relative w-32 h-32 overflow-hidden mx-auto mt-4 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Image
                    alt={`Image of ${name} project`}
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        <CardBody className="p-4 bg-transparent">
          <motion.div
            initial="collapsed"
            animate={showMore ? "open" : "collapsed"}
            variants={variants}
            className="overflow-hidden text-gray-600 dark:text-gray-300"
          >
            <p className="leading-relaxed">{skills}</p>
          </motion.div>
          {skills.length > 100 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 ease-in-out flex items-center justify-center w-full"
              aria-expanded={showMore}
            >
              {showMore ? (
                <FaArrowUp className="text-lg" />
              ) : (
                <FaArrowDown className="text-lg" />
              )}
            </motion.button>
          )}
        </CardBody>

        <CardFooter className="flex justify-between items-center p-4 bg-transparent">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`project/${name}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
                        bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                        hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                        border border-cyan-100 dark:border-cyan-900/50
                        text-gray-700 dark:text-gray-200
                        transition-all duration-300 shadow-sm hover:shadow"
            >
              Learn More
            </Link>
          </motion.div>
          <div className="flex space-x-3">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link}
                className="flex items-center gap-2 p-2 rounded-lg
                          bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                          hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                          border border-cyan-100 dark:border-cyan-900/50
                          text-gray-600 dark:text-gray-300 
                          hover:text-cyan-600 dark:hover:text-cyan-400
                          transition-all duration-300 shadow-sm hover:shadow"
                aria-label="External link to project"
                target="_blank"
              >
                <FiExternalLink className="text-xl" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={github}
                className="flex items-center gap-2 p-2 rounded-lg
                          bg-gradient-to-br from-white to-cyan-50 dark:from-gray-800 dark:to-cyan-900/20
                          hover:from-cyan-50 hover:to-cyan-100 dark:hover:from-gray-800 dark:hover:to-cyan-900/40
                          border border-cyan-100 dark:border-cyan-900/50
                          text-gray-600 dark:text-gray-300 
                          hover:text-cyan-600 dark:hover:text-cyan-400
                          transition-all duration-300 shadow-sm hover:shadow"
                aria-label="GitHub repository link"
                target="_blank"
              >
                <FiGithub className="text-xl" />
              </Link>
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
