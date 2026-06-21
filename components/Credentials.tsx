"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import { credentials } from "@/lib/data";
import type { Credential } from "@/lib/data";

interface BadgeCardProps {
  badge: Credential;
  index: number;
}

interface ScholarshipCardProps {
  credential: Credential;
  index: number;
}

function CloudBadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="24,3 43,14.5 43,33.5 24,45 5,33.5 5,14.5"
        fill="rgba(62,142,237,0.12)"
        stroke="rgba(62,142,237,0.55)"
        strokeWidth="1.5"
      />
      <path
        d="M17 32c-3.3 0-6-2.7-6-6 0-3 2.1-5.5 5-5.9.3-3.9 3.6-7 7.6-7 3.1 0 5.8 1.8 7.1 4.5 2.6.4 4.3 2.6 4.3 5.1-.1 2.8-2.4 5-5.2 5.2H17z"
        stroke="#3E8EED"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeCard({ badge, index }: BadgeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 22 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 14,
        delay: index * 0.14,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-ink-800 border border-brand-primary/30 rounded-xl p-5 overflow-hidden relative"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <CloudBadgeIcon className="w-10 h-10 shrink-0" />
          <p className="text-ink-500 text-xs font-mono leading-snug">{badge.issuer}</p>
        </div>
        <span className="inline-flex items-center gap-1 bg-brand-primary/10 border border-brand-primary/25 text-brand-primary font-mono text-xs px-2 py-0.5 rounded-full shrink-0">
          <CheckCircle2 size={10} /> COMPLETED
        </span>
      </div>

      <h3 className="font-display font-semibold text-surface-text text-base leading-snug mb-2">
        {badge.title}
      </h3>
      <p className="text-ink-500 text-sm leading-relaxed">{badge.description}</p>
      {badge.year && (
        <p className="text-brand-primary/50 text-xs font-mono mt-3">{badge.year}</p>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
    </motion.div>
  );
}

function ScholarshipCard({ credential, index }: ScholarshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
        delay: index * 0.12,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-ink-800 border-l-2 border-brand-accent rounded-r-xl p-5"
    >
      <div className="flex items-start gap-3">
        <Award className="text-brand-accent shrink-0 mt-0.5" size={18} />
        <div>
          <p className="text-brand-accent text-xs font-mono mb-1">{credential.issuer}</p>
          <h3 className="font-display font-semibold text-surface-text mb-1 leading-snug">
            {credential.title}
          </h3>
          {credential.year && (
            <p className="text-ink-500 text-xs font-mono mb-2">{credential.year}</p>
          )}
          <p className="text-ink-500 text-sm leading-relaxed">{credential.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Credentials() {
  const badges = credentials.filter((c) => c.type === "badge");
  const scholarships = credentials.filter((c) => c.type === "scholarship");

  return (
    <section id="credentials" className="py-24 bg-ink-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-2">
            Credenciales
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            Logros verificables.
          </h2>
          <p className="text-ink-500 mt-2 text-sm">
            Not claimed on a CV. Earned, certified, and linked.
          </p>
        </motion.div>

        {/* Google Cloud Skill Badges — first because maximum visual impact */}
        <div className="mb-10">
          <p className="text-ink-500 text-xs font-mono uppercase tracking-wider mb-4">
            Google Cloud Skill Badges
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {badges.map((badge, i) => (
              <BadgeCard key={badge.title} badge={badge} index={i} />
            ))}
          </div>
        </div>

        {/* Academic Scholarships */}
        <div>
          <p className="text-ink-500 text-xs font-mono uppercase tracking-wider mb-4">
            Academic Scholarships
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {scholarships.map((cred, i) => (
              <ScholarshipCard key={cred.title} credential={cred} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
