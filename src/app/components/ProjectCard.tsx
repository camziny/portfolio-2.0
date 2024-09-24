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
    <Card className="max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="text-center p-6 bg-gradient-to-br from-cyan-100 via-gray-100 to-white dark:from-cyan-900 dark:via-gray-800 dark:to-gray-900">
        <Link href={`project/${name}`}>
          <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {name}
          </p>
          <div className="relative w-24 h-24 overflow-hidden mx-auto mt-4 rounded-full shadow-md bg-gray-100 dark:bg-gray-700 aspect-square">
            <Image
              alt={`Image of ${name} project`}
              src={image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-full"
            />
          </div>
        </Link>
      </div>
      <CardBody className="p-4 bg-white dark:bg-gray-800">
        <motion.div
          initial="collapsed"
          animate={showMore ? "open" : "collapsed"}
          variants={variants}
          className="overflow-hidden text-gray-700 dark:text-gray-300"
        >
          <p>{skills}</p>
        </motion.div>
        {skills.length > 100 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300 ease-in-out flex items-center justify-center"
            aria-expanded={showMore}
          >
            {showMore ? (
              <FaArrowUp className="text-lg" />
            ) : (
              <FaArrowDown className="text-lg" />
            )}
          </button>
        )}
      </CardBody>
      <CardFooter className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
        <Link
          href={`project/${name}`}
          className="text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-300 font-medium rounded-md text-sm px-4 py-2"
        >
          Learn More
        </Link>
        <div className="flex space-x-2">
          <Link
            href={link}
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 focus:outline-none focus:ring focus:ring-cyan-300 rounded-full p-2"
            aria-label="External link to project"
            target="_blank"
          >
            <FiExternalLink className="text-xl" />
          </Link>
          <Link
            href={github}
            className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 focus:outline-none focus:ring focus:ring-cyan-300 rounded-full p-2"
            aria-label="GitHub repository link"
            target="_blank"
          >
            <FiGithub className="text-xl" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
