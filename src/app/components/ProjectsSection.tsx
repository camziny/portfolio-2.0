"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectsList } from "../data/projects";
import { Separator } from "@/components/ui/separator";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featuredProject = ProjectsList[0];
  const otherProjects = ProjectsList.slice(1);

  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-lg font-medium text-foreground">Projects</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Things I&apos;ve built.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-start gap-4">
              <Link
                href={`/project/${featuredProject.name}`}
                className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0"
              >
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Link href={`/project/${featuredProject.name}`} className="font-medium text-foreground hover:underline">
                    {featuredProject.name}
                  </Link>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded">
                    Featured
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {featuredProject.skills}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight className="w-3 h-3" />
                    Live
                  </a>
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FiGithub className="w-3 h-3" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAll ? "Show less" : `All projects (${otherProjects.length})`}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: showAll ? "auto" : 0,
            opacity: showAll ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <Separator className="mt-4" />
          <div className="divide-y divide-border">
            {otherProjects.map((project: any) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
