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
        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
      </div>
      
      <div className="absolute left-4 md:hidden transform -translate-x-1/2">
        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
      </div>
      
      <div
        className={`w-full md:w-1/2 mb-6 ${
          index % 2 === 0 ? "md:pl-8" : "md:pr-8"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-500 dark:text-gray-400">
                {item.icon}
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                  {item.cardTitle}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                  {item.cardSubtitle}
                </p>
                <p className="text-cyan-600 dark:text-cyan-400 text-xs font-medium mt-1.5">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
          
          {item.skills.length > 0 && (
            <div className="px-4 pb-3">
              <div className="flex flex-wrap gap-1">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-1.5 py-0.5 text-[10px] rounded bg-gray-100 dark:bg-gray-700 
                             text-gray-500 dark:text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
