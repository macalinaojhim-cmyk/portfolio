/* ═══════════════════════════════════════════════════════════════
   ✏️  YOUR PORTFOLIO DATA — edit this one file to update the site.
   Everything on the page is driven by what you put here.
   ═══════════════════════════════════════════════════════════════ */

export const profile = {
  name: "Jimboy Macalinao",
  initials: "JM",
  logo: "jim", // logo shows as "jimboy.dev" — change if you want

  // ✏️ YOUR PHOTO — put your image file at src/assets/profile.jpg
  //    and set photo: true to show it (false/null = show "JM" initials).
  photo: true,

  // Typing effect in the hero ("I am ..." + these)
  roles: [
    " an aspiring full-stack developer",
    " a problem solver",
    " a self-learner",
    " a fast-learner",
    " open to work",
  ],

  tagline: "Aspiring Full-Stack Developer",
  location: "Mercedes, Camarines Norte",
  availability: "Open to Work",

  heroDesc:
    "Aspiring full-stack developer. I love taking real problems and turning them into working software — one self-taught project at a time.",

  // Bio paragraphs (About section)
  about: [
    "I'm a 4th year BS in Applied Mathemathics aspiring full-stack developer. I'm early in my journey, but I'm hooked: I love finding real problems and building tools that solve them.",
    "My strength is problem solving. I learn fast, research deeply, and I'm not afraid to break things until they work. My first project — a print-laminate schedule optimizer — was born exactly that way.",
  ],

  facts: [
    { icon: "🧠", label: "Problem solver first" },
    { icon: "📚", label: "Self-learning daily" },
    { icon: "💪", label: "Persistent with bugs" },
    { icon: "🤝", label: "Open to feedback" },
  ],

  // Animated counter stats
  stats: [
    { value: 1, suffix: "", label: "Project Built" },
    { value: 200, suffix: "+", label: "OJT Hours" },
    { value: 4, suffix: "", label: "Languages" },
    { value: 100, suffix: "%", label: "Self-Taught" },
  ],

  badges: ["📍 Mercedes, Camarines Norte", "🎓 OJT at HeroApps", "🌍 Open to Work"],

  // Socials — put your real profile URLs in href
  socials: [
    { name: "github", href: "#", label: "GitHub" },
    { name: "linkedin", href: "#", label: "LinkedIn" },
    { name: "facebook", href: "https://web.facebook.com/jimboy.macalinao", label: "Facebook" },
  ],
};

// Tech marquee strip under the hero
export const marquee = [
  "JavaScript",
  "Python",
  "React",
  "Java",
  "NumPy",
  "Streamlit",
  "HTML/CSS",
  "Problem Solving",
];

// Skill progress bars
export const skills = [
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 90 },
  { name: "Java", level: 60 },
  { name: "React", level: 50 },
];

export const tools = [
  "Python",
  "JavaScript",
  "Java",
  "React",
  "Vite",
  "NumPy",
  "Pandas",
  "Streamlit",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "VS Code",
];

export const toolsNote =
  "Currently sharpening React and JavaScript — next up: Node.js, SQL and more backend fundamentals.";

// Projects — category: "web" | "mobile" | "uiux"
export const projects = [
  {
    title: "Print-Laminate Schedule Optimizer",
    category: "web",
    tag: "Web App",
    featured: true,
    emoji: "🖨️",
    gradient: ["#f59e0b", "#ef4444"],
    description:
      "My first real project: a schedule optimizer for print-laminate jobs. It helps arrange work orders to reduce conflicts and idle time at the shop — built end-to-end with Python, NumPy and Streamlit.",
    tags: ["Python", "NumPy", "Streamlit"],
    code: "#", // ✏️ your GitHub repo link
    live: "#", // ✏️ your deployed app link
  },
];

// Experience timeline — add more objects as you grow
export const experience = [
  {
    role: "OJT — Software Development Intern",
    company: "HeroApps Software Development",
    period: "200 Hours",
    desc: "Completed 200 hours of on-the-job training in software development, working with a real dev team and getting hands-on exposure to how production software is built.",
    current: false,
  },
  {
    role: "Self-Learning & Building",
    company: "Open to work",
    period: "Now",
    desc: "Leveling up daily — sharpening React and JavaScript, exploring backend development, and looking for my first full-time role or OJT opportunity.",
    current: true,
  },
];

// Testimonials — leave empty [] to hide the section
export const testimonials = [];

// Contact details — leave phone/email empty ("") to hide that item
export const contact = {
  email: "macalinaojhim@gmail.com.com", // ✏️ replace with your email
  phone: "+63956 309 0725", // ✏️ e.g. "+63 912 345 6789" — or keep "" to hide
  location: "Mercedes, Camarines Norte, Philippines",
};

// Form backend: see README for Formspree / EmailJS setup
export const formEndpoint = null; // e.g. "https://formspree.io/f/yourFormId"
