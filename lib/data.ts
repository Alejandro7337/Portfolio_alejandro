// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  role: string;
  roleEn: string;
  university: string;
  location: string;
  semester: string;
  years: string;
  email: string;
  linkedin: string;
  github: string;
  english: string;
  availability: string;
}

export interface TestCase {
  method: string;
  detail: string;
}

export interface BeforeAfterItem {
  label: string;
  before: string;
  after: string;
}

export interface HeroContent {
  tagline: string;
  statementPre: string;
  statementMain: string;
  statementAccent: string;
  pitch: string;
}

export interface WhyMeCard {
  title: string;
  body: string;
  stat: string;
  statLabel: string;
  requirement: string;
  featured?: boolean;
  beforeAfter?: BeforeAfterItem[];
}

export interface Credential {
  type: "scholarship" | "badge";
  title: string;
  issuer: string;
  description: string;
  year?: string;
}

export interface SkillGroupItem {
  id: string;
  label: string;
  sublabel: string;
  skills: string[];
  priority: "high" | "medium" | "low";
}

export interface WorkExperience {
  company: string;
  companyFull: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
  current?: boolean;
  note?: string;
}

export interface Project {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  highlight: string;
  status: string;
  statusNote?: string;
}

// ─── Datos ────────────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Alejandro Alba Malagón",
  role: "Estudiante de Ingeniería de Sistemas & Desarrollador",
  roleEn: "Systems Engineering Student & Developer",
  university: "Universidad Central",
  location: "Bogotá, Colombia",
  semester: "Octavo semestre",
  years: "2023–2027",
  email: "alejandroalba2605@gmail.com",
  linkedin: "https://www.linkedin.com/in/alejandroalba-3ba12a314",
  github: "https://github.com/Alejandro7337",
  english: "B2",
  availability: "40–50 %",
};

export const heroContent: HeroContent = {
  tagline: "For progile · Front-End Developer",
  statementPre: "Most developers apply.",
  statementMain: "I built this with your stack",
  statementAccent: "to show you.",
  pitch:
    "Building for a B2B testing-automation company requires precision and velocity. Both are measurable here.",
};

export const testCases: TestCase[] = [
  {
    method: "academicExcellence()",
    detail: "becas: ICFES + Universidad Central",
  },
  {
    method: "cloudExperience()",
    detail: "GCP + Azure · arquitectura real",
  },
  {
    method: "learningVelocity()",
    detail: "aprendiendo Next.js mientras aplica",
  },
  {
    method: "communication()",
    detail: "English B2 · Danish-ready",
  },
  {
    method: "availability()",
    detail: "40–50 % del tiempo · semestral",
  },
];

export const whyMeCards: WhyMeCard[] = [
  {
    featured: true,
    requirement: "Tech stack & learning velocity",
    title: "Learning velocity: proven, not claimed.",
    body: "This page runs on Next.js 14 — the exact stack progile ships. I didn't know it four days ago. I know it now, and you're reading the proof. When progile needs someone to pick up a new tool fast, this already happened.",
    stat: "4 days",
    statLabel: "from zero to this production site",
    beforeAfter: [
      { label: "next.js", before: "unknown", after: "production ✓" },
      { label: "react 18", before: "basic", after: "deployed ✓" },
      { label: "typescript", before: "limited", after: "typed ✓" },
      { label: "framer-motion", before: "0 exp", after: "live ✓" },
    ],
  },
  {
    requirement: "Currently studying at a leading university in Colombia",
    title: "Top performer at Universidad Central — twice over.",
    body: "8th-semester Systems Engineering. Awarded two concurrent scholarships: one for top national ICFES scores, one for academic merit at the university. Not just meeting the requirement — meeting it with a proven performance record.",
    stat: "2×",
    statLabel: "simultaneous scholarships",
  },
  {
    requirement: "Strong eye for design",
    title: "Evidence, not claims.",
    body: "I designed this system from scratch — Blueprint Pass: custom color tokens, typographic hierarchy, motion choreography. No template used. The visual bar here is high. That's by design.",
    stat: "0",
    statLabel: "templates used",
  },
  {
    requirement: "Works independently · solution-oriented",
    title: "Real production responsibility — not tutorials.",
    body: "Developer at PGD since April 2026: GCP + Azure microservice architectures in actual enterprise deployments. Architectural decision-making, not just implementation. When the tech lead is out, the work ships.",
    stat: "GCP+Azure",
    statLabel: "production since April 2026",
  },
  {
    requirement: "Fluent in English",
    title: "B2 certified — you've been reading the demo.",
    body: "Certified English B2. This entire section is in English. Comfortable with async technical documentation, product discussions, and conversations with Danish founders.",
    stat: "B2",
    statLabel: "certified English",
  },
  {
    requirement: "40–50% part-time workload",
    title: "The schedule was designed for exactly this.",
    body: "8th-semester student on a part-time track. The 40–50% progile specifies isn't a constraint — it's the exact structure I'm already in. Zero scheduling friction on day one.",
    stat: "40–50%",
    statLabel: "available, starting now",
  },
];

