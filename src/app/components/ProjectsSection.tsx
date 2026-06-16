"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { ProjectsList } from "../data/projects";

export default function ProjectsSection() {
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

        <div className="space-y-4">
          {ProjectsList.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-start gap-4">
                  <Link
                    href={`/project/${project.name}`}
                    className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/project/${project.name}`}
                      className="font-medium text-foreground hover:underline"
                    >
                      {project.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {project.skills}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        Live
                      </a>
                      {project.appStore && (
                        <a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ArrowUpRight className="w-3 h-3" />
                          App Store
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <FiGithub className="w-3 h-3" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
