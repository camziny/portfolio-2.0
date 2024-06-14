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
    <div className="mt-32  sm:mt-0 container mx-auto px-4">
      {/* <div className="py-10 sm:py-0 flex justify-center sm:justify-end">
        <div className="absolute top-5 sm:relative sm:top-0">
          <ThreeDScene />
        </div>
      </div> */}
      {/* <div className="py-16 sm:py-0"> */}
      <CamZiny />
      {/* </div> */}
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
