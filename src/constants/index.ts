const experiences = [
  {
    title: "Data Analyst",
    company_name: "Endominance",
    icon: "/img/endominance.png",
    iconBg: "#383E56",
    date: "October 2022 - December 2023",
    points: [
      "Created reports on study participation and results for study clients.",
      "Cleaned and validated data for thousands of participants.",
      "Analyzed study data and identified consistent fraudulent activity, improved study protocols, resulting in reduced costs due to such errors. ",
      "Lead meetings with partnering clinics regarding study analytics and participant engagement data.",
      "Contacted participants, resolved issues or complaints, and ensured their completion of the study.",
    ],
  },
  {
    title: "Physical Therapy Technician",
    company_name: "The Center for Physical Therapy and Sports Medicine",
    icon: "/img/centerpt.png",
    iconBg: "#E6DEDD",
    date: "July 2021 - February 2022",
    points: [
      "Handled up to 6 patients at a time, guiding them through exercises, providing hands-on assistance, and offering support.",
      "Communicated with patients, regularly checking on their well-being and adjusting their exercise plans to match their progress.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Pivot",
    icon: "/img/pivot.png",
    iconBg: "#383E56",
    date: "November 2020 - July 2021",
    points: [
      "Ensured patients were checked in on time and started their exercises promptly to avoid delays and conflicting appointments.",
      "Demonstrated and thoroughly explained exercises to patients.",
    ],
  },
];

const tech = [
  { name: "html", icon: "/img/html.svg" },
  { name: "css", icon: "/img/css.svg" },
  { name: "javascript", icon: "/img/javascript.svg" },
  { name: "typescript", icon: "/img/typescript.svg" },
  { name: "react", icon: "/img/react.svg" },
  { name: "next", icon: "/img/next.svg" },
  { name: "bootstrap", icon: "/img/bootstrap.svg" },
  { name: "material-ui", icon: "/img/material-ui.svg" },
  { name: "redux", icon: "/img/redux.svg" },
  { name: "git", icon: "/img/git.svg" },
  { name: "github", icon: "/img/github.svg" },
];

const projects = [
  {
    name: "TwistaGram",
    description:
      "TwistaGram is a twist on two powerful social media platforms Twitter and Instagram. It is easy to share life updates and is designed to be mobile friendly.",
    tags: [
      {
        name: "typescript",
        color: "text-orange-600",
      },
      {
        name: "next.js",
        color: "text-red-600",
      },
      {
        name: "nextauth.js",
        color: "text-green-600",
      },
      {
        name: "mui",
        color: "text-orange-600",
      },
      {
        name: "tRPC",
        color: "text-red-600",
      },
      {
        name: "planetscale",
        color: "text-green-600",
      },
      {
        name: "prisma",
        color: "text-orange-600",
      },
    ],
    image: "/img/project-4.png",
    source_code_link: "https://github.com/Re-boot-Coding-Bootcamp/TwistaGram",
    website_link: "https://twistagram.re-boot.us/",
  },
  {
    name: "Bazaar",
    description:
      "Welcome to Bazaar! Explore a wide range of features and an variety selection on our mock ecommerce  website. Checkout some of the test products.",
    tags: [
      {
        name: "typescript",
        color: "text-orange-600",
      },
      {
        name: "next.js",
        color: "text-red-600",
      },
      {
        name: "nextauth.js",
        color: "text-green-600",
      },
      {
        name: "tailwindcss",
        color: "text-orange-600",
      },
      {
        name: "tRPC",
        color: "text-red-600",
      },
      {
        name: "planetscale",
        color: "text-green-600",
      },
      {
        name: "prisma",
        color: "text-orange-600",
      },
    ],
    image: "/img/project-5.png",
    source_code_link: "https://github.com/Re-boot-Coding-Bootcamp/Bazaar",
    website_link: "https://bazaar.re-boot.us/",
  },
  {
    name: "To Do List",
    description:
      "A simple designed application allowing you to organize and manage your daily task effortlessly and efficiently. This app stores your data locally so you task will persist until cleared.",
    tags: [
      {
        name: "react",
        color: "text-orange-600",
      },
      {
        name: "bootstrap",
        color: "text-red-600",
      },
      {
        name: "aws",
        color: "text-green-600",
      },
    ],
    image: "/img/project-2.png",
    source_code_link: "https://github.com/Jack-Vu/Jack-todo-list",
    website_link: "https://todolist.jack-vu.com/",
  },
  {
    name: "Calculator",
    description:
      "This web calculator was built using pure css, html, and javascript. It offers simple arithmetic operations like add, subtract, multiple, divide, percentages, and sign changes, all within a user-friendly design.",
    tags: [
      {
        name: "javascript",
        color: "text-orange-600",
      },
      {
        name: "html",
        color: "text-red-600",
      },
      {
        name: "css",
        color: "text-green-600",
      },
    ],
    image: "/img/project-1.png",
    source_code_link: "https://github.com/Jack-Vu/calculator",
  },

  {
    name: "Match Maker",
    description:
      "Match Maker is a fun memory game developed in react. Increase the game difficulty by changing the speed or grid size. Great for improve memory and reaction time.",
    tags: [
      {
        name: "react",
        color: "text-orange-600",
      },
      {
        name: "mui",
        color: "text-red-600",
      },
    ],
    image: "/img/project-3.png",
    source_code_link: "https://github.com/Jack-Vu/match-maker",
  },
];
export { experiences, tech, projects };
