"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Project {
  name: string;
  image: StaticImageData;
  skills: string;
  link: string;
  github?: string;
  appStore?: string;
}

const ProjectCard = ({
  project: { name, image, skills, link, github, appStore },
}: {
  project: Project;
}) => {
  return (
    <div className="group flex items-start gap-4 py-4 px-1 -mx-1 rounded-lg transition-colors hover:bg-muted/50">
      <Link href={`project/${name}`} className="relative w-10 h-10 rounded-md overflow-hidden bg-muted flex-shrink-0 mt-0.5">
        <Image
          alt={`${name} project`}
          src={image}
          fill
          className="object-cover"
        />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Link href={`project/${name}`} className="font-medium text-foreground truncate hover:underline">
            {name}
          </Link>
          <div className="flex gap-1.5 ml-auto flex-shrink-0">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-[10px] font-medium"
                aria-label="App Store"
              >
                iOS
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiGithub className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
          {skills}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
