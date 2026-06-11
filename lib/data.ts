/* ============================================================================
   PORTFOLIO CONTENT — single source of truth.
   Edit everything here; the whole site updates automatically.
   Items marked  // TODO  are placeholders for you to replace.
============================================================================ */

export const profile = {
  name: "Mossimo",
  // Short role shown under your name in the hero:
  role: "Computer Science & Mathematics Student",
  // Big headline words in the hero (rendered on separate lines):
  headlineWords: ["Builder.", "Founder.", "Problem-solver."],
  // One-paragraph intro (hero subtext):
  tagline:
    "I build software and businesses. CS & Math student at Vanier College, founder of a lawn-care company, tutor, and goalie coach — turning ideas into things people actually use.",
  location: "Montréal, QC",
  email: "bianco.mossimo2@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/your-handle", // TODO: replace with your LinkedIn URL
  resumeUrl: "/resume.pdf", // drop your real PDF at public/resume.pdf
};

export const siteConfig = {
  title: "Mossimo — Portfolio",
  description:
    "Portfolio of a Computer Science & Mathematics student: web and mobile projects, experience, and certifications.",
  // Paste your Formspree form endpoint to activate the contact form.
  // Get one free at https://formspree.io  (e.g. "https://formspree.io/f/abcdwxyz")
  // Leave empty to fall back to a plain mailto: link.
  formspreeEndpoint: "", // TODO (optional)
};

export type Project = {
  slug: string;
  title: string;
  type: "web" | "mobile";
  year: string;
  role: string;
  summary: string; // one line, used on cards
  description: string; // longer write-up, used on detail page
  highlights: string[]; // bullet points on the detail page
  tech: string[];
  links: { label: string; href: string }[];
  // Images live in /public/images. Replace the placeholders with real screenshots.
  primaryImage: string; // main screenshot / mockup
  secondaryImage: string; // secondary screenshot (used in the layered mockup)
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "summit-sites",
    title: "Summit Sites",
    type: "web",
    year: "2026",
    role: "Founder, Designer & Developer",
    summary:
      "A web design agency site — animated, conversion-focused, built to win serious businesses.",
    description:
      "Summit Sites is a web design agency I built end to end: brand, copy, design, and code. The site sells a simple promise — high-performing, lead-generating websites on one setup fee and one monthly rate. It pairs a cinematic animated hero with a clear process breakdown and a portfolio of client work, all engineered to position the agency as the obvious choice.",
    highlights: [
      "Designed and developed the entire marketing site, from brand to deployment",
      "Cinematic scroll-driven animations built with Framer Motion",
      "Multi-page architecture (demos, services, pricing, process, FAQ, contact) with React Router",
      "Conversion-focused layout and copy that turns visitors into leads",
    ],
    tech: ["React", "Vite", "Framer Motion", "React Router"],
    links: [
      { label: "Live Site", href: "https://summit-sites.vercel.app/" },
    ],
    primaryImage: "/images/summit-1.png",
    secondaryImage: "/images/summit-2.png",
  },
  {
    slug: "cuts-and-edges",
    title: "Cuts and Edges",
    type: "web",
    year: "2026",
    role: "Founder & Designer",
    summary:
      "The marketing site for my lawn-care business — services, quotes, and local trust.",
    description:
      "Cuts and Edges is the lawn-maintenance business I founded and run. I designed and built its marketing site to turn local traffic into booked jobs: a clean hero, a clear breakdown of services (mowing, landscaping, seasonal care, weed removal), social proof, service areas, and a fast quote-request flow — all wrapped in a professional, conversion-focused layout.",
    highlights: [
      "Designed the full site for my own lawn-care business, end to end",
      "Service breakdown, testimonials, and locations that build local trust",
      "Per-cut pricing and a frictionless \"Get a Quote\" flow",
      "Responsive, professional layout with light/dark modes",
    ],
    tech: ["Base44", "React", "Tailwind CSS", "Responsive Design"],
    links: [
      { label: "Live Site", href: "https://cutsandedges.base44.app/" },
    ],
    primaryImage: "/images/cutsandedges-1.png",
    secondaryImage: "/images/cutsandedges-2.png",
  },
  {
    slug: "lifeos",
    title: "LifeOS",
    type: "mobile",
    year: "2026",
    role: "Designer & Developer",
    summary:
      "A mobile-first personal operating system for habits, sleep, finances, and goals.",
    description:
      "LifeOS is a personal operating system for self-improvement — a single mobile-first dashboard that tracks habits, goals, sleep, gym, finances, and personal brand. A daily \"day ring\" visualizes your progress, an AI \"Overseer\" keeps you accountable, and everything from net-worth tracking to progressive-overload gym coaching lives in one clean, thumb-friendly interface.",
    highlights: [
      "Unified dashboard for habits, goals, sleep, gym, finances, and brand",
      "AI accountability agent (\"Overseer\") for daily coaching",
      "Health tracking with WHOOP-style recovery and sleep visualizations",
      "Mobile-first design with bottom navigation and 44px tap targets",
    ],
    tech: ["React", "Vite", "Framer Motion", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Live App", href: "https://lifeos-daily.vercel.app/" },
    ],
    primaryImage: "/images/lifeos-1.png",
    secondaryImage: "/images/lifeos-2.png",
  },
  {
    slug: "client-tracker",
    title: "REST — Client Tracker",
    type: "mobile",
    year: "2026",
    role: "Developer",
    summary:
      "A client-management app with secure auth, data visualizations, and validated workflows.",
    description:
      "REST is a client-management app for tracking clients, activity, and revenue in one place. It features secure account-based authentication, charts and analytics for at-a-glance insight, and clean form-driven workflows with full validation. Built on a modern, type-safe React stack with a Supabase backend.",
    highlights: [
      "Secure authentication and account management via Supabase",
      "Analytics dashboards and charts powered by Recharts",
      "Type-safe forms with React Hook Form + Zod validation",
      "Predictable global state with Zustand and client-side routing",
    ],
    tech: ["React", "TypeScript", "Supabase", "Recharts", "Zustand", "Tailwind CSS"],
    links: [
      { label: "Live App", href: "https://rest-clientstracker.vercel.app/" },
    ],
    primaryImage: "/images/clienttracker-1.png",
    secondaryImage: "/images/clienttracker-2.png",
  },
];

