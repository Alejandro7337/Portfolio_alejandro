import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-brand-primary font-mono text-xs mb-2 tracking-widest uppercase">
            Stack técnico
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            Lo que traigo y lo que construyo.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-semibold text-surface-text mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent inline-block" />
              Domino
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.mastered.map((skill, i) => (
                <span
                  key={i}
                  className="bg-ink-800 border border-ink-500/40 text-surface-text text-sm px-3 py-1.5 rounded-lg"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-surface-text mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary inline-block" />
              Aprendiendo activamente
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.learning.map((skill, i) => (
                <span
                  key={i}
                  className="bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5"
                >
                  <span className="text-xs opacity-70">▶</span>
                  {skill.name}
                </span>
              ))}
            </div>
            <p className="text-ink-500 text-xs mt-5">
              Stack activo de progile — en aprendizaje mientras construía esta misma página.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
