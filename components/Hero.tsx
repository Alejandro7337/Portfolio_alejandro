"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo, testCases, heroContent } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.72 },
  },
};

const testLineVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center py-20">

        {/* Left: copy */}
        <div className="flex flex-col gap-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.05 }}
            className="font-mono text-xs text-brand-primary tracking-widest uppercase"
          >
            {heroContent.tagline}
          </motion.p>

          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: 0.2 }}
              className="text-ink-500 text-xl"
            >
              {heroContent.statementPre}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.36 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-surface-text"
            >
              {heroContent.statementMain}{" "}
              <span className="text-brand-accent">{heroContent.statementAccent}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.55 }}
            className="space-y-1"
          >
            <p className="text-surface-text font-semibold text-lg leading-tight">
              {personalInfo.name}
            </p>
            <p className="text-ink-500 text-sm">
              {personalInfo.roleEn} ·{" "}
              <span className="text-surface-text">{personalInfo.university}</span>
            </p>
            <p className="text-ink-500 text-sm pt-2 max-w-md leading-relaxed">
              {heroContent.pitch}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="bg-brand-primary text-ink-950 font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2 text-sm"
            >
              Get in touch <Mail size={14} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-500/50 text-surface-text px-5 py-2.5 rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors inline-flex items-center gap-2 text-sm"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-500/50 text-surface-text px-5 py-2.5 rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors inline-flex items-center gap-2 text-sm"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right: signature element — CANDIDATE_PROFILE.test.ts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="w-full lg:w-[420px]"
        >
          <div className="bg-ink-800 border border-brand-accent/25 rounded-xl overflow-hidden shadow-2xl">
            {/* macOS title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-500/20 bg-ink-950/60">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-ink-500 select-none truncate">
                CANDIDATE_PROFILE.test.ts
              </span>
            </div>

            {/* Test cases */}
            <div className="p-5 font-mono text-sm">
              <motion.div
                variants={testContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {testCases.map((tc, i) => (
                  <motion.div key={i} variants={testLineVariants}>
                    <div className="flex items-start gap-3">
                      <span className="text-brand-accent select-none mt-0.5">✓</span>
                      <div>
                        <span className="text-surface-text">{tc.method}</span>
                        <p className="text-ink-500 text-xs mt-0.5 font-sans">{tc.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Final result row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.85, duration: 0.4 }}
                className="mt-5 pt-4 border-t border-ink-500/20"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-ink-500">
                    {testCases.length} passed · 0 failed · 142 ms
                  </span>
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 2.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                    }}
                    className="text-brand-accent font-bold tracking-wide"
                  >
                    PASS
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