export type Experience = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: "Founder & Owner",
    org: "Cuts and Edges",
    period: "2021 — Present",
    bullets: [
      "Built and scaled a lawn-maintenance business; retained long-term clients through quality service and communication.",
      "Managed pricing, scheduling, client acquisition, and finances independently.",
      "Designed and distributed promotional materials to grow brand visibility.",
      "Implemented strategic planning and self-marketing to drive revenue growth.",
    ],
  },
  {
    title: "IT Support Intern",
    org: "CloudGenie",
    period: "Jan 2026 — May 2026",
    bullets: [
      "Troubleshot network, Microsoft 365, and workstation issues while supporting the technical team with client requests.",
      "Monitored system and server status and documented issues for timely resolution.",
      "Assisted with backup verification and business-continuity procedures.",
      "Gained hands-on experience in managed IT services, cloud technologies, and cybersecurity best practices.",
    ],
  },
  {
    title: "Accounting Assistant",
    org: "Sudhir Kumar",
    period: "2024 — Present",
    bullets: [
      "Organized invoices, receipts, and supporting documentation to maintain accurate financial records.",
      "Recorded transactions and maintained expense-tracking spreadsheets for reconciliations and monthly reporting.",
      "Prepared and organized client files in accordance with professional standards.",
      "Supported day-to-day accounting operations under a registered accountant.",
    ],
  },
  {
    title: "Senior Customer Service Associate",
    org: "Intermarché Lagoria",
    period: "2025 — Present",
    bullets: [
      "Delivered fast, organized service in a busy retail environment.",
      "Supported store operations by helping cashiers and maintaining bagging stations.",
      "Assisted customers with questions and ensured smooth checkout flow.",
      "Collaborated with team members to maintain efficiency during high-traffic hours.",
    ],
  },
  {
    title: "Private Tutor — Math, Science, French & English",
    org: "Independent",
    period: "2024 — 2026",
    bullets: [
      "Provided one-on-one tutoring to strengthen students' academic understanding.",
      "Explained complex concepts clearly and adapted to different learning styles.",
      "Supported homework, exam preparation, and study strategies.",
    ],
  },
  {
    title: "Goalie Coach",
    org: "Vincent Massey Collegiate & Montréal Féminin",
    period: "2024 — 2025",
    bullets: [
      "Developed individualized training plans for reaction time, positioning, and agility.",
      "Led practices, warm-ups, and game-simulation drills.",
      "Tracked performance and built customized skill-development plans.",
      "Promoted mental resilience and focus under pressure.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Programming & Web",
    items: [
      "HTML / CSS",
      "React",
      "Tailwind CSS",
      "Java",
      "Python (beginner)",
      "SQL (beginner)",
    ],
  },
  {
    label: "AI & Prompt Engineering",
    items: ["Prompt Engineering", "AI-Assisted Development", "Claude Code"],
  },
  {
    label: "3D & Design",
    items: ["Blender", "Unreal Engine"],
  },
  {
    label: "Tools",
    items: ["GitHub", "MS Office", "Google Suite", "Dropbox", "macOS"],
  },
  {
    label: "Professional",
    items: ["Project & Time Management", "Collaboration", "Customer Service"],
  },
  {
    label: "Languages",
    items: ["English", "French", "Hindi"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { name: "AI Fluency: Foundations — the 4D Framework", issuer: "Claude" },
  { name: "Claude 101: The Complete Beginner's Guide", issuer: "Claude" },
  { name: "Claude Code in Action: AI-Powered Development", issuer: "Claude" },
  { name: "SEO Certification", issuer: "HubSpot" },
  { name: "SEO II Certification", issuer: "HubSpot" },
  { name: "Digital Marketing Certification", issuer: "HubSpot" },
  { name: "Frictionless Sales Certification", issuer: "HubSpot" },
];

export type Education = {
  school: string;
  program: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Vanier College",
    program: "Computer Science & Mathematics (DEC)",
    period: "Expected 2027",
  },
  {
    school: "Vincent Massey Collegiate",
    program: "High School Diploma",
    period: "2020 — 2025",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
