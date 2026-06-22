"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { WhyMeCard } from "@/lib/data";

interface WhyMeProps {
  whyMeCards: WhyMeCard[];
}

interface FeaturedCardProps {
  card: WhyMeCard;
}

interface RegularCardProps {
  card: WhyMeCard;
  index: number;
}

function FeaturedCard({ card }: FeaturedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="border border-brand-accent/35 bg-ink-800 rounded-xl p-6 md:p-8 shadow-[0_0_48px_-16px_rgba(245,166,35,0.2)]"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <span className="font-mono text-xs text-brand-accent tracking-widest uppercase">
            ⚡ Critical — most relevant
          </span>
          <p className="text-ink-500 text-xs mt-1">{card.requirement}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent font-mono text-xs px-3 py-1 rounded-full shrink-0">
          <CheckCircle2 size={11} /> PASS
        </span>
      </div>

      {/* Before / After visual */}
      {card.beforeAfter && card.beforeAfter.length > 0 && (
        <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-center mb-6">
          <div className="bg-ink-950/70 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-ink-500 mb-2.5">// 4 days ago</p>
            {card.beforeAfter.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-ink-500/60 w-24 shrink-0">{item.label}:</span>
                <span className="text-ink-500/50 line-through">{item.before}</span>
              </div>
            ))}
          </div>
          <div className="hidden sm:flex justify-center px-1">
            <ArrowRight className="text-brand-accent shrink-0" size={18} />
          </div>
          <div className="bg-ink-950/70 rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="text-brand-accent mb-2.5">// today</p>
            {card.beforeAfter.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-surface-text/50 w-24 shrink-0">{item.label}:</span>
                <span className="text-surface-text">{item.after}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Copy */}
      <p className="font-display font-bold text-surface-text text-xl mb-2 leading-snug">
        {card.title}
      </p>
      <p className="text-ink-500 text-sm leading-relaxed">{card.body}</p>

      <div className="mt-5 pt-5 border-t border-ink-500/20 flex items-center gap-3">
        <span className="font-display font-bold text-3xl text-brand-accent">{card.stat}</span>
        <span className="text-ink-500 text-sm">{card.statLabel}</span>
      </div>
    </motion.div>
  );
}

function RegularCard({ card, index }: RegularCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
      viewport={{ once: true, amount: 0.15 }}
      className="bg-ink-800 border border-ink-500/25 rounded-xl p-5 hover:border-brand-primary/35 transition-colors flex flex-col gap-4"
    >
      <div>
        <span className="inline-flex items-center gap-1.5 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-xs px-2 py-0.5 rounded-full">
          <CheckCircle2 size={9} /> PASS
        </span>
        <p className="text-ink-500 text-xs mt-2 leading-snug">{card.requirement}</p>
      </div>

      <div className="flex-1">
        <h3 className="font-display font-semibold text-surface-text text-sm mb-2 leading-snug">
          {card.title}
        </h3>
        <p className="text-ink-500 text-sm leading-relaxed">{card.body}</p>
      </div>

      <div className="pt-3 border-t border-ink-500/20 flex items-baseline gap-2">
        <span className="font-display font-bold text-xl text-brand-primary">{card.stat}</span>
        <span className="text-ink-500 text-xs">{card.statLabel}</span>
      </div>
    </motion.div>
  );
}

export default function WhyMe({ whyMeCards }: WhyMeProps) {
  const featured = whyMeCards.find((c) => c.featured);
  const rest = whyMeCards.filter((c) => !c.featured);

  return (
    <section id="why-me" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10"
        >
          <p className="font-mono text-xs text-brand-primary tracking-widest uppercase mb-2">
            // why-alejandro
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            The progile filter.{" "}
            <span className="text-brand-accent">Applied.</span>
          </h2>
          <p className="text-ink-500 mt-3 text-sm max-w-lg leading-relaxed">
            Six requirements. Six matches. Here&apos;s the evidence — starting with the one
            that matters most.
          </p>
        </motion.div>

        {featured && <FeaturedCard card={featured} />}

        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((card, i) => (
            <RegularCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
