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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  StormcellLogo,
  aniQuotes,
  admin,
  priceUs,
  sweetTooth,
  ipTracker,
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
    id: "tools",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "StormCell",
    icon: StormcellLogo,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Started as an intern and contributed to developing and maintaining web applications using React.js and related technologies.",
      "Collaborated with team members, including designers and developers, to support the creation of high-quality features.",
      "Implemented responsive design for optimal user experience across various devices.",
      "Gained experience in debugging and fixing minor issues to improve application performance.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "StormCell",
    icon: StormcellLogo,
    iconBg: "#E6DEDD",
    date: "July 2024",
    points: [
      "Started as a React Native developer, building mobile apps like a Weather App for real-time forecasts and 'Done With It' for selling unused items.",
      "Worked on creating intuitive, responsive interfaces to improve user interaction and experience.",
      "Assisted in troubleshooting and optimizing app performance for better functionality.",
      "Enhanced skills through hands-on projects, adapting quickly to new tools and challenges.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "StormCell",
    icon: StormcellLogo,
    iconBg: "#383E56",
    date: "AUG 2024",
    points: [
      "Developed and maintained an e-commerce website using React.js and related technologies.",
      "Collaborated with designers and developers to deliver a high-quality, user-friendly platform.",
      "Implemented responsive design for seamless functionality across devices and browsers.",
      "Optimized performance and ensured smooth user experiences.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make 3D website as beautiful as this, but Ronald proved me wrong.",
    name: "Mr victor",
    designation: "CEO",
    company: "StormCell",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their Learning new things like Ronald does.",
    name: "Mike",
    designation: "Senior Full Stack developer",
    company: "StormCell",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Even as a junior Web Dev he's ability to adapt and grow is seemless.",
    name: "Ehi",
    designation: "PHP Back-End dev",
    company: "StormCell",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AniQuotes",
    description:
      "A website that randomly genarates popular anime quotes in real time,  and lets you search a variety of quotes from our api",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: aniQuotes,
    source_code_link: "https://github.com/fats-cmd?tab=repositories",
  },
  {
    name: "Admin Dashboard",
    description:
      " An admin dashboard for an e-commerce website, that sshows users data and statistics",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "graph",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/fats-cmd?tab=repositories",
  },
  {
    name: "priceUs",
    description:
      " An e-commerce website that lets you buy and sell varius technology products at affordable projects",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: priceUs,
    source_code_link: "https://github.com/fats-cmd?tab=repositories",
  },
  {
    name: "sweet tooths",
    description: " A website for tasty and wonderful deserts ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: sweetTooth,
    source_code_link: "https://github.com/fats-cmd?tab=repositories",
  },
  {
    name: "Morent",
    description: " A website that lets you rent cars from relaible sources ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    source_code_link: "https://github.com/fats-cmd?tab=repositories",
  },
  {
    name: "Ip Tracker",
    description:
      " A website that uses a geolation and ip address api to show users location and ip address details ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "leafletjs & API",
        color: "pink-text-gradient",
      },
    ],
    image: ipTracker,
    source_code_link: "https://github.com/fats-cmd?tab=repositories",
  },
];

export { 
  services, 
  technologies, 
  experiences, 
  testimonials, 
  projects
 };
