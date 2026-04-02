"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  links: {
    demo?: string;
    source?: string;
  };
  purpose: string;
  role: string;
  technicalHurdles: string[];
  solutions: string[];
}

interface ProjectProps {
  project: Project;
}

const ProjectShow: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          <div className="flex items-start gap-4 mt-8">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                {project.name}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
            {project.links.source && (
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <FiGithub className="w-3.5 h-3.5" />
                Source
              </a>
            )}
          </div>

          <Separator className="my-8" />

          <div className="space-y-8">
            <Section title="Technologies">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Section>

            <Section title="Key Features">
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-foreground mt-1.5 block w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Purpose">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.purpose}</p>
            </Section>

            <Section title="Role">
              <p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p>
            </Section>

            {project.technicalHurdles.length > 0 && (
              <Section title="Challenges & Solutions">
                <div className="space-y-4">
                  {project.technicalHurdles.map((hurdle, index) => (
                    <div key={index} className="rounded-lg border border-border p-4">
                      <p className="text-sm font-medium text-foreground">
                        {hurdle}
                      </p>
                      <Separator className="my-3" />
                      <p className="text-sm text-muted-foreground">
                        {project.solutions[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-sm font-medium text-foreground mb-3">{title}</h2>
    {children}
  </div>
);

export default ProjectShow;
