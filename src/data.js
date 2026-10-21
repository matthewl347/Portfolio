export const profile = {
  name: 'Matthew Lin',
  eyebrow: 'Computer Science + Information & Web Technologies @ RPI',
  headline: 'I build reliable software across backend systems, full-stack apps, and embedded hardware.',
  summary:
    'I am an RPI student focused on software engineering problems where correctness, performance, and real users matter. My experience spans ASP.NET Core backend systems, React and Node.js applications, embedded ESP32 projects, and data-driven tools.',
  location: 'New York City, NY',
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
  degree: 'B.S. in Computer Science and Information & Web Technologies',
  graduation: 'Expected Dec. 2028',
  gpa: '3.70 / 4.00',
  coursework: [
    'Data Structures',
    'Discrete Mathematics and Computing',
    'Computer Architecture and Operating Systems',
    'Linear Algebra',
  ],
}

export const projects = [
  {
    title: 'Better EHR',
    meta: 'HackRPI 2025',
    featured: true,
    description:
      'A full-stack electronic health record system with patient records, PDF export, real-time physician messaging, and AI-assisted visit summaries.',
    bullets: [
      'Built patient record creation and retrieval plus PDF export and real-time physician messaging on a four-person team.',
      'Integrated AssemblyAI streaming speech-to-text with Gemini 2.0 Flash to turn visit transcripts into structured clinical summaries.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Firebase', 'WebSockets', 'Gemini API', 'AssemblyAI'],
  },
  {
    title: 'GoTo: Transit Desert Analysis',
    meta: 'HV Open Data Hackathon · Overall 1st Place',
    featured: true,
    description:
      'A regional transit-access analysis tool that combines demographic and transit data to surface underserved areas and support route planning.',
    bullets: [
      'Collected and cleaned population-density, income, and bus-stop datasets in Python, standardizing formats and filtering irrelevant records.',
      'Collaborated on a four-person demo showing transit-access scores, proposed bus routes, and route extensions.',
    ],
    tech: ['Python', 'HTML', 'Data Cleaning', 'Open Data'],
  },
  {
    title: 'Mess Environment Sensor System',
    meta: 'Western Digital sponsored · Sep. 2026 — Present',
    featured: true,
    description:
      'An ESP32-based indoor monitoring system for studying relationships between building age and environmental conditions.',
    bullets: [
      'Assembled ESP32 hardware and flashed firmware with ESP-IDF on a three-person team.',
      'Verified BME280 and BH1750 sensors for temperature, humidity, pressure, and light measurements.',
    ],
    tech: ['ESP32', 'ESP-IDF', 'C', 'BME280', 'BH1750'],
  },
]

export const experience = [
  {
    role: 'Software Development Internship',
    company: 'NYC DOE — Division of Instructional and Information Technology',
    location: 'New York, NY',
    dates: 'Jul. 2026 — Aug. 2026',
    bullets: [
      'Fixed document corruption during overlapping uploads by consolidating writes into a single database transaction and validating the fix with repeated sample uploads.',
      'Refactored a large legacy ASP.NET Core document-processing function into smaller, reusable methods for individual processing steps.',
      'Consolidated registration database writes into a single transaction to keep related updates consistent.',
    ],
    tech: ['ASP.NET Core', 'Database Transactions', 'Debugging', 'Concurrency'],
  },
  {
    role: 'Web Development & Project Coordination',
    company: 'Nebraska Wesleyan University — WISE Program',
    location: '',
    dates: 'May 2025 — Jun. 2025',
    bullets: [
      'Led a six-person team to deliver a working promotional website prototype for a university program.',
      'Implemented site navigation, dropdown menus, and frontend styling using HTML, CSS, and JavaScript.',
      'Maintained a shared task list, divided frontend and backend work, and coordinated Git contributions for asynchronous collaboration.',
    ],
    tech: ['JavaScript', 'HTML/CSS', 'Git', 'Project Coordination'],
  },
  {
    role: 'Software Development Internship',
    company: 'Bridge to College',
    location: 'Remote · Part-time',
    dates: 'Mar. 2025 — Aug. 2025',
    bullets: [
      'Developed player movement and environmental interactions in Unity and C# for an HBCU campus-exploration prototype.',
      'Built building-entry and school-information interactions and designed the application menu and campus environment in Figma.',
    ],
    tech: ['Unity', 'C#', 'Figma', 'State Management'],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['ASP.NET Core', 'React', 'Express.js', 'Bootstrap', 'Unity'],
  },
  {
    category: 'Backend & Data',
    items: ['Node.js', 'Firebase Firestore', 'REST APIs', 'WebSockets', 'Database Transactions'],
  },
  {
    category: 'Hardware & Tools',
    items: ['Git', 'Figma', 'ESP32', 'ESP-IDF'],
  },
  {
    category: 'APIs & Technologies',
    items: ['Gemini API', 'AssemblyAI API', 'Real-time Messaging', 'Speech-to-Text'],
  },
]
