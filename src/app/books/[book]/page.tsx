import React from "react";
import BookShow from "@/app/components/BookShow";
import { fetchBooksData } from "@/app/data/books";
import Image, { StaticImageData } from "next/image";
import type { Metadata } from "next";
interface Book {
  title: string;
  image: StaticImageData;
  author: string;
  description: string;
  thoughts: string;
  link: string;
}

type PageProps = {
  params: {
    book: string;
  };
};

interface BookPageParams {
  book: string;
}

export function generateMetadata({
  params,
}: {
  params: BookPageParams;
}): Metadata {
  const bookTitle = decodeURIComponent(params.book);
  const bookData = fetchBooksData(bookTitle);

  if (!bookData) {
    return {
      title: "Book Not Found - Cam Ziny",
    };
  }

  return {
    title: `${bookData.title} - Cam Ziny`,
    description: bookData.description,
  };
}

export default function Page({ params }: PageProps) {
  const bookTitle = decodeURIComponent(params.book);
  const bookData = fetchBooksData(bookTitle);

  if (!bookData) {
    return <div>Book not found.</div>;
  }

  return (
    <div>
      <BookShow book={bookData} />
    </div>
  );
}
