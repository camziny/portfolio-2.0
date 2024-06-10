"use client";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

interface CopyButtonProps {
  text: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const toast = useToast();
  const handleMark = () => {
    setIsMarked(true);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    handleMark();
    toast({ title: "Copied to clipboard", status: "success", duration: 2000 });
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center space-x-2 p-4 border rounded w-40 h-12 ${
        isCopied ? "bg-cyan-200" : ""
      } ${
        isMarked
          ? "bg-gray-200 text-cyan-600 dark:bg-gray-600 dark:text-cyan-300"
          : ""
      }`}
    >
      <span className="text-center font-semibold">{text}</span>
      {isMarked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-green font-bold flex text-right"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 flex text-right"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
          />
        </svg>
      )}
    </button>
  );
};

export default CopyButton;
