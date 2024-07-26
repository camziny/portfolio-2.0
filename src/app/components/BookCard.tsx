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
  thoughts: string[];
  link: string;
  currentlyReading: boolean;
}

const infoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 8.25h.008v.008H12V8.25z"
    />
  </svg>
);

const BookCard = ({
  book: { title, image, author, description, thoughts, link, currentlyReading },
}: {
  book: Book;
}) => {
  return (
    <Card className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-shadow duration-300">
      <CardBody className="p-6 flex flex-row justify-between items-center bg-white dark:bg-gray-800">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {author}
          </h3>
          {currentlyReading && (
            <div className="flex justify-center items-center">
              <span className="text-xs font-semibold text-cyan-800 dark:text-cyan-100 rounded-full px-3 py-1">
                Currently Reading
              </span>
            </div>
          )}
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
          <span className="font-semibold"></span>
        </Link>
        <Link
          href={`books/${title}`}
          passHref
          className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-500 focus:outline-none rounded-full p-2 transition-colors duration-300"
        >
          {infoIcon}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
