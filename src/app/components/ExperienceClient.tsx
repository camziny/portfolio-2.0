"use client";
import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "./ui/timeline";

const ExperienceClient = () => {
  const data = [
    {
      title: "Present",
      content: (
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1.5 rounded-md bg-muted">
                <Briefcase className="w-3.5 h-3.5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Epipelagic Ventures
                </p>
                <p className="text-xs text-muted-foreground">
                  Jan 2025 - Present
                </p>
              </div>
            </div>
            <div className="ml-9 mb-3">
              <div className="border-l border-border pl-3 space-y-2">
                <div>
                  <p className="text-sm text-foreground">Senior Software Engineer</p>
                  <p className="text-xs text-muted-foreground">Jan 2026 - Present</p>
                </div>
                <div>
                  <p className="text-sm text-foreground">Junior Software Developer</p>
                  <p className="text-xs text-muted-foreground">Jan 2025 - Jan 2026</p>
                </div>
              </div>
            </div>
            <div className="ml-9 flex flex-wrap gap-1">
              {["React", "React Native", "Flutter", "Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "AWS"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-1.5 rounded-md bg-muted">
                <Briefcase className="w-3.5 h-3.5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Innovators for Purpose
                </p>
                <p className="text-xs text-muted-foreground">
                  Instructor, Web Development · 2023 - Present
                </p>
              </div>
            </div>
            <div className="ml-9 flex flex-wrap gap-1">
              {["Node.js", "Express", "JavaScript", "Python", "SQLite"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-1.5 rounded-md bg-muted">
              <Briefcase className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Dart Co.
              </p>
              <p className="text-xs text-muted-foreground">
                Software Developer
              </p>
            </div>
          </div>
          <div className="ml-9 flex flex-wrap gap-1">
            {["React", "Vue.js", "Node.js", "Docker", "PostgreSQL", "TypeScript"].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-[10px]">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 rounded-md bg-muted">
                <Briefcase className="w-3.5 h-3.5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  myTindy
                </p>
                <p className="text-xs text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>
            <div className="ml-9 flex flex-wrap gap-1">
              {["React Native", "Node.js", "MongoDB", "TypeScript", "AWS"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 rounded-md bg-muted">
                <Briefcase className="w-3.5 h-3.5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Chingu
                </p>
                <p className="text-xs text-muted-foreground">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <div className="ml-9 flex flex-wrap gap-1">
              {["React", "Node.js", "PostgreSQL", "TypeScript"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 rounded-md bg-muted">
                <Briefcase className="w-3.5 h-3.5 text-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Scale AI
                </p>
                <p className="text-xs text-muted-foreground">
                  AI Trainer
                </p>
              </div>
            </div>
            <div className="ml-9 flex flex-wrap gap-1">
              {["Python", "JavaScript", "C++", "Java"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-[10px]">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-1.5 rounded-md bg-muted">
              <Briefcase className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Launch Academy
              </p>
              <p className="text-xs text-muted-foreground">
                Apprentice Developer
              </p>
            </div>
          </div>
          <div className="ml-9 flex flex-wrap gap-1">
            {["React", "Node.js", "PostgreSQL", "JavaScript"].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-[10px]">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2015 - 2022",
      content: (
        <div>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-muted">
              <Briefcase className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Natick Eye Associates
              </p>
              <p className="text-xs text-muted-foreground">
                Practice Manager
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2010 - 2014",
      content: (
        <div>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-muted">
              <GraduationCap className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Sacred Heart University
              </p>
              <p className="text-xs text-muted-foreground">
                Business Administration
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip min-h-screen bg-background pt-32 pb-20">
      <Timeline data={data} />
    </div>
  );
};

export default ExperienceClient;
