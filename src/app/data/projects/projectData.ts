import divox3 from "../images/divox3.png";
import zfit from "../images/zfit.png";
import { StaticImageData } from "next/image";

interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  links: {
    demo?: string;
    source?: string;
    appStore?: string;
  };
  purpose: string;
  role: string;
  technicalHurdles: string[];
  solutions: string[];
}

export const projects: Project[] = [
  {
    name: "divoxutils",
    image: divox3,
    description:
      "divoxutils is a specialized tool designed for the Dark Age of Camelot gaming community. It offers a unique blend of features tailored to enhance the gaming experience for enthusiasts of this classic MMORPG.",
    keyFeatures: [
      "Character Lists: Users can compile all of their Dark Age of Camelot characters into a single, manageable list.",
      "Leaderboards: See where you stand in both 'All Time' and 'Last Week' categories, offering competitive insight into your game standing.",
      "Group Builder: A novel feature allowing users to create in-game group setups by adding other users and selecting characters for each participant.",
      "Discord Bot: Seamlessly integrate with your Discord server, providing access to a range of commands that fetch information and statistics about users and their characters.",
      "User Authentication: Discord SSO with Clerk to ensure ease of use and secure access for our users.",
    ],
    technologies: [
      "NextJS & TypeScript",
      "Clerk/NextJS for user management and authentication",
      "Vercel for hosting",
      "Prisma for database management",
      "PostgreSQL for data storage",
      "Playwright for testing",
    ],
    links: {
      demo: "https://divoxutils.com",
      source: "https://github.com/camziny/divoxutils",
    },
    purpose:
      "To provide a comprehensive suite of tools for Dark Age of Camelot players to enhance their gaming experience and community engagement.",
    role: "Sole developer and project owner: Managed all aspects of the 'divoxutils' project from conception to deployment.",
    technicalHurdles: [
      "Reducing request times and preventing timeout errors when loading large user lists, which became a significant issue as some users have lists with over 100 characters.",
    ],
    solutions: [
      "Modified the database schema for optimized data handling and implemented cron jobs to periodically update and pre-process data, significantly reducing load times and preventing timeout errors.",
    ],
  },
  {
    name: "z-fit",
    image: zfit,
    description:
      "A mobile fitness app built with Expo for structured strength training. Organizes workouts by body part with curated templates, then guides users through per-set logging with support for varied equipment, loading modes, and exercise variations.",
    keyFeatures: [
      "Training organized by body part with curated workout templates",
      "Session flow that starts from templates and tracks per-set reps and weights",
      "Support for barbell, dumbbell, kettlebell, cable, machine, and bodyweight exercises",
      "Loading modes including bar, pair, and single with per-implement instructions",
      "Weighted and bodyweight variations, including assisted and bodyweight plus",
      "Suggested weights based on prior sessions, rest timers, and kg/lbs support",
      "Workout history and cross-device progress sync via sign-in",
    ],
    technologies: [
      "Expo",
      "Expo Router",
      "React Native",
      "TypeScript",
      "Convex",
      "Clerk",
      "Gluestack UI",
    ],
    links: {
      demo: "https://z-fit.app/",
      appStore: "https://apps.apple.com/app/id1645436117",
    },
    purpose:
      "To give people who train seriously a clear, focused way to execute workouts and track progress — without the clutter of generic fitness apps.",
    role: "Sole developer — designed, built, and shipped the full app rewrite and marketing site.",
    technicalHurdles: [
      "Modeling exercises across equipment types, loading modes, and variations without overwhelming the workout flow",
      "Building a reproducible media pipeline for exercise content generation and syncing",
      "Keeping active session state responsive and synced across devices with Convex",
    ],
    solutions: [
      "Structured exercise data around implement types, loading modes, and variation display rules",
      "Built a documented media workflow for consistent exercise media generation and deployment",
      "Used Convex for real-time progress sync and Clerk for authentication across the Expo app",
    ],
  },
];

export const fetchProjectData = (projectName: string): Project | undefined => {
  const project = projects.find((p) => p.name === projectName);
  return project;
};
