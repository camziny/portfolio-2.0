import React from "react";
import ProjectCard from "./components/ProjectCard";
import { ProjectsList } from "./data/projects";
import CamZiny from "./components/CamZiny";
import Contact from "./components/Contact";
import ThreeDScene from "./components/ThreeDScene";

export const metadata = {
  title: "Home - Cam Ziny",
};

export default function Home() {
  return (
    <div className="sm:mt-0 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="order-2 lg:order-1 py-16 sm:py-8 md:py-4 lg:py-2 w-full lg:w-auto">
          <CamZiny />
        </div>
        <div className="order-1 lg:order-2 py-10 lg:py-2 flex justify-center sm:justify-end w-full lg:w-auto h-64 sm:h-auto mt-0 sm:mt-0">
          <div className="relative sm:relative top-0 sm:top-0 -mt-16 sm:mt-0">
            <ThreeDScene />
          </div>
        </div>
      </div>
      <section className="mt-12">
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
