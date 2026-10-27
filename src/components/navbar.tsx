"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#work", label: "Work", sectionId: "work" },
  { href: "/#projects", label: "Projects", sectionId: "projects" },
  { href: "/#services", label: "Services", sectionId: "services" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
];

const sectionIds = navLinks
  .filter((l) => l.sectionId)
  .map((l) => l.sectionId as string);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-275">
        <nav
          className={`flex items-center justify-between h-14 pl-3 pr-2 rounded-full transition-all duration-300 ${
            scrolled || menuOpen
              ? "glass glass-strong shadow-[0_10px_40px_-15px_rgba(0,0,0,0.35)]"
              : "border border-transparent"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Darpan Patel — Home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg font-mono text-xs font-bold text-white"
              style={{
                background: "var(--btn-gradient)",
                boxShadow: "0 6px 20px -6px var(--shadow-glow)",
              }}
            >
              DP
            </span>
            <span
              className="hidden sm:inline text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Darpan Patel
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label, sectionId }) => {
              const isActive = sectionId ? activeSection === sectionId : false;
              return (
                <li key={href} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "var(--accent-soft)",
                        border: "1px solid var(--accent-ring)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Link
                    href={href}
                    className="relative block px-4 py-1.5 text-sm font-medium transition-colors duration-200 hover:text-(--text-primary)"
                    style={{
                      color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <span className="hidden md:inline-flex">
              <Link href="/#contact" className="btn-primary py-2! px-4! text-xs!">
                Let&apos;s talk
                <ArrowUpRight size={13} />
              </Link>
            </span>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — animated with AnimatePresence */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden glass glass-strong mt-2 rounded-2xl p-2"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(({ href, label, sectionId }) => {
                  const isActive = sectionId ? activeSection === sectionId : false;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="text-sm font-medium py-2.5 px-4 rounded-xl transition-colors"
                      style={{
                        color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                        background: isActive ? "var(--accent-soft)" : "transparent",
                      }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  );
                })}
                <Link
                  href="/#contact"
                  className="btn-primary mt-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s talk
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
