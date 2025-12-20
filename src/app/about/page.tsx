import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "About - Cam Ziny",
};

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 mb-4">
              <Image 
                src="/images/better-pic.jpg" 
                alt="Cam Ziny" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cam Ziny</h1>
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full mb-4"></div>
            <div className="flex space-x-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <a 
                href="https://linkedin.com/in/cameron-ziny" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/camziny" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:cameronziny@gmail.com" 
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Former NCAA Division 1 athlete passionate about languages, traveling,
                cars, and football (both kinds). During my 6+ years tenure as a
                practice manager for a multi-site optometry practice, I led end-to-end
                implementation of our practice management and patient outreach
                software.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                My enjoyment of this experience, combined with my deep interest in
                technology, led me to make a career switch to software engineering.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Journey</h3>
              
              <div className="space-y-5 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
                
                <div className="flex items-start gap-4 relative">
                  <div className="w-[15px] h-[15px] rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex-shrink-0 mt-0.5 z-10"></div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">2022</span>
                    <h4 className="font-medium text-gray-900 dark:text-white">Software Engineering Bootcamp</h4>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">Launch Academy</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Learned the fundamentals of software engineering.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 relative">
                  <div className="w-[15px] h-[15px] rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 flex-shrink-0 mt-0.5 z-10"></div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-500">2023-2024</span>
                    <h4 className="font-medium text-gray-900 dark:text-white">Projects & Contract Work</h4>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">Freelance</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Building side projects and leveling up skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 relative">
                  <div className="w-[15px] h-[15px] rounded-full bg-cyan-500 flex-shrink-0 mt-0.5 z-10"></div>
                  <div>
                    <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">2025 - Present</span>
                    <h4 className="font-medium text-gray-900 dark:text-white">Software Engineer</h4>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">Epipelagic Ventures</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Building solutions and solving real-world problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
