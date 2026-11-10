
export const profile = {
  name: "Jimboy Macalinao",
  initials: "JM",
  logo: "jim",

  photo: true,

  // Hero typing effect
  roles: [
    " an Applied Mathematics student",
    " an aspiring software developer",
    " a problem solver",
    " an analytical thinker",
    " a developer driven by real-world problems",
  ],

  tagline: "Applied Mathematics × Software Development",

  location: "Mercedes, Camarines Norte, Philippines",
  availability: "Open to Entry-Level Opportunities",

  heroDesc:
    "I combine mathematical thinking and software development to solve practical problems. From optimization algorithms to web applications, I enjoy transforming ideas, data, and real-world challenges into useful software solutions.",

  // About section
  about: [
    "I'm a 4th-year BS Applied Mathematics student with a growing background in software development. My academic foundation has trained me to approach problems analytically, understand complex systems, and think logically. I'm applying these skills to build practical software solutions.",

    "My journey into programming started with curiosity about how technology can solve real-world problems. I've explored Python, JavaScript, React, PHP, and database development through self-directed learning and hands-on projects.",

    "During my 200-hour On-the-Job Training at HeroApps Software Development Services, I gained practical experience working with a development team, improving frontend interfaces, implementing responsive layouts, and understanding collaborative software development workflows.",

    "I believe mathematics is more than formulas and equations. It is a foundation for logical thinking, optimization, and decision-making. I see software development as a way to turn those mathematical ideas into tools that people can actually use."
  ],

  facts: [
    { icon: "🧮", label: "Mathematical Foundation" },
    { icon: "💻", label: "Hands-on Development" },
    { icon: "📊", label: "Analytical Problem Solving" },
    { icon: "🚀", label: "Continuous Learning" },
  ],

  // Portfolio statistics
  stats: [
    { value: 2, suffix: "+", label: "Projects Built" },
    { value: 200, suffix: "", label: "OJT Hours Completed" },
    { value: 5, suffix: "+", label: "Programming Technologies" },
    { value: 1, suffix: "", label: "Mathematics-Driven Approach" },
  ],

  badges: [
    "📍 Camarines Norte, Philippines",
    "🎓 BS Applied Mathematics",
    "💼 Open to Opportunities",
  ],

  socials: [
    {
      name: "github",
      href: "https://github.com/macalinaojhim-cmyk",
      label: "GitHub",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/jimboy-macalinao-a55b2b416/",
      label: "LinkedIn",
    },
    {
      name: "facebook",
      href: "https://web.facebook.com/jimboy.macalinao",
      label: "Facebook",
    },
  ],
};


// TECHNOLOGY MARQUEE
export const marquee = [
  "Python",
  "JavaScript",
  "React",
  "PHP",
  "Java",
  "MySQL",
  "NumPy",
  "Pandas",
  "HTML",
  "CSS",
  "Git & GitHub",
  "Optimization",
];


// SKILLS
// Percentages are indicative self-assessments, not certifications.
export const skills = [
  { name: "Python", level: 75 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 65 },
  { name: "PHP", level: 50 },
  { name: "Java", level: 45 },
  { name: "MySQL / SQL", level: 50 },
  { name: "HTML & CSS", level: 75 },
  { name: "NumPy & Pandas", level: 65 },
];


// TOOLS AND TECHNOLOGIES
export const tools = [
  "Python",
  "JavaScript",
  "PHP",
  "Java",
  "React",
  "HTML5",
  "CSS3",
  "MySQL",
  "NumPy",
  "Pandas",
  "Streamlit",
  "Git & GitHub",
  "VS Code",
];

export const toolsNote =
  "Building a stronger foundation in full-stack development, backend programming, databases, and data-driven applications. Currently focusing on JavaScript, React, PHP, and SQL while exploring backend technologies.";


// PROJECTS
export const projects = [
  {
    title: "Print-Laminate Schedule Optimizer",
    category: "web",
    tag: "Optimization / Data Science",
    featured: true,
    emoji: "🖨️",
    gradient: ["#f59e0b", "#ef4444"],

    description:
      "A mathematics-driven scheduling application designed to optimize print-laminate job sequences. It applies computational logic and data processing to organize work orders, helping reduce scheduling conflicts and unnecessary idle time.",

    tags: [
      "Python",
      "NumPy",
      "Pandas",
      "Streamlit",
      "Optimization",
    ],

    code:
      "https://github.com/macalinaojhim-cmyk/nwc/blob/main/sequence.py",

    live:
      "https://cvgdy7laubetp4f2mprlbc.streamlit.app/",
  },

  {
    title: "Optimized Inventory Management System",
    category: "web",
    tag: "Full-Stack Web Application",
    featured: true,
    emoji: "📦",
    gradient: ["#3b82f6", "#06b6d4"],

    description:
      "A web-based inventory management application that combines CRUD operations, stock monitoring, and mathematical inventory models. It incorporates Economic Order Quantity (EOQ) and Reorder Point (ROP) calculations to support more informed inventory decisions.",

    tags: [
      "React",
      "JavaScript",
      "PHP",
      "MySQL",
      "EOQ",
      "ROP",
    ],

    code:
      "https://github.com/macalinaojhim-cmyk/inventory",

    live: null,
  },
];


// EXPERIENCE
export const experience = [
  {
    role: "Software Development Intern",
    company: "HeroApps Software Development Services",
    period: "September – October 2026",
    
    desc:
      "Completed 200 hours of On-the-Job Training, gaining practical experience in frontend development, React, JavaScript, PHP fundamentals, responsive web design, UI improvements, Git workflows, and collaborative software development. Contributed to enhancements for an administrative web application.",

    current: false,
  },

  {
    role: "Independent Software Development",
    company: "Personal Projects & Continuous Learning",
    period: "2026 – Present",

    desc:
      "Developing practical applications that connect mathematical concepts with software engineering. Exploring full-stack development, database management, optimization, and analytical problem-solving through hands-on projects.",

    current: true,
  },
];


// TESTIMONIALS
export const testimonials = [];


// CONTACT DETAILS
export const contact = {
  email: "macalinaojhim@gmail.com",
  phone: "+63956 309 0725",
  location: "Mercedes, Camarines Norte, Philippines",
};


// FORM BACKEND
export const formEndpoint = null;
