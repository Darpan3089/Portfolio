"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#work", label: "Work", sectionId: "work" },
  { href: "/#projects", label: "Projects", sectionId: "projects" },
  { href: "/blog", label: "Blog", sectionId: null },
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
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "border-b border-transparent"
      }`}
      style={{
        backgroundColor: scrolled
          ? `rgba(var(--bg-rgb), 0.88)`
          : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <nav
        className="container-main flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Darpan Patel — Home"
          className="font-mono text-sm font-bold tracking-wider transition-opacity hover:opacity-70"
          style={{ color: "var(--accent)" }}
        >
          DP
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label, sectionId }) => {
            const isActive = sectionId ? activeSection === sectionId : false;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-sm font-medium transition-colors duration-200 py-1"
                  style={{
                    color: isActive
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                  }}
                >
                  {label}
                  {/* Active underline */}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: "var(--accent)",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label, sectionId }) => {
                const isActive = sectionId ? activeSection === sectionId : false;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                    style={{
                      color: isActive
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                      background: isActive
                        ? "var(--surface-elevated)"
                        : "transparent",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
