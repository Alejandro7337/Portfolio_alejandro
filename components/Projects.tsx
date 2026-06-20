import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-brand-primary font-mono text-xs mb-2 tracking-widest uppercase">
            Proyectos
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            Lo que he construido.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-ink-800 border border-ink-500/30 rounded-xl p-6 hover:border-brand-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-5">
                <Code2 className="text-brand-primary" size={22} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-500 hover:text-brand-primary transition-colors flex items-center gap-1.5 text-xs"
                >
                  GitHub <ExternalLink size={12} />
                </a>
              </div>
              <h3 className="font-display font-bold text-xl text-surface-text mb-1">
                {project.name}
              </h3>
              <p className="text-brand-accent text-sm mb-3">{project.description}</p>
              <p className="text-ink-500 text-sm leading-relaxed mb-5">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-ink-950/70 text-ink-500 text-xs px-2 py-1 rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.highlight && (
                <p className="text-xs text-brand-primary border-t border-ink-500/20 pt-4">
                  ✦ {project.highlight}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
