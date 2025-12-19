"use client";
import React, { useState, useEffect, useRef } from "react";
import { TimelineItemProps } from "../types/TimelineItemTypes";
import { motion } from "framer-motion";

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = itemRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex w-full items-start pl-10 md:pl-0 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
      </div>
      
      <div className="absolute left-4 md:hidden transform -translate-x-1/2">
        <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
      </div>
      
      <div
        className={`w-full md:w-1/2 mb-8 ${
          index % 2 === 0 ? "md:pl-8" : "md:pr-8"
        }`}
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 
                     hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        >
          <div className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {item.icon}
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {item.cardTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">
                  {item.cardSubtitle}
                </p>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mt-2">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
          
          {item.skills.length > 0 && (
            <div className="px-5 pb-4">
              <div className="flex flex-wrap gap-1.5">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-700 
                             text-gray-600 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
