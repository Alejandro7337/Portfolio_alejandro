// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  role: string;
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

export interface WhyMeCard {
  title: string;
  body: string;
  stat: string;
  statLabel: string;
}

export interface Credential {
  type: "scholarship" | "badge";
  title: string;
  issuer: string;
  description: string;
  year?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface SkillGroup {
  mastered: Skill[];
  learning: Skill[];
}

export interface WorkExperience {
  company: string;
  companyFull: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  highlight: string;
}

// ─── Datos ────────────────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Alejandro Alba Malagón",
  role: "Estudiante de Ingeniería de Sistemas & Desarrollador",
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
    title: "Contexto técnico más allá del frontend",
    body: "La mayoría de candidatos frontend solo conocen el navegador. Yo vengo de arquitecturas multinube reales (GCP + Azure) con microservicios y automatización. Cuando un tech lead habla de infra, entiendo el contexto sin que lo expliquen.",
    stat: "GCP + Azure",
    statLabel: "en producción real",
  },
  {
    title: "Velocidad de aprendizaje demostrable",
    body: "Esta página está hecha con Next.js 14 y TypeScript, el stack exacto de progile. Lo aprendí para construirla. No es un claim — es la evidencia. Cuando progile necesite que aprenda algo nuevo, esto ya pasó antes.",
    stat: "Next.js 14",
    statLabel: "aprendido para esta postulación",
  },
  {
    title: "Fit para el equipo",
    body: "Universidad Central Bogotá es exactamente lo que progile busca. Inglés B2 para comunicarse con los founders daneses. Disponibilidad del 40–50 % que encaja con la carga de un estudiante activo en octavo semestre.",
    stat: "B2",
    statLabel: "Inglés · listo para Dinamarca",
  },
];

export const credentials: Credential[] = [
  {
    type: "scholarship",
    title: "Media beca por mérito académico",
    issuer: "Universidad Central",
    description:
      "Otorgada por rendimiento sobresaliente durante el programa de Ingeniería de Sistemas.",
    year: "2023",
  },
  {
    type: "scholarship",
    title: "Beca por resultados en ICFES",
    issuer: "Universidad Central",
    description:
      "Reconocimiento por resultados destacados en el examen nacional de admisión universitaria colombiano.",
    year: "2023",
  },
  {
    type: "badge",
    title: "Build a Data Mesh with Dataplex",
    issuer: "Google Cloud Skills Boost",
    description:
      "Skill Badge por completar el path de implementación de arquitecturas de datos con Dataplex en GCP.",
  },
  {
    type: "badge",
    title: "Build a Data Warehouse with BigQuery",
    issuer: "Google Cloud Skills Boost",
    description:
      "Skill Badge por completar el path de construcción de data warehouses empresariales con BigQuery.",
  },
];

export const skills: SkillGroup = {
  mastered: [
    { name: "Python", category: "language" },
    { name: "Java", category: "language" },
    { name: "SQL", category: "language" },
    { name: "HTML5 / CSS3", category: "web" },
    { name: "JavaScript", category: "web" },
    { name: "Google Cloud Platform", category: "cloud" },
    { name: "Microsoft Azure", category: "cloud" },
    { name: "BigQuery", category: "data" },
    { name: "Dataflow", category: "data" },
    { name: "Dataplex", category: "data" },
    { name: "Git", category: "tool" },
    { name: "Jupyter Notebooks", category: "tool" },
    { name: "Metodologías ágiles", category: "practice" },
  ],
  learning: [
    { name: "Next.js 14", category: "web" },
    { name: "React 18", category: "web" },
    { name: "TypeScript", category: "language" },
    { name: "TinaCMS", category: "cms" },
    { name: "Framer Motion", category: "web" },
  ],
};

export const experience: WorkExperience[] = [
  {
    company: "PGD",
    companyFull: "PGD Procesos de Gestión Documental SAS",
    role: "Desarrollador Junior",
    period: "Abril 2026 — Mayo 2026",
    location: "Colombia",
    bullets: [
      "Implementación de arquitecturas en Google Cloud Platform y Microsoft Azure.",
      "Desarrollo y despliegue de microservicios en entornos empresariales.",
      "Automatización de procesos de gestión documental.",
    ],
    tech: ["GCP", "Azure", "Microservicios"],
  },
];

export const projects: Project[] = [
  {
    name: "Banco Ágil Col",
    description: "Plataforma digital de créditos para PYMEs",
    longDescription:
      "Sistema de solicitud y gestión de créditos PYMES con frontend web, backend en Java Spring Boot y despliegue en Google Cloud. Proyecto académico que integra arquitectura real de producción con tecnologías empresariales.",
    tech: ["HTML / CSS / JavaScript", "Java Spring Boot", "Google Cloud"],
    github: "https://github.com/Alejandro7337",
    highlight: "Arquitectura de producción real en GCP",
  },
];
