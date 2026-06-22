"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo, testCases } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ink-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-surface-text leading-tight mb-4">
              Ready to ship.
            </h2>
            <p className="text-ink-500 text-lg leading-relaxed mb-10">
              You&apos;ve seen the argument. If you think I fit progile, let&apos;s talk.
              I&apos;m available to start conversations now.
            </p>
          </motion.div>

          {/* Primary CTA — email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group inline-flex items-center gap-3 mb-10"
          >
            <span className="font-display font-semibold text-xl text-surface-text group-hover:text-brand-primary transition-colors">
              {personalInfo.email}
            </span>
            <span className="w-9 h-9 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all shrink-0">
              <Mail
                size={16}
                className="text-brand-primary group-hover:text-ink-950 transition-colors"
              />
            </span>
          </motion.a>

          {/* Secondary links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink-500/40 text-ink-500 hover:border-brand-primary hover:text-brand-primary px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <LinkedinIcon size={14} /> LinkedIn
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink-500/40 text-ink-500 hover:border-brand-primary hover:text-brand-primary px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              <GithubIcon size={14} /> GitHub
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
          </motion.div>

          {/* Closing line — echoes the signature element */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-ink-500/50 text-sm font-mono border-t border-ink-500/20 pt-8"
          >
            // {testCases.length} tests passed · 0 failed · built with intent
          </motion.p>
        </div>
      </div>
    </section>
  );
}
