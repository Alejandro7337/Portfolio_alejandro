import { GithubIcon, LinkedinIcon } from "@/components/icons";
import type { PersonalInfo } from "@/lib/data";

interface FooterProps {
  personalInfo: PersonalInfo;
}

export default function Footer({ personalInfo }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-500/20 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo mark */}
        <a
          href="#"
          className="font-display font-bold text-surface-text select-none shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          AA<span className="text-brand-accent">·</span>
        </a>

        {/* Stack callout — direct signal to progile */}
        <p className="font-mono text-xs text-ink-500/60 text-center leading-relaxed">
          Built by {personalInfo.name} with{" "}
          <span className="text-brand-primary/70">Next.js 14.2</span>
          {" · "}
          <span className="text-brand-primary/70">Tailwind CSS</span>
          {" · "}
          <span className="text-brand-primary/70">Framer Motion</span>
          {" · "}{year}
        </p>

        {/* Social + source links */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={personalInfo.portfolioGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink-500/50 hover:text-brand-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="View portfolio source code on GitHub"
          >
            source
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-500/50 hover:text-surface-text transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="GitHub profile"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-500/50 hover:text-surface-text transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
