"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, AlertCircle } from "lucide-react";
import { projects, personalInfo } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            What I&apos;ve built.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-ink-800 border border-ink-500/30 rounded-xl overflow-hidden hover:border-brand-primary/40 transition-colors"
            >
              {/* Visual header — stack name as design element */}
              <div className="bg-ink-950/70 px-6 py-5 border-b border-ink-500/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <GitBranch className="text-brand-primary shrink-0" size={18} />
                  <span className="font-mono text-xs text-ink-500 truncate">
                    github.com/Alejandro7337
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-primary hover:text-brand-primary/80 transition-colors text-xs font-medium shrink-0"
                >
                  View code <ExternalLink size={11} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-bold text-xl text-surface-text leading-tight">
                    {project.name}
                  </h3>
                </div>

                <p className="text-brand-accent text-sm mb-3">{project.description}</p>
                <p className="text-ink-500 text-sm leading-relaxed mb-5">
                  {project.longDescription}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-ink-950/70 text-ink-500 text-xs px-2.5 py-1 rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-start gap-2 pt-4 border-t border-ink-500/20">
                  <AlertCircle size={13} className="text-ink-500/60 mt-0.5 shrink-0" />
                  <p className="text-ink-500/60 text-xs font-mono">{project.statusNote}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Meta note — this page as a project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-ink-800/40 border border-brand-primary/15 rounded-xl p-6 flex flex-col justify-between gap-6"
          >
            <div>
              <span className="font-mono text-xs text-brand-primary tracking-widest uppercase">
                In progress · right now
              </span>
              <h3 className="font-display font-bold text-xl text-surface-text mt-2 mb-3 leading-tight">
                This portfolio
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                More projects in progress — including the site you&apos;re currently reading.
                Built with Next.js 14.2, TypeScript, Tailwind, and Framer Motion.
                The stack progile uses. The proof is in your browser.
              </p>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors text-sm font-medium"
            >
              See all repositories <ExternalLink size={13} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