export const credentials: Credential[] = [
  {
    type: "badge",
    title: "Build a Data Mesh with Dataplex",
    issuer: "Google Cloud Skills Boost",
    description:
      "Skill Badge for completing the data mesh implementation path with Dataplex on GCP.",
  },
  {
    type: "badge",
    title: "Build a Data Warehouse with BigQuery",
    issuer: "Google Cloud Skills Boost",
    description:
      "Skill Badge for completing the enterprise data warehouse construction path with BigQuery.",
  },
  {
    type: "scholarship",
    title: "Media beca por mérito académico",
    issuer: "Universidad Central",
    description:
      "Top academic performance at Universidad Central — awarded a 50% scholarship based on merit, not financial need.",
    year: "2023",
  },
  {
    type: "scholarship",
    title: "Beca por resultados en ICFES",
    issuer: "Universidad Central",
    description:
      "Scored in the top percentile of Colombia's national university entrance exam (ICFES), earning a scholarship before even starting my degree.",
    year: "2023",
  },
];

export const skillGroups: SkillGroupItem[] = [
  {
    id: "for-role",
    label: "What I'm learning for this role",
    sublabel: "Built this page to demonstrate it — live proof",
    skills: ["Next.js 14.2", "React 18", "TypeScript", "TinaCMS", "Vercel", "Tailwind CSS"],
    priority: "high",
  },
  {
    id: "at-work",
    label: "Current stack at work",
    sublabel: "In production at PGD since April 2026",
    skills: [
      "Google Cloud Platform",
      "BigQuery",
      "Dataflow",
      "Dataplex",
      "Compute Engine",
      "Microsoft Azure",
      "Microservices",
      "Git",
    ],
    priority: "medium",
  },
  {
    id: "foundations",
    label: "Foundations",
    sublabel: "Where technical depth comes from",
    skills: [
      "Python",
      "Java · Spring Boot",
      "SQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "REST APIs",
      "Jupyter Notebooks",
      "Agile",
    ],
    priority: "low",
  },
];

export const experience: WorkExperience[] = [
  {
    company: "PGD",
    companyFull: "PGD Procesos de Gestión Documental SAS",
    role: "Desarrollador Junior",
    period: "Abril 2026 — presente",
    location: "Bogotá, Colombia",
    current: true,
    bullets: [
      "Diseño e implementación de soluciones de automatización documental.",
      "Arquitecturas en Google Cloud Platform como nube base del sistema.",
      "Integración en entornos multinube con Microsoft Azure.",
      "Ciclo completo de desarrollo: código limpio, microservicios, despliegue, escalabilidad y seguridad corporativa.",
    ],
    tech: ["GCP", "Azure", "Microservices", "Cloud Architecture"],
  },
  {
    company: "Papa John's",
    companyFull: "Papa John's Pizza",
    role: "Auxiliar de cocina y atención al cliente",
    period: "Dic 2024 — Feb 2025",
    location: "Bogotá, Colombia",
    current: false,
    note: "Worked in a fast-paced environment. Learned what 'uptime' really means.",
    bullets: [],
    tech: [],
  },
];

export const projects: Project[] = [
  {
    name: "Banco Ágil Col",
    description: "Plataforma digital de créditos para PYMEs",
    longDescription:
      "Sistema de solicitud y gestión de créditos PYMES con frontend web, backend en Java Spring Boot y despliegue en Google Cloud. Proyecto académico que integra arquitectura real de producción con tecnologías empresariales.",
    tech: ["HTML5", "CSS3", "JavaScript", "Java · Spring Boot", "Google Cloud"],
    github: "https://github.com/Alejandro7337",
    highlight: "Arquitectura de producción real en GCP",
    status: "Code on GitHub",
    statusNote: "Cloud deployment decommissioned · code on GitHub",
  },
];
