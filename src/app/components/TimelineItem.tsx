import React, { useState, useEffect, useRef } from "react";
import { TimelineItemProps } from "../types/TimelineItemTypes";
import { Chip } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

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

  const formatTimespan = (timespan: string) => {
    return timespan;
  };

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
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <div className="w-[9px] h-[9px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>
      
      <div
        className={`w-full md:max-w-md px-4 py-2 mb-8 ${
          index % 2 === 0 ? "md:pl-12 md:pr-4" : "md:pr-12 md:pl-4"
        }`}
      >
        <motion.div
          style={{ y, opacity }}
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            transition: { duration: 0.2 }
          }}
          className="overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 
                     rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50
                     transition-all duration-300"
        >
          <div className="p-5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-gray-50 to-gray-100 
                             dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  {item.cardTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.cardSubtitle}
                </p>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mt-2">
                  {formatTimespan(item.title)}
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 py-4 bg-gray-50 dark:bg-gray-800/80">
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
