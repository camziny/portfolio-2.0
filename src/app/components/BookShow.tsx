"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Book {
  title: string;
  image: StaticImageData;
  author: string;
  description: string;
  thoughts: string[];
  link: string;
  currentlyReading: boolean;
}

interface BookProps {
  book: Book;
  currentlyReading?: boolean;
}

const BookShow: React.FC<BookProps> = ({ book, currentlyReading }) => {
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
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <div className="flex items-center text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-500 text-2xl font-bold mb-6">
        <Link href="/books">
          <FaArrowLeft />
        </Link>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-6 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4"
        >
          {book.title}
        </motion.h1>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {book.author}
        </h2>
        {currentlyReading && (
          <span className="text-sm font-medium text-cyan-800 dark:text-cyan-100 bg-cyan-200 dark:bg-cyan-700 rounded-full px-3 py-1">
            Currently Reading
          </span>
        )}
      </motion.div>
      <div className="mb-8 flex justify-center">
        <Image
          src={book.image}
          alt={book.title}
          width={200}
          height={200}
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {book.description}
        </p>
      </div>
      <div className="mb-6">
        <div className="rounded-md p-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            My Thoughts
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {book.thoughts.map((thought, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-1 mr-2 bg-cyan-600 dark:bg-cyan-400 rounded-full flex-shrink-0"></span>
                <span>{thought}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookShow;
