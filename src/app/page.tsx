"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { ProjectsList } from "./data/projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import UnderlineMotion from "./components/UnderlineMotion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col items-center px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <TerminalSection />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-16 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            Projects
          </h2>
          <UnderlineMotion />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ProjectsList.map((project: any, index: number) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gray-50 dark:bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
      </section>
    </div>
  );
}

function TerminalSection() {
  const [activeLines, setActiveLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showLinks, setShowLinks] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [activeTab, setActiveTab] = useState<"ts" | "md">("ts");

  const terminalLines = [
    { type: "interface-start" },
    { type: "interface-prop", indent: 1, key: "name", value: "string" },
    { type: "interface-prop", indent: 1, key: "role", value: "string" },
    { type: "interface-prop", indent: 1, key: "location", value: "string" },
    { type: "interface-prop", indent: 1, key: "summary", value: "string" },
    { type: "interface-prop-long", indent: 1 },
    { type: "brace", content: "}" },
    { type: "blank" },
    { type: "const-start" },
    { type: "property", indent: 1, key: "name", value: '"Cam Ziny"' },
    { type: "property", indent: 1, key: "role", value: '"Software Engineer"' },
    { type: "property", indent: 1, key: "location", value: '"Boston, MA"' },
    { type: "template-start", indent: 1, key: "summary" },
    { type: "template-content", indent: 2, content: "Software engineer with a passion for" },
    { type: "template-content", indent: 2, content: "creating quality web applications. My expertise" },
    { type: "template-content", indent: 2, content: "lies in developing robust, scalable solutions" },
    { type: "template-content", indent: 2, content: "using modern technologies." },
    { type: "template-end", indent: 1 },
    { type: "socials-obj-start", indent: 1 },
    { type: "socials-entry", indent: 2, key: "linkedin", value: "https://linkedin.com/in/cameron-ziny" },
    { type: "socials-entry", indent: 2, key: "github", value: "https://github.com/camziny" },
    { type: "socials-entry", indent: 2, key: "email", value: "mailto:cameronziny@gmail.com" },
    { type: "socials-obj-end", indent: 1 },
    { type: "brace", content: "};" },
    { type: "blank" },
    { type: "foreach-call" },
    { type: "foreach-body", indent: 1 },
    { type: "foreach-end" },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let currentLine = 0;
      const typeInterval = setInterval(() => {
        currentLine++;
        setActiveLines(currentLine);

        if (currentLine >= terminalLines.length) {
          clearInterval(typeInterval);
          setIsTypingComplete(true);
          setTimeout(() => setShowLinks(true), 300);
        }
      }, 90);

      return () => clearInterval(typeInterval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, []);

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

  const renderLine = (line: any, index: number) => {
    const indent = "  ".repeat(line.indent || 0);
    const isVisible = index < activeLines;

    if (!isVisible) return null;

    const lineContent = () => {
      switch (line.type) {
        case "interface-start":
          return (
            <>
              <span className="text-violet-600 dark:text-violet-400">interface </span>
              <span className="text-cyan-600 dark:text-cyan-400">Human</span>
              <span className="text-gray-700 dark:text-gray-300"> {"{"}</span>
            </>
          );
        case "interface-prop":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-violet-600 dark:text-violet-400">readonly </span>
              <span className="text-gray-800 dark:text-gray-200">{line.key}</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-cyan-600 dark:text-cyan-400">{line.value}</span>
              <span className="text-gray-700 dark:text-gray-300">;</span>
            </>
          );
        case "interface-prop-long":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-violet-600 dark:text-violet-400">readonly </span>
              <span className="text-gray-800 dark:text-gray-200">socials</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-cyan-600 dark:text-cyan-400">Record</span>
              <span className="text-gray-700 dark:text-gray-300">{"<"}</span>
              <span className="text-sky-600 dark:text-sky-400">&apos;linkedin&apos;</span>
              <span className="text-gray-700 dark:text-gray-300"> | </span>
              <span className="text-sky-600 dark:text-sky-400">&apos;github&apos;</span>
              <span className="text-gray-700 dark:text-gray-300"> | </span>
              <span className="text-sky-600 dark:text-sky-400">&apos;email&apos;</span>
              <span className="text-gray-700 dark:text-gray-300">, </span>
              <span className="text-cyan-600 dark:text-cyan-400">string</span>
              <span className="text-gray-700 dark:text-gray-300">{">"}</span>
              <span className="text-gray-700 dark:text-gray-300">;</span>
            </>
          );
        case "brace":
          return <span className="text-gray-700 dark:text-gray-300">{line.content}</span>;
        case "blank":
          return <span>&nbsp;</span>;
        case "const-start":
          return (
            <>
              <span className="text-violet-600 dark:text-violet-400">const </span>
              <span className="text-gray-800 dark:text-gray-200">camZiny</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-cyan-600 dark:text-cyan-400">Human</span>
              <span className="text-gray-700 dark:text-gray-300"> = {"{"}</span>
            </>
          );
        case "property":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-gray-800 dark:text-gray-200">{line.key}</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-sky-600 dark:text-sky-400">{line.value}</span>
              <span className="text-gray-700 dark:text-gray-300">,</span>
            </>
          );
        case "template-start":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-gray-800 dark:text-gray-200">{line.key}</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-sky-600 dark:text-sky-400">`</span>
            </>
          );
        case "template-content":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-sky-600 dark:text-sky-400">{line.content}</span>
            </>
          );
        case "template-end":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-sky-600 dark:text-sky-400">`</span>
              <span className="text-gray-700 dark:text-gray-300">,</span>
            </>
          );
        case "socials-obj-start":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-gray-800 dark:text-gray-200">socials</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-gray-700 dark:text-gray-300">{"{"}</span>
            </>
          );
        case "socials-entry":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-gray-800 dark:text-gray-200">{line.key}</span>
              <span className="text-gray-500 dark:text-gray-400">: </span>
              <span className="text-sky-600 dark:text-sky-400">&quot;{line.value}&quot;</span>
              <span className="text-gray-700 dark:text-gray-300">,</span>
            </>
          );
        case "socials-obj-end":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-gray-700 dark:text-gray-300">{"},"}</span>
            </>
          );
        case "foreach-call":
          return (
            <>
              <span className="text-cyan-600 dark:text-cyan-400">Object</span>
              <span className="text-gray-700 dark:text-gray-300">.</span>
              <span className="text-cyan-600 dark:text-cyan-400">entries</span>
              <span className="text-gray-700 dark:text-gray-300">(</span>
              <span className="text-gray-800 dark:text-gray-200">camZiny</span>
              <span className="text-gray-700 dark:text-gray-300">.</span>
              <span className="text-gray-800 dark:text-gray-200">socials</span>
              <span className="text-gray-700 dark:text-gray-300">).</span>
              <span className="text-cyan-600 dark:text-cyan-400">forEach</span>
              <span className="text-gray-700 dark:text-gray-300">(([</span>
              <span className="text-gray-800 dark:text-gray-200">platform</span>
              <span className="text-gray-700 dark:text-gray-300">, </span>
              <span className="text-gray-800 dark:text-gray-200">url</span>
              <span className="text-gray-700 dark:text-gray-300">])</span>
              <span className="text-violet-600 dark:text-violet-400"> =&gt; </span>
              <span className="text-gray-700 dark:text-gray-300">{"{"}</span>
            </>
          );
        case "foreach-body":
          return (
            <>
              <span className="text-gray-400">{indent}</span>
              <span className="text-cyan-600 dark:text-cyan-400">renderLink</span>
              <span className="text-gray-700 dark:text-gray-300">(</span>
              <span className="text-gray-800 dark:text-gray-200">platform</span>
              <span className="text-gray-700 dark:text-gray-300">, </span>
              <span className="text-gray-800 dark:text-gray-200">url</span>
              <span className="text-gray-700 dark:text-gray-300">);</span>
            </>
          );
        case "foreach-end":
          return (
            <span className="text-gray-700 dark:text-gray-300">{"});"}</span>
          );
        default:
          return <span>{line.content}</span>;
      }
    };

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className="flex items-start"
      >
        <span className="w-5 sm:w-6 md:w-7 lg:w-8 text-right mr-1.5 sm:mr-2 md:mr-3 lg:mr-4 text-gray-400 dark:text-gray-600 text-[10px] sm:text-xs md:text-sm select-none flex-shrink-0 pt-0.5">
          {index + 1}
        </span>
        <span className="font-mono text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-pre leading-relaxed">
          {lineContent()}
          {index === activeLines - 1 && showCursor && !isTypingComplete && (
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
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <button
                onClick={() => setActiveTab("ts")}
                className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-md border transition-colors ${
                  activeTab === "ts"
                    ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                    : "bg-transparent border-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Image 
                  src="/images/ts-logo-128.svg" 
                  alt="TypeScript" 
                  width={16}
                  height={16}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                />
                <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400">cam-ziny.ts</span>
              </button>
              <button
                onClick={() => setActiveTab("md")}
                className={`flex items-center gap-1 sm:gap-1.5 md:gap-2 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-md border transition-colors ${
                  activeTab === "md"
                    ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600"
                    : "bg-transparent border-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-500" viewBox="0 0 16 16" fill="currentColor">
                  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400">README.md</span>
              </button>
            </div>
          </div>
          <div className="w-8 sm:w-12 md:w-16" />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-2.5 sm:p-4 md:p-5 lg:p-6 overflow-x-auto">
          {activeTab === "ts" ? (
            <>
              <div className="space-y-0.5 sm:space-y-1 min-w-fit font-mono">
                {terminalLines.map((line, index) => renderLine(line, index))}
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
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="prose prose-sm dark:prose-invert max-w-none"
            >
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cam Ziny
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                Software Engineer based in Boston, MA.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                I&apos;m a software engineer with a passion for creating quality web applications. 
                My expertise lies in developing robust, scalable solutions using modern technologies.
              </p>
              
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Connect
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {links.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 
                               bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 
                               text-gray-600 dark:text-gray-300
                               hover:border-cyan-400 hover:text-cyan-500 dark:hover:border-cyan-400 dark:hover:text-cyan-400
                               transition-all duration-200"
                  >
                    {item.icon}
                    <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
