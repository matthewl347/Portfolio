export const profile = {
  name: 'Matthew Lin',
  eyebrow: 'Computer and Information Science @ RPI',
  headline: 'I build reliable software across backend systems, full-stack apps, and embedded hardware.',
  summary:
    'RPI Computer and Information Science student (GPA 3.70) with internships in backend systems, web development, and Unity prototyping. I work on problems where correctness, performance, and real users matter — from ASP.NET Core services to React apps and ESP32 firmware.',
  location: 'Brooklyn, NY',
  email: 'matthewlin559@gmail.com',
  github: 'https://github.com/matthewl347',
  linkedin: 'https://linkedin.com/in/matthew-lin-36a4952ba',
  resume: `${import.meta.env.BASE_URL}Matthew_Lin_Resume.pdf`,
  formEndpoint: 'https://formspree.io/f/moeqlvyn',
}

export const highlights = [
  { value: '3', label: 'Software & web roles' },
  { value: '1st', label: 'HV Open Data Hackathon' },
  { value: '3.70', label: 'RPI GPA' },
]

export const education = {
  school: 'Rensselaer Polytechnic Institute',
  degree: 'B.S. in Computer and Information Science',
  graduation: 'Expected May 2028',
  gpa: '3.70 / 4.00',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Discrete Math',
    'Computer Architecture & OS',
    'Linear Algebra',
  ],
}

export const projects = [
  {
    title: 'Mess Environment Sensor System',
    meta: 'Western Digital sponsored · Sep. 2026 — Present',
    featured: true,
    href: 'https://github.com/AavanVadiwala/MESS-RCOS',
    description:
      'A Western Digital–sponsored indoor monitoring system that streams environmental data from ESP32 nodes, cleans invalid readings, and shows live conditions in a JavaScript GUI.',
    bullets: [
      'Achieved 97% data-delivery reliability streaming from ESP32 nodes over a local network by implementing device-to-device networking and flashing ESP-IDF firmware in C.',
      'Removed 98% of invalid readings across 4 environmental metrics by cleaning raw BME280 and BH1750 sensor data in R, producing reliable inputs for the display.',
      'Gave users real-time visibility into indoor conditions by building a JavaScript GUI for live sensor readings on a three-person team.',
    ],
    tech: ['C', 'Python', 'R', 'JavaScript', 'ESP32', 'ESP-IDF'],
  },
  {
    title: 'GoTo: Transit Desert Analysis',
    meta: 'HV Open Data Hackathon · Overall 1st Place',
    featured: true,
    href: 'https://github.com/EricL0512/GoTo-Transit-Planner',
    description:
      'A regional transit-access analysis tool that maps underserved areas, scores proposed bus routes, and visualizes before/after impact. Won overall 1st place out of 20 teams.',
    bullets: [
      'Won Overall 1st Place out of 20 teams at the HV Open Data Hackathon by building a regional transit-access score map proposing 15+ bus routes and extensions on a four-person team.',
      'Enabled transit-access scoring by cleaning and standardizing 100+ records across 3 datasets (population, income, bus stops) in Python.',
    ],
    tech: ['Python', 'HTML'],
  },
  {
    title: 'Better EHR',
    meta: 'HackRPI 2025',
    featured: true,
    href: 'https://github.com/WeihaoWu30/hackrpi-2025',
    description:
      'A full-stack electronic health record system with patient records, PDF export, real-time messaging, and AI-assisted visit summaries.',
    bullets: [
      'Cut manual note-taking time by an estimated 40% by integrating AssemblyAI streaming speech-to-text with Gemini 2.0 Flash to auto-generate structured clinical summaries.',
      'Built a full-stack EHR at HackRPI 2025 on a four-person team, with patient records, PDF export, and real-time messaging using React, Express, Firestore, and WebSockets.',
    ],
    tech: ['React', 'Node.js', 'Firebase', 'WebSockets'],
  },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'NYC DOE — Division of Instructional and Information Technology',
    location: 'New York, NY',
    dates: 'Jul. 2026 — Aug. 2026',
    bullets: [
      'Cut upload errors by 40% across 100+ daily submissions by consolidating concurrent writes into a single atomic database transaction, resolving document corruption.',
      'Reduced code complexity by 30% by refactoring a 1,000-line legacy ASP.NET Core document-processing function into 5 modular, reusable methods, speeding up team debugging.',
      'Protected enrollment data integrity across 100+ student records by wrapping registration writes in a single transaction, preventing partial-write failures.',
    ],
    tech: ['ASP.NET Core', 'SQL', 'Database Transactions'],
  },
  {
    role: 'Web Developer & Project Coordinator',
    company: 'Nebraska Wesleyan University — WISE Program',
    location: 'Remote',
    dates: 'May 2025 — Jun. 2025',
    bullets: [
      'Delivered a working website prototype in 8 weeks by leading a six-person team, presenting it to program stakeholders to decide on continued development.',
      'Kept a remote team on schedule across 10+ tasks by splitting frontend/backend work and managing the team’s Git workflow.',
      'Gave stakeholders a fully navigable prototype by building navigation, dropdown menus, and responsive styling across 6 pages in HTML, CSS, and JavaScript.',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'Git'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Bridge to College',
    location: 'Remote',
    dates: 'Mar. 2025 — Aug. 2025',
    bullets: [
      'Built a virtual HBCU campus tour for prospective students by developing a Unity and C# prototype with player movement and 10+ interactive features; presented to stakeholders.',
      'Defined the layout and navigation flow for the Unity prototype by designing 5 menu and campus-environment screens in Figma.',
    ],
    tech: ['Unity', 'C#', 'Figma'],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['ASP.NET Core', 'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Jest', 'Unity'],
  },
  {
    category: 'Backend, Data & AI',
    items: ['REST APIs', 'JSON', 'WebSockets', 'Firebase Firestore'],
  },
  {
    category: 'Embedded, Tools & Practices',
    items: ['ESP32', 'ESP-IDF', 'Embedded C', 'Git', 'Linux', 'Vite', 'Figma', 'Agile'],
  },
]
