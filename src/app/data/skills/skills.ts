export enum SkillType {
  Language = "Languages",
  Backend = "Backend",
  Frontend = "Frontend",
  Database = "Database",
  Cloud = "Cloud",
  Testing = "Testing",
  Other = "Other",
}

export interface Skill {
  name: string;
  type: SkillType;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    type: SkillType.Language,
  },
  {
    name: "TypeScript",
    type: SkillType.Language,
  },
  {
    name: "Python",
    type: SkillType.Language,
  },
  {
    name: "Java",
    type: SkillType.Language,
  },
  {
    name: "C",
    type: SkillType.Language,
  },
  {
    name: "C++",
    type: SkillType.Language,
  },
  {
    name: "C#",
    type: SkillType.Language,
  },
  {
    name: "Node.js",
    type: SkillType.Backend,
  },
  {
    name: "Express.js",
    type: SkillType.Backend,
  },
  {
    name: "Ruby on Rails",
    type: SkillType.Backend,
  },
  {
    name: "Docker",
    type: SkillType.Backend,
  },
  {
    name: "API Development",
    type: SkillType.Backend,
  },
  {
    name: "Prisma",
    type: SkillType.Backend,
  },
  {
    name: "Drizzle",
    type: SkillType.Backend,
  },
  {
    name: "Sequelize",
    type: SkillType.Backend,
  },
  {
    name: "Knex.js",
    type: SkillType.Backend,
  },
  {
    name: "REST APIs",
    type: SkillType.Backend,
  },
  {
    name: "JSON",
    type: SkillType.Backend,
  },
  {
    name: "OAuth",
    type: SkillType.Backend,
  },
  {
    name: "HTTP",
    type: SkillType.Backend,
  },
  {
    name: "AJAX",
    type: SkillType.Backend,
  },
  {
    name: "Routing",
    type: SkillType.Backend,
  },
  {
    name: "Nginx",
    type: SkillType.Backend,
  },
  {
    name: "Postman",
    type: SkillType.Backend,
  },
  {
    name: "Microservices",
    type: SkillType.Backend,
  },
  {
    name: "Websockets",
    type: SkillType.Backend,
  },
  {
    name: "SQL",
    type: SkillType.Database,
  },
  {
    name: "PostgreSQL",
    type: SkillType.Database,
  },
  {
    name: "MySQL",
    type: SkillType.Database,
  },
  {
    name: "SQLite",
    type: SkillType.Database,
  },
  {
    name: "MongoDB",
    type: SkillType.Database,
  },
  {
    name: "React.js",
    type: SkillType.Frontend,
  },
  {
    name: "Next.js",
    type: SkillType.Frontend,
  },
  {
    name: "Vue.js",
    type: SkillType.Frontend,
  },
  {
    name: "Angular",
    type: SkillType.Frontend,
  },
  {
    name: "jQuery",
    type: SkillType.Frontend,
  },
  {
    name: "React Native",
    type: SkillType.Frontend,
  },
  {
    name: "Material UI",
    type: SkillType.Frontend,
  },
  {
    name: "Shadcn UI",
    type: SkillType.Frontend,
  },
  {
    name: "Next UI",
    type: SkillType.Frontend,
  },
  {
    name: "HTML",
    type: SkillType.Frontend,
  },
  {
    name: "CSS",
    type: SkillType.Frontend,
  },
  {
    name: "Responsive Design",
    type: SkillType.Frontend,
  },
  {
    name: "Tailwind CSS",
    type: SkillType.Frontend,
  },
  {
    name: "Foundation",
    type: SkillType.Frontend,
  },
  {
    name: "EJS",
    type: SkillType.Frontend,
  },
  {
    name: "Sass/SCSS",
    type: SkillType.Frontend,
  },
  {
    name: "Playwright",
    type: SkillType.Testing,
  },
  {
    name: "Cypress",
    type: SkillType.Testing,
  },
  {
    name: "Jest",
    type: SkillType.Testing,
  },
  {
    name: "Selenium",
    type: SkillType.Testing,
  },
  {
    name: "Enzyme",
    type: SkillType.Testing,
  },
  {
    name: "Unit Testing",
    type: SkillType.Testing,
  },
  {
    name: "Test Driven Development",
    type: SkillType.Testing,
  },
  {
    name: "Git",
    type: SkillType.Other,
  },
  {
    name: "Github",
    type: SkillType.Other,
  },
  {
    name: "Agile",
    type: SkillType.Other,
  },
  {
    name: "Scrum",
    type: SkillType.Other,
  },
  {
    name: "Data Structures",
    type: SkillType.Other,
  },
  {
    name: "Design Patterns",
    type: SkillType.Other,
  },
  {
    name: "OOP",
    type: SkillType.Other,
  },
  {
    name: "Full-Stack Development",
    type: SkillType.Other,
  },
  {
    name: "CI/CD",
    type: SkillType.Other,
  },
  {
    name: "Webpack",
    type: SkillType.Other,
  },
  {
    name: "Babel",
    type: SkillType.Other,
  },
  {
    name: "Heroku",
    type: SkillType.Other,
  },
  {
    name: "Jira",
    type: SkillType.Other,
  },
  {
    name: "Framer Motion",
    type: SkillType.Frontend,
  },
  {
    name: "GraphQL",
    type: SkillType.Frontend,
  },
  {
    name: "Three.js",
    type: SkillType.Frontend,
  },
  {
    name: "React Three Fiber",
    type: SkillType.Frontend,
  },
];

export const fetchSkillData = (
  skillName?: string
): Skill | Skill[] | undefined => {
  if (skillName) {
    return skills.find((s) => s.name === skillName);
  }
  return skills;
};
