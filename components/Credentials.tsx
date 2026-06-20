import { Award, Cloud } from "lucide-react";
import { credentials } from "@/lib/data";

export default function Credentials() {
  const scholarships = credentials.filter((c) => c.type === "scholarship");
  const badges = credentials.filter((c) => c.type === "badge");

  return (
    <section id="credentials" className="py-24 bg-ink-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-brand-primary font-mono text-xs mb-2 tracking-widest uppercase">
            Credenciales
          </p>
          <h2 className="font-display text-4xl font-bold text-surface-text">
            Logros verificables.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Becas académicas */}
          <div>
            <h3 className="text-ink-500 text-xs font-mono uppercase tracking-wider mb-4">
              Becas académicas
            </h3>
            <div className="space-y-4">
              {scholarships.map((cred, i) => (
                <div
                  key={i}
                  className="bg-ink-800 border-l-2 border-brand-accent rounded-r-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <Award
                      className="text-brand-accent mt-0.5 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <h4 className="font-display font-semibold text-surface-text">
                        {cred.title}
                      </h4>
                      <p className="text-brand-primary text-xs mt-0.5 mb-2">
                        {cred.issuer}
                      </p>
                      <p className="text-ink-500 text-sm">{cred.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Cloud Badges */}
          <div>
            <h3 className="text-ink-500 text-xs font-mono uppercase tracking-wider mb-4">
              Google Cloud Skill Badges
            </h3>
            <div className="space-y-4">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="bg-ink-800 border-l-2 border-brand-primary rounded-r-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <Cloud
                      className="text-brand-primary mt-0.5 flex-shrink-0"
                      size={18}
                    />
                    <div>
                      <h4 className="font-display font-semibold text-surface-text">
                        {badge.title}
                      </h4>
                      <p className="text-brand-primary text-xs mt-0.5 mb-2">
                        {badge.issuer}
                      </p>
                      <p className="text-ink-500 text-sm">{badge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
