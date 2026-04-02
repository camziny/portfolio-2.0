"use client";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

type Token = {
  text: string;
  type: "keyword" | "string" | "property" | "punctuation" | "indent";
};

type CodeLine = Token[];

export default function TerminalSection() {
  const [commandTyped, setCommandTyped] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [activeLines, setActiveLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showLinks, setShowLinks] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const command = "cat cam-ziny.json";

  const codeLines: CodeLine[] = useMemo(
    () => [
      [{ text: "{", type: "punctuation" }],
      [
        { text: "  ", type: "indent" },
        { text: '"name"', type: "property" },
        { text: ": ", type: "punctuation" },
        { text: '"Cam Ziny"', type: "string" },
        { text: ",", type: "punctuation" },
      ],
      [
        { text: "  ", type: "indent" },
        { text: '"role"', type: "property" },
        { text: ": ", type: "punctuation" },
        { text: '"Software Engineer"', type: "string" },
        { text: ",", type: "punctuation" },
      ],
      [
        { text: "  ", type: "indent" },
        { text: '"location"', type: "property" },
        { text: ": ", type: "punctuation" },
        { text: '"Boston, MA"', type: "string" },
        { text: ",", type: "punctuation" },
      ],
      [
        { text: "  ", type: "indent" },
        { text: '"about"', type: "property" },
        { text: ": ", type: "punctuation" },
        { text: '"Mostly working with TypeScript', type: "string" },
      ],
      [
        { text: "    ", type: "indent" },
        { text: 'and React, but always trying new things."', type: "string" },
      ],
      [{ text: "}", type: "punctuation" }],
    ],
    []
  );

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
    }, 80);

    return () => clearInterval(lineInterval);
  }, [showCode, codeLines.length]);

  const links = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      link: "https://linkedin.com/in/cameron-ziny",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/camziny",
      label: "GitHub",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      link: "mailto:cameronziny@gmail.com",
      label: "Email",
    },
  ];

  const getTokenClass = (type: Token["type"]) => {
    switch (type) {
      case "string":
        return "text-foreground/70";
      case "property":
        return "text-foreground";
      case "punctuation":
        return "text-muted-foreground";
      case "indent":
        return "";
      default:
        return "text-foreground";
    }
  };

  const renderLine = (line: CodeLine, lineIndex: number) => {
    if (lineIndex >= activeLines) return null;

    return (
      <motion.div
        key={lineIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="leading-7 sm:leading-8"
      >
        <span className="font-mono text-xs sm:text-sm whitespace-pre">
          {line.map((token, tokenIndex) => (
            <span key={tokenIndex} className={getTokenClass(token.type)}>
              {token.text}
            </span>
          ))}
          {lineIndex === activeLines - 1 && showCursor && !isTypingComplete && (
            <span className="inline-block w-[2px] h-[1.1em] bg-foreground ml-[1px] align-middle" />
          )}
        </span>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg sm:max-w-xl"
    >
      <div className="rounded-lg overflow-hidden border border-border bg-card">
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-foreground/10" />
            <div className="w-3 h-3 rounded-full bg-foreground/10" />
            <div className="w-3 h-3 rounded-full bg-foreground/10" />
          </div>
          <span className="text-[11px] text-muted-foreground/60 ml-2 font-mono">~</span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="font-mono mb-1">
            <span className="text-xs sm:text-sm text-muted-foreground">$ </span>
            <span className="text-xs sm:text-sm text-foreground">
              {command.slice(0, commandTyped)}
              {!showCode && showCursor && (
                <span className="inline-block w-[2px] h-[1.1em] bg-foreground ml-[1px] align-middle" />
              )}
            </span>
          </div>

          {showCode && (
            <div className="mt-3">
              {codeLines.map((line, index) => renderLine(line, index))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: showLinks ? 1 : 0, y: showLinks ? 0 : 8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-4 border-t border-border"
          >
            <div className="flex gap-2">
              {links.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showLinks ? 1 : 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-xs sm:text-sm"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
