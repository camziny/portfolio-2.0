import { StaticImageData } from "next/image";

export interface Book {
  title: string;
  author: string;
  image: StaticImageData | string;
  description: string;
  thoughts: string[];
  link: string;
  currentlyReading: boolean;
  yearRead: number;
}

export interface BooksPageProps {
  searchParams: {
    year?: string;
  };
}
