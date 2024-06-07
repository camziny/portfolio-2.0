import divox3 from "../images/divox3.png";
import sightseeshare2 from "../images/sightseeshare2.png";
import myFC from "../images/myFC.png";
import humanOrAiLogo from "../images/humanOrAiLogo.png";
import zfit from "../images/zfit.png";
import tripLogo from "../images/tripLogo.png";
import Image, { StaticImageData } from "next/image";
import route9 from "../images/route 9 landscape.png";

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
    name: "Route 9 Landscape Products",
    image: route9,
    description:
      "Route 9 Landscape Products is an online platform designed to establish a strong online presence for a landscape products store. The platform includes a customer-facing application providing up-to-date inventory, detailed product information, and a robust admin application for managing content.",
    keyFeatures: [
      "Customer-Facing Application:",
      "Up-to-date Inventory: Provides real-time inventory updates, helping customers know the availability of products.",
      "Detailed Product Descriptions: Offers comprehensive information about each product, including images and descriptions.",
      "Google Maps Integration: Includes an interactive map to help customers locate the store easily.",
      "Contact Information: Provides easily accessible contact details for the store.",
      "Responsive Design: Ensures a seamless user experience across various devices and screen sizes.",
      "Admin Application",
      "Content Management: Allows administrators to update product information, inventory details, and other website content.",
      "User Authentication: Ensures that only authorized personnel can access the admin functionalities.",
      "Responsive Design: Ensures the interface is user-friendly and works well on various devices.",
    ],
    technologies: [
      "NextJS & TypeScript",
      "Drizzle ORM for database management",
      "PostgreSQL for data storage",
      "Clerk/NextJS for user management and authentication",
      "Tailwind CSS for styling",
      "Google Maps JS API for map integration (customer-facing app)",
      "Vercel for hosting",
    ],
    links: {
      demo: "https://r9-landscape.vercel.app/",
      source: "https://github.com/camziny/r9-landscape",
    },
    purpose:
      "To create an online presence for Route 9 Landscape Products and provide customers with up-to-date inventory, detailed product information, contact details, and general store information. Additionally, to provide store administrators with a robust and easy-to-use platform for managing and updating website content.",
    role: "Sole developer and project owner: Managed all aspects of the Route 9 Landscape Products project from conception to deployment.",
    technicalHurdles: [
      "I challenged myself to learn server actions to take advantage of the performance benefits when performing CRUD operations on product content.",
      "I am also awaiting the client's decision to add secure payments, which will be an exciting challenge I look forward to.",
    ],
    solutions: [
      "I was able to successfully implement server-actions, which allowed me to modify data on the server directly from the frontend when performing CRUD operations.",
    ],
  },
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
    name: "Sight.See.Share",
    image: sightseeshare2,
    description:
      "Sight.See.Share is a repository where users can share unique, exciting, and exceptional points of interest that they have found in their travels. You don't need an account to browse the points of interest - simply select the city that you want to browse, update the filters, and you'll be able to see what members of our community have shared!",
    keyFeatures: [
      "No account needed to browse points of interest",
      "Filter points of interest by city",
      "Real-time updates from the community",
      "Secure account creation and login for posting",
      "Interactive map integration with MapBox",
    ],
    technologies: [
      "React",
      "PostgreSQL",
      "TypeScript",
      "Sequelize",
      "Express",
      "Material UI",
      "MapBox",
    ],
    links: {
      demo: "https://sightseeshare.netlify.app/",
      source: "https://github.com/chingu-voyages/v45-tier3-team-47",
    },
    purpose:
      "To provide a platform where users can share and explore unique points of interest from around the world.",
    role: "Full-stack developer, collaboratively worked on backend and frontend aspects during a 6 week sprint as part of an internship at Chingu.",
    technicalHurdles: [
      "Implementing real-time data updates across the platform",
      "Integrating MapBox for an interactive mapping experience",
      "Ensuring secure user authentication and data integrity",
    ],
    solutions: [
      "Utilized WebSocket for real-time data communication",
      "Leveraged MapBox APIs for dynamic map functionalities",
      "Implemented robust authentication and authorization checks using best security practices",
    ],
  },
  {
    name: "Human or AI",
    image: humanOrAiLogo,
    description:
      "Full-stack web application where users can guess whether images are generated by a human or by artificial intelligence. This app aims to develop a database to better categorize AI-generated content for customers.",
    keyFeatures: [
      "Authentication system to register, sign in, and sign out",
      "Categorized lists of human-made and AI-generated images",
      "Vote functionality allowing users to vote 'human' or 'AI' on each image",
      "Responsive 'results' feature updating immediately after a user votes",
    ],
    technologies: [
      "PERN stack (PostgreSQL, Express, React, Node)",
      "Heroku",
      "Passport for authentication",
      "AWS S3 for image storage",
      "Material UI for frontend design",
    ],
    links: {
      demo: "https://human-or-ai.herokuapp.com/",
      source: "https://github.com/camziny/human-or-ai",
    },
    purpose:
      "To create an engaging platform where users can interactively guess the origin of images, enhancing understanding of AI capabilities in image generation.",
    role: "Sole developer",
    technicalHurdles: [
      "Integrating AWS S3 for efficient image storage and retrieval",
      "Ensuring secure and seamless user authentication using Passport",
      "Real-time update of results after voting",
    ],
    solutions: [
      "Implemented AWS S3 for scalable and secure image storage",
      "Utilized Passport to manage user authentication and session management",
      "Used React state management and server-side logic to update results dynamically",
    ],
  },
  {
    name: "z-fit",
    image: zfit,
    description:
      "Fitness Mobile app created to provide exercises and full workouts categorized by muscle group, complete with guided gifs, built-in rest periods, a pause feature, and an estimated calorie burn counter.",
    keyFeatures: [
      "Categorized exercises by muscle group",
      "Guided exercise gifs demonstrating proper form",
      "Built-in rest periods and pause functionality",
      "Estimated calorie burn count per exercise",
    ],
    technologies: [
      "React Native",
      "useContext API",
      "Responsive Design",
      "Custom StyleSheet Objects",
    ],
    links: {
      demo: "https://apps.apple.com/us/app/z-fit-app/id1645436117",
      source: "https://github.com/camziny/z-fit",
    },
    purpose:
      "To help users achieve their fitness goals by providing a comprehensive, easy-to-use mobile fitness guide that includes detailed exercise routines with visual aids and tracking features.",
    role: "Sole developer, responsible for design, implementation, and testing of the app.",
    technicalHurdles: [
      "Implementing responsive design in a mobile environment to accommodate various device sizes",
      "Integrating dynamic rest timers and pause functionality within workout sessions",
      "Creating and managing custom StyleSheet objects for aesthetic and functional design",
    ],
    solutions: [
      "Used React Native's flexbox for responsive layouts to ensure proper display on different devices",
      "Developed timer and pause logic within the app's state management using useContext",
      "Designed a modular StyleSheet system that allows for reusability and easy maintenance",
    ],
  },
  {
    name: "myFc",
    image: myFC,
    description:
      "Integrated Rapid Sports API into a Node.js / Express and React.js web application. This app allows users to create and manage their custom fantasy-like football squads.",
    keyFeatures: [
      "Integration of Rapid Sports API for real-time sports data",
      "User functionality to create and manage fantasy football squads",
      "Ajax functionality for seamless data updates without reloading the page",
    ],
    technologies: [
      "Node.js",
      "Express",
      "React.js",
      "PostgreSQL",
      "Foundation",
      "Custom CSS",
      "Ajax",
    ],
    links: {
      demo: "https://my-fc-app.herokuapp.com/",
      source: "https://github.com/camziny/myFC",
    },
    purpose:
      "To provide a comprehensive platform for football enthusiasts to create and manage their own fantasy football teams using real-time data from the Rapid Sports API.",
    role: "Sole developer, responsible for integrating the API, designing the user interface, and implementing the database management system.",
    technicalHurdles: [
      "Incorporating the Rapid Sports API effectively to fetch real-time player statistics",
      "Designing a user-friendly interface for team management",
      "Developing a robust system for users to save and manage their squads in the database",
    ],
    solutions: [
      "Utilized Ajax for real-time data fetching and updates to enhance user experience",
      "Implemented a responsive design using Foundation and custom CSS to ensure usability across devices",
      "Designed and implemented a PostgreSQL database schema that allows users to store and retrieve their squad data efficiently",
    ],
  },
  {
    name: "Trip",
    image: tripLogo,
    description:
      "A collaborative project developed using React.js, focusing on user authentication, authorization, and comprehensive CRUD functionality. The project involved building out internal Express APIs, integrating external APIs, and managing image uploads with AWS S3, all within a group collaboration setting employing TDD and git workflows.",
    keyFeatures: [
      "User authentication and authorization",
      "CRUD functionality for managing trip data",
      "Drag and drop image functionality",
      "Hosting images on AWS S3",
      "Integration with various external APIs",
    ],
    technologies: [
      "React.js",
      "Express",
      "Node.js",
      "AWS S3",
      "TDD with Jest",
      "Git for version control",
    ],
    links: {
      demo: "https://trip-destination-evaluation.herokuapp.com/",
      source: "https://github.com/camziny/trip",
    },
    purpose:
      "To provide a platform for users to rate their trips and experiences, with a focus on ease of use and robust data management.",
    role: "Collaborative role as one of four full-stack developers, with specific focus on implementing authentication, CRUD functionality, and the drag and drop image feature.",
    technicalHurdles: [
      "Implementing drag and drop functionality for image uploads",
      "Configuring AWS S3 for secure and efficient image hosting",
      "Ensuring robust authentication and authorization to protect user data",
    ],
    solutions: [
      "Integrated react-dropzone for the front-end to handle drag and drop of images",
      "Configured AWS S3 buckets for storage and retrieval of images ensuring security and scalability",
      "Implemented JWT-based authentication and role-based authorization to secure application endpoints",
    ],
  },
];

export const fetchProjectData = (projectName: string): Project | undefined => {
  const project = projects.find((p) => p.name === projectName);
  return project;
};
