import React from "react";
import ProjectShow from "../../components/ProjectShow";
import { fetchProjectData } from "../../data/projects/projectData";
import Image, { StaticImageData } from "next/image";
interface Project {
  name: string;
  description: string;
}

type PageProps = {
  params: {
    project: string;
  };
};

export default function Page({ params }: PageProps) {
  const projectName = decodeURIComponent(params.project);
  const projectData = fetchProjectData(projectName);

  if (!projectData) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <ProjectShow project={projectData} />
    </div>
  );
}
