"use client";

import { motion } from "framer-motion";
import type { SkillGroupItem } from "@/lib/data";

interface SkillsProps {
  skillGroups: SkillGroupItem[];
}

interface GroupProps {
  group: SkillGroupItem;
}

function HighPriorityGroup({ group }: GroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-ink-800 border border-brand-primary/35 rounded-xl p-6 mb-5 shadow-[0_0_40px_-12px_rgba(62,142,237,0.2)]"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {/* Pulsing dot — indicates "active right now" */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
            </span>
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase">
              Active · In use building this site
            </span>
          </div>
          <h3 className="font-display font-semibold text-surface-text">{group.label}</h3>
          <p className="text-ink-500 text-xs mt-0.5">{group.sublabel}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="bg-brand-primary/10 border border-brand-primary/35 text-brand-primary text-sm px-3 py-1.5 rounded-lg font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function MediumPriorityGroup({ group }: GroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-ink-800 border border-ink-500/25 rounded-xl p-5 h-full"
    >
      <div className="mb-4">
        <h3 className="font-display font-semibold text-surface-text text-sm">{group.label}</h3>
        <p className="text-ink-500 text-xs mt-0.5">{group.sublabel}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="bg-ink-950/60 border border-ink-500/40 text-surface-text text-sm px-3 py-1.5 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function LowPriorityGroup({ group }: GroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.16 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-ink-800/50 border border-ink-500/15 rounded-xl p-5 h-full"
    >
      <div className="mb-4">
        <h3 className="font-display font-semibold text-ink-500 text-sm">{group.label}</h3>
        <p className="text-ink-500/60 text-xs mt-0.5">{group.sublabel}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="bg-ink-950/40 border border-ink-500/20 text-ink-500 text-sm px-3 py-1.5 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills({ skillGroups }: SkillsProps) {
  const high = skillGroups.find((g) => g.priority === "high");
  const medium = skillGroups.find((g) => g.priority === "medium");
  const low = skillGroups.find((g) => g.priority === "low");

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-2">
            Tech stack
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            What I bring. What I&apos;m building.
          </h2>
        </motion.div>

        {high && <HighPriorityGroup group={high} />}

        <div className="grid md:grid-cols-2 gap-4">
          {medium && <MediumPriorityGroup group={medium} />}
          {low && <LowPriorityGroup group={low} />}
        </div>
      </div>
    </section>
  );
}
