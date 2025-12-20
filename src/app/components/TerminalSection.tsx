"use client";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

type Token = {
  text: string;
  type: "keyword" | "type" | "string" | "property" | "punctuation" | "indent";
};

type CodeLine = Token[];

export default function TerminalSection() {
  const [commandTyped, setCommandTyped] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [activeLines, setActiveLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showLinks, setShowLinks] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const command = "cat -n cam-ziny.ts";

  const codeLines: CodeLine[] = useMemo(() => [
    [
      { text: "type ", type: "keyword" },
      { text: "SocialPlatform", type: "type" },
      { text: " = ", type: "punctuation" },
      { text: "'linkedin'", type: "string" },
      { text: " | ", type: "punctuation" },
      { text: "'github'", type: "string" },
      { text: " | ", type: "punctuation" },
      { text: "'email'", type: "string" },
      { text: ";", type: "punctuation" },
    ],
    [],
    [
      { text: "type ", type: "keyword" },
      { text: "Human", type: "type" },
      { text: " = {", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "readonly ", type: "keyword" },
      { text: "name", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "string", type: "type" },
      { text: ";", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "readonly ", type: "keyword" },
      { text: "role", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "string", type: "type" },
      { text: ";", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "readonly ", type: "keyword" },
      { text: "location", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "string", type: "type" },
      { text: ";", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "readonly ", type: "keyword" },
      { text: "summary", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "string", type: "type" },
      { text: ";", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "readonly ", type: "keyword" },
      { text: "socials", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "Readonly", type: "type" },
      { text: "<", type: "punctuation" },
      { text: "Record", type: "type" },
      { text: "<", type: "punctuation" },
      { text: "SocialPlatform", type: "type" },
      { text: ", ", type: "punctuation" },
      { text: "string", type: "type" },
      { text: ">>", type: "punctuation" },
      { text: ";", type: "punctuation" },
    ],
    [
      { text: "};", type: "punctuation" },
    ],
    [],
    [
      { text: "const ", type: "keyword" },
      { text: "camZiny", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "Human", type: "type" },
      { text: " = {", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "name", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "\"Cam Ziny\"", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "role", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "\"Software Engineer\"", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "location", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "\"Boston, MA\"", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "summary", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "`", type: "string" },
    ],
    [
      { text: "    ", type: "indent" },
      { text: "Software engineer with a passion for creating", type: "string" },
    ],
    [
      { text: "    ", type: "indent" },
      { text: "quality web applications. My expertise lies in", type: "string" },
    ],
    [
      { text: "    ", type: "indent" },
      { text: "developing robust, scalable solutions.", type: "string" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "`", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "socials", type: "property" },
      { text: ": {", type: "punctuation" },
    ],
    [
      { text: "    ", type: "indent" },
      { text: "linkedin", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "\"https://linkedin.com/in/cameron-ziny\"", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "    ", type: "indent" },
      { text: "github", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "\"https://github.com/camziny\"", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "    ", type: "indent" },
      { text: "email", type: "property" },
      { text: ": ", type: "punctuation" },
      { text: "\"mailto:cameronziny@gmail.com\"", type: "string" },
      { text: ",", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "},", type: "punctuation" },
    ],
    [
      { text: "} ", type: "punctuation" },
      { text: "as const", type: "keyword" },
      { text: ";", type: "punctuation" },
    ],
    [],
    [
      { text: "(", type: "punctuation" },
      { text: "Object", type: "type" },
      { text: ".", type: "punctuation" },
      { text: "keys", type: "type" },
      { text: "(", type: "punctuation" },
      { text: "camZiny", type: "property" },
      { text: ".", type: "punctuation" },
      { text: "socials", type: "property" },
      { text: ") ", type: "punctuation" },
      { text: "as ", type: "keyword" },
      { text: "SocialPlatform", type: "type" },
      { text: "[]).", type: "punctuation" },
      { text: "forEach", type: "type" },
      { text: "((", type: "punctuation" },
      { text: "platform", type: "property" },
      { text: ") ", type: "punctuation" },
      { text: "=> ", type: "keyword" },
      { text: "{", type: "punctuation" },
    ],
    [
      { text: "  ", type: "indent" },
      { text: "renderLink", type: "type" },
      { text: "(", type: "punctuation" },
      { text: "platform", type: "property" },
      { text: ", ", type: "punctuation" },
      { text: "camZiny", type: "property" },
      { text: ".", type: "punctuation" },
      { text: "socials", type: "property" },
      { text: "[", type: "punctuation" },
      { text: "platform", type: "property" },
      { text: "]);", type: "punctuation" },
    ],
    [
      { text: "});", type: "punctuation" },
    ],
  ], []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const commandInterval = setInterval(() => {
        setCommandTyped((prev) => {
          const next = prev + 1;
          if (next >= command.length) {
            clearInterval(commandInterval);
            setTimeout(() => setShowCode(true), 400);
            return command.length;
          }
          return next;
        });
      }, 80);

      return () => clearInterval(commandInterval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, [command.length]);

  useEffect(() => {
    if (!showCode) return;

    let currentLine = 0;
    const lineInterval = setInterval(() => {
      currentLine++;
      setActiveLines(currentLine);

      if (currentLine >= codeLines.length) {
        clearInterval(lineInterval);
        setIsTypingComplete(true);
        setTimeout(() => setShowLinks(true), 300);
      }
    }, 60);

    return () => clearInterval(lineInterval);
  }, [showCode, codeLines.length]);

  const links = [
    {
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      link: "https://linkedin.com/in/cameron-ziny",
      label: "linkedin",
    },
    {
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/camziny",
      label: "github",
    },
    {
      icon: (
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      link: "mailto:cameronziny@gmail.com",
      label: "email",
    },
  ];

  const getTokenClass = (type: Token["type"]) => {
    switch (type) {
      case "keyword":
        return "text-violet-600 dark:text-violet-400";
      case "type":
        return "text-cyan-600 dark:text-cyan-400";
      case "string":
        return "text-sky-600 dark:text-sky-400";
      case "property":
        return "text-gray-800 dark:text-gray-200";
      case "punctuation":
        return "text-gray-600 dark:text-gray-400";
      case "indent":
        return "";
      default:
        return "text-gray-700 dark:text-gray-300";
    }
  };

  const renderLine = (line: CodeLine, lineIndex: number) => {
    if (lineIndex >= activeLines) return null;

    return (
      <motion.div
        key={lineIndex}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className="flex items-start"
      >
        <span className="w-4 sm:w-5 md:w-6 lg:w-7 text-right mr-1 sm:mr-1.5 md:mr-2 lg:mr-3 text-gray-400 dark:text-gray-600 text-[9px] sm:text-[10px] md:text-xs select-none flex-shrink-0 pt-0.5">
          {lineIndex + 1}
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm leading-relaxed whitespace-pre">
          {line.length === 0 ? (
            <span>&nbsp;</span>
          ) : (
            line.map((token, tokenIndex) => (
              <span key={tokenIndex} className={getTokenClass(token.type)}>
                {token.text}
              </span>
            ))
          )}
          {lineIndex === activeLines - 1 && showCursor && !isTypingComplete && (
            <span className="inline-block w-[2px] h-[1.1em] bg-cyan-500 dark:bg-cyan-400 ml-[1px] align-middle" />
          )}
        </span>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
    >
      <div className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-1 sm:gap-1.5 md:gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-400 dark:bg-red-500" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400 dark:bg-yellow-500" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-400 dark:bg-green-500" />
          </div>
          <div className="flex-1" />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-2.5 sm:p-4 md:p-5 lg:p-6">
          <div className="space-y-0.5 sm:space-y-1 font-mono min-h-[300px] sm:min-h-[350px] overflow-x-auto">
            <div className="flex items-start mb-2">
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-green-600 dark:text-green-400">
                $&nbsp;
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-gray-700 dark:text-gray-300">
                {command.slice(0, commandTyped)}
                {!showCode && showCursor && (
                  <span className="inline-block w-[2px] h-[1.1em] bg-cyan-500 dark:bg-cyan-400 ml-[1px] align-middle" />
                )}
              </span>
            </div>
            {showCode && codeLines.map((line, index) => renderLine(line, index))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              {links.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: showLinks ? 1 : 0,
                    scale: showLinks ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 
                             bg-white dark:bg-gray-700 rounded-md sm:rounded-lg border border-gray-200 dark:border-gray-600 
                             text-gray-600 dark:text-gray-300
                             hover:border-cyan-400 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400
                             transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
