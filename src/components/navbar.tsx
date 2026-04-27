"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
        backgroundColor: scrolled ? "rgba(var(--bg-rgb, 10,10,10), 0.85)" : "transparent",
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
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {label}
              </Link>
            </li>
          ))}
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
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium py-1 transition-colors"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
