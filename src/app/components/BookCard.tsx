"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

interface Book {
  title: string;
  image: StaticImageData;
  author: string;
  description: string;
  thoughts: string;
  link: string;
}

const BookCard = ({
  book: { title, image, author, description, thoughts, link },
}: {
  book: Book;
}) => {
  return (
    <Card className="max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
      <CardBody className="p-6 flex flex-row justify-between items-center bg-white dark:bg-gray-800">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {author}
          </h3>
        </div>
        <div className="relative w-32 h-48 ml-4">
          <Image
            alt={`Cover image of ${title}`}
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="p-4 bg-white dark:bg-gray-800 flex justify-between items-center">
        <Link
          href={link}
          passHref
          className="text-cyan-600 hover:text-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 rounded-full p-2 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink className="mr-2" />
          <span className="font-semibold">Buy on Amazon</span>
        </Link>
        <Link
          href={`books/${title}`}
          passHref
          className="text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400 font-semibold focus:outline-none focus:ring focus:ring-cyan-300 rounded-full p-2 flex items-center"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
