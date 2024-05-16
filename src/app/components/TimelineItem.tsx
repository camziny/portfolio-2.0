import React, { useState, useEffect, useRef } from "react";
import { TimelineItemProps } from "../types/TimelineItemTypes";
import { Chip } from "@nextui-org/chip";

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const initialVisibilityClass = isVisible ? "visible" : "invisible";

  return (
    <div
      ref={itemRef}
      className={`flex w-full items-start ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }
        ${initialVisibilityClass} ${
        isVisible ? "animate-slideInSmooth" : "animate-none"
      }`}
    >
      <div
        className={`w-full md:max-w-md px-4 py-2 mb-4 ${
          index % 2 === 0 ? "md:pl-12 md:pr-4" : "md:pr-12 md:pl-4"
        }`}
      >
        <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg rounded-b-none p-2 md:p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="flex-grow">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                {item.cardTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {item.cardSubtitle}
              </p>
            </div>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-xs md:text-sm mt-2 md:mt-4">
            {item.title}
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 rounded-b-lg p-1">
          <div className="mt-2">
            {item.skills.map((skill, skillIndex) => (
              <Chip
                key={skillIndex}
                className="inline-block bg-cyan-500 dark:bg-cyan-600 px-3 py-1 rounded-md text-sm text-white mr-2 mb-1"
              >
                {skill}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
