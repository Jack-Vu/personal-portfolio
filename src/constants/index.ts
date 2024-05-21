const intro = `Welcome to my website! Here, you'll find a showcase of my projects
and work experience, reflecting my journey and passion for software
development. Whether you\'re here to explore my work or learn more
about my skills, I invite you to browse through and see what I\'ve
accomplished. If you have any questions or would like to get in
touch, please feel free to contact me at any time. I\'m always open
to new opportunities and connections!`;

const about = `I\’m a software developer with a background in healthcare and biotechnology, eager to connect with others who share my interests. Beyond coding, I have a passion for puzzles and board games—anything that challenges my mind and encourages creative thinking. For the past six years, I\'ve been dedicated to powerlifting, a sport that has taught me the value of determination and resilience. The supportive community has been incredibly rewarding. Feel free to explore my projects and work experience, and don\’t hesitate to reach out if you\’d like to connect.`;

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Endominance",
    icon: "/assets/img/endominance.png",
    iconBg: "#383E56",
    date: "October 2022 - December 2023",
    points: [
      "Created reports on study participation and results for study clients.",
      "Cleaned and validated data for thousands of participants.",
      "Analyzed study data and identified consistent fraudulent activity, improved study protocols, resulting in reduced costs due to such errors. ",
      "Led meetings with partnering clinics regarding study analytics and participant engagement data.",
      "Contacted participants, resolved issues or complaints, and ensured their completion of the study.",
    ],
  },
  {
    title: "Physical Therapy Technician",
    company_name: "The Center for Physical Therapy and Sports Medicine",
    icon: "/assets/img/centerpt.png",
    iconBg: "#E6DEDD",
    date: "July 2021 - February 2022",
    points: [
      "Handled up to 6 patients at a time, guiding them through exercises, providing hands-on assistance, and offering support.",
      "Communicated with patients, regularly checking on their well-being and adjusting their exercise plans to match their progress.",
    ],
  },
  {
    title: "Physical Therapy Aide",
    company_name: "Pivot",
    icon: "/assets/img/pivot.png",
    iconBg: "#383E56",
    date: "November 2020 - July 2021",
    points: [
      "Ensured patients were checked in on time and started their exercises promptly to avoid delays and conflicting appointments.",
      "Demonstrated and thoroughly explained exercises to patients.",
    ],
  },
];

const tech = [
  { name: "html", icon: "/assets/img/html.svg" },
  { name: "css", icon: "/assets/img/css.svg" },
  { name: "javascript", icon: "/assets/img/javascript.svg" },
  { name: "typescript", icon: "/assets/img/typescript.svg" },
  { name: "react", icon: "/assets/img/react.svg" },
  { name: "next", icon: "/assets/img/next.svg" },
  { name: "bootstrap", icon: "/assets/img/bootstrap.svg" },
  { name: "material-ui", icon: "/assets/img/material-ui.svg" },
  { name: "redux", icon: "/assets/img/redux.svg" },
  { name: "git", icon: "/assets/img/git.svg" },
  { name: "github", icon: "/assets/img/github.svg" },
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
    image: "/assets/img/project-4.png",
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
    image: "/assets/img/project-5.png",
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
    image: "/assets/img/project-2.png",
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
    image: "/assets/img/project-1.png",
    source_code_link: "https://github.com/Jack-Vu/calculator",
    website_link: "https://calculator.jack-vu.com",
  },

  {
    name: "Match Maker",
    description:
      "Match Maker is a fun memory game developed in react. Increase the game difficulty by changing the speed or grid size. Great for improve memory and reaction time.",
    tags: [
      {
        name: "javascript",
        color: "text-orange-600",
      },
      {
        name: "react",
        color: "text-red-600",
      },
      {
        name: "mui",
        color: "text-green-600",
      },
    ],
    image: "/assets/img/project-3.png",
    source_code_link: "https://github.com/Jack-Vu/match-maker",
    website_link: "https://match-maker.jack-vu.com/",
  },
];

const testimonies = [
  {
    name: "Hye Lee",
    title: "Re:boot Colleague",
    content: `"Jack is a dependable colleague, always ready to assist and offer
    guidance. His patience and willingness to help, even with basic
    questions, highlight his admirable demeanor. With his knowledge
    and support, he will undoubtedly contribute to the success of any
    team he joins."`,
  },
  {
    name: "Muradil Erkin",
    title: " Re:boot Instructor & Founder",
    content: `"Couldn't have completed major class projects without all of his
    contributions and help; Jack is well on his way to being a Full
    Stack Web Developer and, furthermore, he is a teammate we all can
    count on. His dedication and hard work are truly admirable. I have
    no doubt he'll continue to excel in the future!"`,
  },
  {
    name: "Shin Kim",
    title: "Re:boot Colleague",
    content: `"Jack's performance is consistently exceptional! It fills me with
    pride to have collaborated with him on multiple projects.
    Observing his rapid learning speed, akin to a sponge absorbing
    water, inspires me to redouble my efforts. I'm looking forward to
    seeing him achieve great things."`,
  },
];
export { experiences, tech, projects, intro, about, testimonies };
