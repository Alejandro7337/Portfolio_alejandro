import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-brand-primary font-mono text-xs mb-2 tracking-widest uppercase">
            Contacto
          </p>
          <h2 className="font-display text-5xl font-bold text-surface-text mb-4">
            Hablemos.
          </h2>
          <p className="text-ink-500 text-lg mb-8 leading-relaxed">
            Si crees que encajo en progile, escríbeme. Si quieres ver el código
            de esta página, está en GitHub.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 text-surface-text font-display font-semibold text-xl hover:text-brand-primary transition-colors mb-10 group"
          >
            {personalInfo.email}
            <Mail
              className="text-brand-accent group-hover:text-brand-primary transition-colors"
              size={22}
            />
          </a>

          <div className="flex flex-wrap gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-500/40 text-ink-500 hover:border-brand-primary hover:text-brand-primary px-5 py-3 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-500/40 text-ink-500 hover:border-brand-primary hover:text-brand-primary px-5 py-3 rounded-lg transition-colors inline-flex items-center gap-2 text-sm"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
