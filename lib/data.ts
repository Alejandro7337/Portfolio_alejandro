// ─── Interfaces ───────────────────────────────────────────────────────────────
// Datos ahora vienen de content/home.json vía TinaCMS

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
  portfolioGithub: string;
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
