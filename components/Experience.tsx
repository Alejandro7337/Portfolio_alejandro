import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-ink-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-brand-primary font-mono text-xs mb-2 tracking-widest uppercase">
            Experiencia
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            Trabajo real en entornos reales.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-ink-500/25" />
          {experience.map((exp, i) => (
            <div key={i} className="pl-8 relative">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-brand-accent -translate-x-[3.5px]" />
              <div className="bg-ink-800 border border-ink-500/30 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-display font-bold text-xl text-surface-text">
                      {exp.role}
                    </h3>
                    <p className="text-brand-primary mt-1 text-sm">{exp.companyFull}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-1.5 text-ink-500 text-xs justify-end">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-ink-500 text-xs justify-end">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-ink-500 text-sm flex gap-2">
                      <span className="text-brand-accent mt-0.5 flex-shrink-0">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-ink-950/70 text-ink-500 text-xs px-2 py-1 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
