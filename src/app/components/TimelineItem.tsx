import React, { useState, useEffect, useRef } from "react";
import { TimelineItemProps } from "../types/TimelineItemTypes";
import { Chip } from "@nextui-org/react";
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex w-full items-start ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-full md:max-w-md px-4 py-2 mb-8 ${
          index % 2 === 0 ? "md:pl-12 md:pr-4" : "md:pr-12 md:pl-4"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 
                     rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          
          <div className="p-5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
                {item.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {item.cardTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.cardSubtitle}
                </p>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  className="bg-white dark:bg-gray-700 hover:bg-gray-50 
                           dark:hover:bg-gray-600 transition-colors duration-200
                           text-sm text-gray-700 dark:text-gray-300
                           border border-gray-200 dark:border-gray-600"
                  size="sm"
                  variant="flat"
                >
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
