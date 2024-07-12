import React from "react";
import BookCard from "../components/BookCard";
import { BooksList } from "../data/books";

export const metadata = {
  title: "Books - Cam Ziny",
};

export default function BooksPage() {
  return (
    <div className="sm:mt-0 container mx-auto px-4">
      <header className="text-center my-6">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white mb-4">
          Recently Read Books
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is a collection of books I&apos;ve read recently. Click
          &quot;Learn More&quot; to read descriptions and my thoughts on each
          book.
        </p>
      </header>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {BooksList.map((book: any) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}
