const experiences = [
  {
    title: "React.js Developer",
    company_name: "Endominance",
    icon: "/img/endominance.png",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "The Center for Physical Therapy and Sports Medicine",
    icon: "/img/centerpt.png",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Pivot",
    icon: "/img/pivot.png",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "To Do List",
    description:
      "Built with React and deployed using AWS Amplify. It is a simple design allowing you to organize and manage your daily task effortlessly and efficiently. This app stores your data local so you task will persist until cookies and caches are cleared.",
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
  },
  {
    name: "Match Maker",
    description:
      "Match Maker is a fun memory game developed in react. Can be made more difficult by increasing the speed of the game or size of the grid. If you get stuck, try out the hint button. Great for improve memory and reaction time.",
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
    active: true,
    pos: 3,
    idx: 3,
  },
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
    active: false,
    pos: 4,
    idx: 4,
  },
  {
    name: "Bazaar",
    description:
      "Welcome to Bazaar, your ultimate destination for a comprehensive e-commerce experience. Explore a wide range of features and an variety selection of items.",
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
    active: false,
    pos: 5,
    idx: 5,
  },
];
export { experiences, tech, projects };
