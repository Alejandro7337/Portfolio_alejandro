"use client";

import type { HomepageQuery, HomepageQueryVariables } from "@/tina/__generated__/types";
import type {
  PersonalInfo,
  TestCase,
  HeroContent,
  WhyMeCard,
  BeforeAfterItem,
  Credential,
  SkillGroupItem,
  WorkExperience,
  Project,
} from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMe from "@/components/WhyMe";
import Credentials from "@/components/Credentials";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface HomeClientProps {
  data: HomepageQuery;
  variables: HomepageQueryVariables;
  query: string;
}

// Helpers para colapsar Maybe<T> → T con fallback
const str = (v: string | null | undefined, fallback = ""): string => v ?? fallback;
const bool = (v: boolean | null | undefined): boolean => v ?? false;
const arr = <T,>(v: (T | null)[] | null | undefined): T[] =>
  (v ?? []).filter((x): x is T => x !== null);

export function HomeClient({ data }: HomeClientProps) {
  const c = data.homepage;

  // ── Personal Info ──────────────────────────────────────────
  const personalInfo: PersonalInfo = {
    name: str(c.personalInfo?.name),
    role: str(c.personalInfo?.role),
    roleEn: str(c.personalInfo?.roleEn),
    university: str(c.personalInfo?.university),
    location: str(c.personalInfo?.location),
    semester: str(c.personalInfo?.semester),
    years: str(c.personalInfo?.years),
    email: str(c.personalInfo?.email),
    linkedin: str(c.personalInfo?.linkedin),
    github: str(c.personalInfo?.github),
    portfolioGithub: str(c.personalInfo?.portfolioGithub),
    english: str(c.personalInfo?.english),
    availability: str(c.personalInfo?.availability),
  };

  // ── Hero Content ───────────────────────────────────────────
  const heroContent: HeroContent = {
    tagline: str(c.heroContent?.tagline),
    statementPre: str(c.heroContent?.statementPre),
    statementMain: str(c.heroContent?.statementMain),
    statementAccent: str(c.heroContent?.statementAccent),
    pitch: str(c.heroContent?.pitch),
  };

  // ── Test Cases ─────────────────────────────────────────────
  const testCases: TestCase[] = arr(c.testCases).map((tc) => ({
    method: str(tc.method),
    detail: str(tc.detail),
  }));

  // ── Why Me Cards ───────────────────────────────────────────
  const whyMeCards: WhyMeCard[] = arr(c.whyMeCards).map((card) => ({
    featured: bool(card.featured),
    requirement: str(card.requirement),
    title: str(card.title),
    body: str(card.body),
    stat: str(card.stat),
    statLabel: str(card.statLabel),
    beforeAfter: arr(card.beforeAfter).map(
      (item): BeforeAfterItem => ({
        label: str(item.label),
        before: str(item.before),
        after: str(item.after),
      })
    ),
  }));

  // ── Credentials ────────────────────────────────────────────
  const credentials: Credential[] = arr(c.credentials).map((cred) => ({
    type: (str(cred.type) as "scholarship" | "badge") || "badge",
    title: str(cred.title),
    issuer: str(cred.issuer),
    description: str(cred.description),
    year: str(cred.year) || undefined,
  }));

  // ── Skill Groups ───────────────────────────────────────────
  const skillGroups: SkillGroupItem[] = arr(c.skillGroups).map((g) => ({
    id: str(g.id),
    label: str(g.label),
    sublabel: str(g.sublabel),
    skills: arr(g.skills) as string[],
    priority: (str(g.priority) as "high" | "medium" | "low") || "low",
  }));

  // ── Experience ─────────────────────────────────────────────
  const experience: WorkExperience[] = arr(c.experience).map((exp) => ({
    company: str(exp.company),
    companyFull: str(exp.companyFull),
    role: str(exp.role),
    period: str(exp.period),
    location: str(exp.location),
    current: bool(exp.current),
    note: str(exp.note) || undefined,
    bullets: arr(exp.bullets) as string[],
    tech: arr(exp.tech) as string[],
  }));

  // ── Projects ───────────────────────────────────────────────
  const projects: Project[] = arr(c.projects).map((p) => ({
    name: str(p.name),
    description: str(p.description),
    longDescription: str(p.longDescription),
    tech: arr(p.tech) as string[],
    github: str(p.github),
    highlight: str(p.highlight),
    status: str(p.status),
    statusNote: str(p.statusNote) || undefined,
  }));

  return (
    <>
      <Navbar />
      <main>
        <Hero
          personalInfo={personalInfo}
          testCases={testCases}
          heroContent={heroContent}
        />
        <WhyMe whyMeCards={whyMeCards} />
        <Credentials credentials={credentials} />
        <Skills skillGroups={skillGroups} />
        <Experience experience={experience} />
        <Projects projects={projects} personalInfo={personalInfo} />
        <Contact personalInfo={personalInfo} testCases={testCases} />
      </main>
      <Footer personalInfo={personalInfo} />
    </>
  );
}
