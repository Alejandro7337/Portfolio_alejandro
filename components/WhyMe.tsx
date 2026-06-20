import { whyMeCards } from "@/lib/data";

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-brand-primary font-mono text-xs mb-2 tracking-widest uppercase">
            Por qué yo
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            El caso, sin adjetivos.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {whyMeCards.map((card, i) => (
            <div
              key={i}
              className="bg-ink-800 border border-ink-500/30 rounded-xl p-6 hover:border-brand-primary/40 transition-colors"
            >
              <div className="mb-5">
                <span className="font-display font-bold text-3xl text-brand-accent">
                  {card.stat}
                </span>
                <p className="text-xs text-ink-500 mt-1">{card.statLabel}</p>
              </div>
              <h3 className="font-display font-semibold text-surface-text mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
