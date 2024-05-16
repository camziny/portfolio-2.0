import React from "react";
import ProjectShow from "../../components/ProjectShow";
import { fetchProjectData } from "../../data/projects/projectData";
import Image, { StaticImageData } from "next/image";
import type { Metadata } from "next";
interface Project {
  name: string;
  description: string;
}

type PageProps = {
  params: {
    project: string;
  };
};

interface ProjectPageParams {
  project: string;
}

export function generateMetadata({
  params,
}: {
  params: ProjectPageParams;
}): Metadata {
  const projectName = decodeURIComponent(params.project);
  const projectData = fetchProjectData(projectName);

  if (!projectData) {
    return {
      title: "Project Not Found - Cam Ziny",
    };
  }

  return {
    title: `${projectData.name} - Cam Ziny`,
    description: projectData.description,
  };
}

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
