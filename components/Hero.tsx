"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { personalInfo, testCases } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center py-20">

        {/* Texto izquierdo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-brand-primary font-mono text-xs mb-5 tracking-widest uppercase">
            Front-End Developer para progile
          </p>
          <h1 className="font-display text-5xl lg:text-[4.5rem] font-bold text-surface-text leading-[1.05] mb-6">
            Alejandro<br />
            Alba Malagón
          </h1>
          <p className="text-ink-500 text-lg leading-relaxed mb-8 max-w-lg">
            Ingeniería de Sistemas ·{" "}
            <span className="text-surface-text">{personalInfo.university}</span>,{" "}
            {personalInfo.location} · {personalInfo.semester}.
            Desarrollador con experiencia multinube real y el stack de progile en construcción activa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#credentials"
              className="bg-brand-primary text-ink-950 font-semibold px-6 py-3 rounded-lg hover:bg-brand-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Ver credenciales <ArrowDown size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink-500/60 text-surface-text px-6 py-3 rounded-lg hover:border-brand-primary hover:text-brand-primary transition-colors inline-flex items-center gap-2"
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Test Suite Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="w-full lg:w-[430px]"
        >
          <div className="bg-ink-800 border border-brand-accent/25 rounded-xl overflow-hidden shadow-2xl">
            {/* Barra de ventana */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-500/25 bg-ink-950/60">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-ink-500 truncate">
                CANDIDATE_PROFILE.test.ts
              </span>
            </div>

            {/* Casos de test */}
            <div className="p-6 font-mono text-sm">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {testCases.map((tc, i) => (
                  <motion.div key={i} variants={lineVariants}>
                    <div className="flex items-start gap-3">
                      <span className="text-brand-accent mt-0.5 select-none">✓</span>
                      <div>
                        <span className="text-surface-text">{tc.method}</span>
                        <p className="text-ink-500 text-xs mt-0.5 font-sans">{tc.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Resultado final */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="mt-6 pt-4 border-t border-ink-500/25"
              >
                <div className="flex items-center justify-between">
                  <span className="text-ink-500 text-xs">
                    {testCases.length} passed · 0 failed · 142 ms
                  </span>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.1, duration: 0.3, type: "spring" }}
                    className="text-brand-accent font-bold text-base"
                  >
                    ✓
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
