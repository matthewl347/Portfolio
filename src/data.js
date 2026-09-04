export const PROJECTS = [
  {
    id: "01",
    name: "goto",
    desc: "An AI-powered urban planning platform mapping regional transit deserts, built in 24 hours and placed first out of 20+ teams. Led data and research, aggregating NYSED, CDTA, and Census ACS datasets, and designed the walk-wait-ride methodology behind the platform's route-scoring engine.",
    stack: ["Python", "Data Analysis", "Route Scoring"],
    link: "#",
  },
  {
    id: "02",
    name: "market-simulator",
    desc: "A Godot game built with a small team, where I wrote enemy and item behavior systems in C# using signals, nodes, and scene composition. Designed a probability-based encounter algorithm to balance spawn pacing against difficulty.",
    stack: ["C#", "Godot", "Game AI"],
    link: "#",
  },
  {
    id: "03",
    name: "sunhees-farm-kitchen",
    desc: "A UI/UX redesign for a course final project, rebuilt from high-fidelity Figma prototypes. Streamlined the site's information architecture and cut redundant flows to improve overall navigability.",
    stack: ["Figma", "UX Research"],
    link: "#",
  },
  {
    id: "04",
    name: "wise-outreach",
    desc: "The official web app for Nebraska Wesleyan's WISE program, built to support educator outreach. Engineered responsive frontend components and reworked core navigation to remove layout redundancies.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
];

export const COMMITS = [
  {
    hash: "d4a1c7",
    date: "Apr 2026",
    role: "First Place, HV Open Data Hackathon",
    org: "Data & Research Lead",
    desc: "Won first out of 20+ teams building \"GoTo,\" an AI-powered transit-desert mapping platform. Aggregated and validated NYSED, CDTA, and Census ACS datasets and designed the walk-wait-ride scoring methodology.",
  },
  {
    hash: "9f6e22",
    date: "Jul 2026 — Aug 2026",
    role: "Software Engineering Intern",
    org: "NYC DOE, Division of Instructional and Information Technology",
    desc: "Refactored a monolithic ASP.NET Core backend into modular components with structured error handling. Consolidated registration writes into atomic transactions and resolved multi-user concurrency edge cases, including document upload race conditions.",
  },
  {
    hash: "3c08b5",
    date: "Mar 2025 — Aug 2025",
    role: "Frontend Engineer / Developer",
    org: "Bridge to College",
    desc: "Co-developed interactive virtual experiences in Unity (C#), writing application logic and state management systems for fluid runtime execution. Designed high-fidelity UIs in Figma, translated into responsive cross-platform clients.",
  },
  {
    hash: "17a9d0",
    date: "May 2025 — Jun 2025",
    role: "Frontend Web Developer & Project Manager",
    org: "Nebraska Wesleyan University",
    desc: "Built the official web app for NWU's WISE program to enhance digital outreach and educator engagement. Engineered responsive, accessible frontend components and optimized core site navigation.",
  },
];

export const MANIFEST = {
  languages: ["C", "C++", "C#", "Java", "Python", "JavaScript", "SQL"],
  frameworks: ["ASP.NET Core", "Unity", "Godot"],
  design: ["Figma", "Adobe", "Wix"],
  coursework: ["Data Structures", "Discrete Math", "Comp. Architecture & OS", "Linear Algebra"],
};

export const PROFILE = {
  name: "Matthew Lin",
  navPath: "~/matthew-lin",
  school: "Rensselaer Polytechnic Institute",
  major: "CS & Information / Web Technologies",
  tagline:
    "CS & ITWS student at RPI who likes turning messy legacy systems and rough interfaces into something modular, tested, and easy to reason about.",
  location: "Brooklyn, NY",
  gpa: "3.70 / 4.00",
  gradClass: "RPI, Class of 2028",
  openTo: "summer 2027 internships",
  email: "matthewlin559@gmail.com",
  phone: "929-308-6492",
  github: "https://github.com/matthewl347",
  githubLabel: "github.com/matthewl347",
  linkedin: "https://linkedin.com/in/matthew-lin-36a4952ba",
  linkedinLabel: "linkedin.com/in/matthew-lin-36a4952ba",
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
  // Sign up at https://formspree.io, create a form, and paste its endpoint
  // here (looks like "https://formspree.io/f/xxxxabcd"). Until this is set,
  // the contact form will show an error and point people at your email instead.
  formEndpoint: "https://formspree.io/f/moeqlvyn",
};
