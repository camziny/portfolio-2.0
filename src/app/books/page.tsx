import React from "react";
import BookCard from "../components/BookCard";
import { BooksList } from "../data/books";
import FilterBar from "../components/FilterBar";
import { Book, BooksPageProps } from "../types/BookTypes";

export const metadata = {
  title: "Books - Cam Ziny",
};

export default function BooksPage({ searchParams }: BooksPageProps) {
  const yearFilter = searchParams.year ? parseInt(searchParams.year) : null;

  const filteredBooks: Book[] = yearFilter
    ? BooksList.filter((book) => book.yearRead === yearFilter)
    : BooksList;

  const years: number[] = Array.from(
    new Set(BooksList.map((book) => book.yearRead))
  );

  return (
    <div className="sm:mt-0 container mx-auto px-4">
      <header className="text-center my-6">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white mb-4">
          Recently Read Books
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is a collection of books I&apos;ve read recently and am currently
          reading.
        </p>
        <FilterBar years={years} />
      </header>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}
