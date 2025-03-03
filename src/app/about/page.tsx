import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "About - Cam Ziny",
};

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg mt-20 overflow-hidden dark:bg-gray-800 dark:text-gray-100">
        <div className="md:flex">
          <div className="md:w-1/3 bg-cyan-50 dark:bg-gray-700 p-6 flex flex-col items-center justify-between text-center md:text-left">
            <div className="w-full flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500 dark:border-cyan-300 mb-6">
                <Image 
                  src="/images/pic.jpg" 
                  alt="Cam Ziny" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Cam Ziny</h1>
              <p className="text-cyan-600 dark:text-cyan-300 font-medium mb-6">Software Developer</p>
              
              <div className="flex space-x-4 text-2xl text-gray-700 dark:text-gray-300 mb-8">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
                  <FaGithub />
                </a>
                <a href="mailto:your.email@example.com" className="hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
                  <FaEnvelope />
                </a>
              </div>
            </div>
            
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Areas of Focus</h3>
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {[
                  "Full Stack Web Development", 
                  "Mobile Development", 
                  "API Development & Integration",
                  "Database Architecture & Design",
                  "LLM Development & Fine-Tuning",
                  "Cloud Architecture"
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 dark:text-gray-100 text-center md:text-left">
              About Me
              <div className="h-1 w-24 bg-cyan-500 dark:bg-cyan-300 mt-2 relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"></div>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-700 mb-6 dark:text-gray-200 text-center md:text-left">
              Former NCAA Division 1 athlete passionate about languages, traveling,
              cars, and football (both kinds). During my 6+ years tenure as a
              practice manager for a multi-site optometry practice, I led end-to-end
              implementation of our practice management and patient outreach
              software.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 mb-8 dark:text-gray-200 text-center md:text-left">
              My enjoyment of this experience, combined with my deep interest in
              technology, led me to make a career switch to software engineering.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100 text-center md:text-left">Software Journey</h3>
              
              <div className="space-y-8 relative pl-10 md:pl-0">
                <div className="absolute left-3 md:left-[28px] top-0 bottom-0 w-0.5 bg-cyan-400 dark:bg-cyan-500"></div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0 mr-4 absolute left-[-20px] md:left-0 md:relative">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                    </div>
                  </div>
                  <div className="text-left pt-0">
                    <div className="inline-block bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded mb-2 ml-2 md:ml-0">2022</div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg">Software Engineering Bootcamp</h4>
                    <p className="text-cyan-600 dark:text-cyan-300 font-medium">Launch Academy</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Where it all began! Learned the fundamentals of software engineering.</p>
                  </div>
                </div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0 mr-4 absolute left-[-20px] md:left-0 md:relative">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></div>
                    </div>
                  </div>
                  <div className="text-left pt-0">
                    <div className="inline-block bg-gray-100 dark:bg-gray-700 text-xs font-medium px-2 py-1 rounded mb-2 ml-2 md:ml-0">2023-2024</div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg">Various Projects & Contract Work</h4>
                    <p className="text-cyan-600 dark:text-cyan-300 font-medium">Many places, many projects, many languages</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Freelancing, building side projects, and continuously leveling up my skills.</p>
                  </div>
                </div>
                
                <div className="flex items-start relative z-10">
                  <div className="flex-shrink-0 mr-4 absolute left-[-20px] md:left-0 md:relative">
                    <div className="w-6 h-6 rounded-full bg-cyan-500 dark:bg-cyan-400 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white dark:bg-gray-800"></div>
                    </div>
                  </div>
                  <div className="text-left pt-0">
                    <div className="inline-block bg-cyan-500 dark:bg-cyan-400 text-white dark:text-gray-900 text-xs font-medium px-2 py-1 rounded mb-2 ml-2 md:ml-0">2025</div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg">Software Developer</h4>
                    <p className="text-cyan-600 dark:text-cyan-300 font-medium">Epipelagic Ventures</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Building awesome things with code and solving real-world problems.</p>
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
