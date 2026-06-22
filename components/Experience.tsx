"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";
import type { WorkExperience } from "@/lib/data";

interface TimelineItemProps {
  exp: WorkExperience;
  index: number;
  isLast: boolean;
}

function TimelineItem({ exp, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative pl-8 ${!isLast ? "pb-8" : ""}`}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[3.5px] top-5 bottom-0 w-px bg-ink-500/25" />
      )}

      {/* Timeline dot */}
      {exp.current ? (
        /* Pulsing dot for current role */
        <span className="absolute left-0 top-2 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-60" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-accent" />
        </span>
      ) : (
        <span className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-ink-500/50 border border-ink-500/60" />
      )}

      {/* Card */}
      <div className="bg-ink-800 border border-ink-500/30 rounded-xl p-6 hover:border-ink-500/50 transition-colors">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-xl text-surface-text leading-tight">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="inline-flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-mono text-xs px-2.5 py-0.5 rounded-full shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  Current
                </span>
              )}
            </div>
            <p className="text-brand-primary text-sm">{exp.companyFull}</p>
          </div>
          <div className="text-right space-y-1 shrink-0">
            <div className="flex items-center gap-1.5 text-ink-500 text-xs justify-end">
              <Calendar size={11} />
              {exp.period}
            </div>
            <div className="flex items-center gap-1.5 text-ink-500 text-xs justify-end">
              <MapPin size={11} />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Note (honest side comment for non-main roles) */}
        {exp.note && (
          <p className="text-ink-500/70 text-sm italic mt-3 mb-1 font-body">
            &ldquo;{exp.note}&rdquo;
          </p>
        )}

        {/* Bullets */}
        {exp.bullets.length > 0 && (
          <ul className="space-y-2 mt-4 mb-5">
            {exp.bullets.map((bullet, j) => (
              <li key={j} className="text-ink-500 text-sm flex gap-2">
                <span className="text-brand-accent mt-0.5 shrink-0">—</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack chips */}
        {exp.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tech.map((t) => (
              <span
                key={t}
                className="bg-ink-950/70 text-ink-500 text-xs px-2 py-1 rounded font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-ink-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-2">
            Experience
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            Real work in real environments.
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              exp={exp}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
