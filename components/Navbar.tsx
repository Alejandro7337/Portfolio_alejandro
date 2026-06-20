"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/90 backdrop-blur-md border-b border-ink-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-surface-text">
          AA<span className="text-brand-accent">·</span>
        </a>

        <div className="hidden sm:flex items-center gap-8 text-sm">
          <a
            href="#credentials"
            className="text-ink-500 hover:text-surface-text transition-colors"
          >
            Credenciales
          </a>
          <a
            href="#skills"
            className="text-ink-500 hover:text-surface-text transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-ink-500 hover:text-surface-text transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
