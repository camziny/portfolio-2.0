import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About - Cam Ziny",
};

const About = () => {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6">
      <div className="max-w-2xl mx-auto pt-24 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <Image
              src="/images/better-pic.jpg"
              alt="Cam Ziny"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg font-medium text-foreground">Cam Ziny</h1>
            <div className="flex items-center gap-3 mt-1.5">
              <a
                href="https://linkedin.com/in/cameron-ziny"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/camziny"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:cameronziny@gmail.com"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Former NCAA Division 1 athlete passionate about languages, traveling,
            cars, and football (both kinds). During my 6+ years tenure as a
            practice manager for a multi-site optometry practice, I led end-to-end
            implementation of our practice management and patient outreach
            software.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            My enjoyment of this experience, combined with my deep interest in
            technology, led me to make a career switch to software engineering.
          </p>
        </div>

        <Separator className="my-10" />

        <div>
          <h2 className="text-sm font-medium text-foreground mb-6">Journey</h2>

          <div className="space-y-6 relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

            <div className="flex items-start gap-4 relative">
              <div className="w-[11px] h-[11px] rounded-full bg-muted border border-border flex-shrink-0 mt-1 z-10" />
              <div>
                <span className="text-xs text-muted-foreground">2022</span>
                <h3 className="text-sm font-medium text-foreground">Software Engineering Bootcamp</h3>
                <p className="text-xs text-muted-foreground">Launch Academy</p>
                <p className="text-xs text-muted-foreground mt-1">Learned the fundamentals of software engineering.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-[11px] h-[11px] rounded-full bg-muted border border-border flex-shrink-0 mt-1 z-10" />
              <div>
                <span className="text-xs text-muted-foreground">2023 - 2024</span>
                <h3 className="text-sm font-medium text-foreground">Projects & Contract Work</h3>
                <p className="text-xs text-muted-foreground">Freelance</p>
                <p className="text-xs text-muted-foreground mt-1">Building side projects and leveling up skills.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 relative">
              <div className="w-[11px] h-[11px] rounded-full bg-foreground flex-shrink-0 mt-1 z-10" />
              <div>
                <span className="text-xs text-foreground font-medium">2025 - Present</span>
                <h3 className="text-sm font-medium text-foreground">Software Engineer</h3>
                <p className="text-xs text-muted-foreground">Epipelagic Ventures</p>
                <p className="text-xs text-muted-foreground mt-1">Building solutions and solving real-world problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
