"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center dot-grid overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, transparent 0%, var(--bg) 80%)",
        }}
      />

      <div className="container-main relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow — typewriter effect */}
          <p
            className="font-mono text-sm mb-6"
            style={{ color: "var(--accent)" }}
          >
            <span className="typewriter">
              Freelance React &amp; Next.js Engineer
            </span>
          </p>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "var(--text-primary)",
            }}
          >
            I build fast,{" "}
            <span style={{ color: "var(--accent)" }}>real-time</span>{" "}
            React apps that don&apos;t break under pressure.
          </h1>

          {/* Subtext */}
          <p
            className="text-lg mb-10 max-w-xl"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
          >
            I&apos;m Darpan — a frontend engineer with 5+ years building
            data-heavy products for healthcare, fintech, and IoT teams. From live
            trading dashboards to clinical booking platforms, I turn complex,
            real-time requirements into interfaces that stay fast, reliable, and
            genuinely pleasant to use.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
              }}
            >
              Book a free consult
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-[var(--surface-elevated)]"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                background: "var(--surface)",
              }}
            >
              View case studies
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            <span className="pulse-dot" aria-hidden="true" />
            Currently booking freelance projects · I reply within 24 hours
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ color: "var(--text-muted)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
