import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  ai,
  frontend,
  mern,
  fullstack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "JS Native Developer",
    icon: mobile,
  },
  {
    title: "Node.js Backend Developer",
    icon: backend,
  },
  {
    title: "API & Database Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI-Assisted Web Developer",
    company_name: "Self Learning",
    icon: ai,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Used ChatGPT and AI tools to improve coding skills",
      "Built React and MERN projects using AI assistance",
      "Debugged and optimized applications with AI support",
      "Learned best practices through AI-guided tutorials",
    ],
  },

  {
    title: "Frontend Developer (Portfolio Project)",
    company_name: "Personal Project",
    icon: frontend,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Developed responsive portfolio using React",
      "Implemented animations using Framer Motion",
      "Integrated modern UI/UX designs",
      "Optimized website performance",
    ],
  },

  {
    title: "MERN Stack Developer",
    company_name: "Online Courses & Practice",
    icon: mern,
    iconBg: "#2F80ED",
    date: "2025 - Present",
    points: [
      "Learned MongoDB, Express, React, Node.js",
      "Built REST APIs and authentication systems",
      "Practiced database design",
      "Created CRUD applications",
    ],
  },
  {
    title: "Full Stack Developer (Practice & Projects)",
    company_name: "Remote / Self-Directed",
    icon: fullstack,
    iconBg: "#1C1C1C",
    date: "2025 - Present",
    points: [
      "Designed and developed full-stack web applications using MERN stack",
      "Implemented authentication, authorization, and RESTful APIs",
      "Collaborated with AI tools to improve development speed and code quality",
      "Followed industry best practices for clean and maintainable code",
      "Deployed applications using modern hosting platforms",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
