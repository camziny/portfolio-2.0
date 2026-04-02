"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto pb-32">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-foreground/20 border border-border" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground/50">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground/50">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div className="absolute md:left-8 left-8 top-0 bottom-32 w-px bg-border overflow-hidden">
          <motion.div
            style={{
              scaleY,
              opacity,
            }}
            className="absolute inset-0 w-px bg-foreground/30 origin-top"
          />
        </div>
      </div>
    </div>
  );
};
