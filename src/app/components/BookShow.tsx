"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Book {
  title: string;
  image: StaticImageData;
  author: string;
  description: string;
  thoughts: string;
  link: string;
}

interface BookProps {
  book: Book;
}

const BookShow: React.FC<BookProps> = ({ book }) => {
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
        <Link href="/books">
          <FaArrowLeft />
        </Link>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-5">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-cyan-600 dark:text-cyan-500 mb-4"
          >
            {book.title}
          </motion.h1>
        </div>
      </motion.div>
      <div className="mb-4 flex justify-center">
        <Image
          src={book.image}
          alt={book.title}
          width={300}
          height={100}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-600 mb-4 dark:text-gray-300">
        {book.description}
      </p>
    </div>
  );
};

export default BookShow;
