import React from "react";

export const metadata = {
  title: "About - Cam Ziny",
};

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-20 dark:bg-gray-700 dark:text-gray-100">
        <div className="flex items-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 dark:text-gray-100">
            About Me
            <div className="h-1 w-24 bg-cyan-500 dark:bg-cyan-300 mx-auto mt-1"></div>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-700 mb-4 dark:text-gray-200">
          Former NCAA Division 1 athlete passionate about languages, traveling,
          cars, and football (both kinds). During my 6+ years tenure as a
          practice manager for a multi-site optometry practice, I led end-to-end
          implementation of our practice management and patient outreach
          software.
        </p>
        <p className="text-base sm:text-lg text-gray-700 mb-4 dark:text-gray-200">
          My enjoyment of this experience, combined with my deep interest in
          technology, led me to make a career switch to software engineering. I
          am currently pursuing software development roles at an innovative
          company. Open to remote roles or hybrid / onsite roles in the Greater
          Boston Area.
        </p>
      </div>
    </div>
  );
};

export default About;
