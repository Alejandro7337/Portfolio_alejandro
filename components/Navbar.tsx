"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Why Me", href: "#why-me" },
  { label: "Credentials", href: "#credentials" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/90 backdrop-blur-md border-b border-ink-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl text-surface-text select-none shrink-0"
        >
          AA<span className="text-brand-accent">·</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-500 hover:text-surface-text transition-colors text-sm whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1 bg-brand-primary text-ink-950 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors shrink-0"
        >
          Let&apos;s talk →
        </a>

        {/* Mobile: hamburger button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-surface-text p-1.5 rounded-lg hover:bg-ink-800 transition-colors"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-md border-b border-ink-500/20"
          >
            <nav className="px-6 py-4 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.18, ease: "easeOut" }}
                  className="text-ink-500 hover:text-surface-text transition-colors text-base py-2.5 border-b border-ink-500/10 last:border-b-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 bg-brand-primary text-ink-950 font-semibold text-sm px-5 py-3 rounded-lg text-center hover:bg-brand-primary/90 transition-colors"
              >
                Let&apos;s talk →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
