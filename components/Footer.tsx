import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-500/20 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-surface-text">
          AA<span className="text-brand-accent">·</span>
        </p>
        <p className="text-ink-500 text-sm text-center">
          {personalInfo.name} · 2026 · Construido con Next.js 14
        </p>
        <p className="font-mono text-xs text-ink-500/40">
          5 passed · 0 failed
        </p>
      </div>
    </footer>
  );
}
