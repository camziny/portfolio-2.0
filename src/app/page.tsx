import React from "react";
import ProjectCard from "./components/ProjectCard";
import { ProjectsList } from "./data/projects";
import CamZiny from "./components/CamZiny";
import Contact from "./components/Contact";
import Scene from "./components/Scene";

export const metadata = {
  title: "Home - Cam Ziny",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between mt-16 lg:mt-24">
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-100 via-gray-100 to-transparent dark:from-cyan-900 dark:via-gray-800 dark:to-transparent z-0"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8 py-8 px-4 lg:px-16 rounded-xl z-10">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 ">
            <CamZiny />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center w-full lg:w-1/2">
            <div className="relative w-full h-[460px] p-4">
              <Scene />
            </div>
          </div>
        </div>
      </div>
      <section className="px-4 lg:px-16 mt-8 lg:mt-16">
        <h2 className="text-center text-2xl font-bold text-gray-700 dark:text-white">
          Projects
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {ProjectsList.map((project: any) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <div className="text-center px-5 py-5 rounded-lg mt-5 mb-5 mx-5 text-gray-200">
        <Contact />
      </div>
    </div>
  );
}
