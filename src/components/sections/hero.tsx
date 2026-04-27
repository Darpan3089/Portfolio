"use client";

import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
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
          {/* Greeting */}
          <p
            className="font-mono text-sm mb-6 flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="inline-block w-6 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Hi, I&apos;m Darpan 👋
          </p>

          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "var(--text-primary)",
            }}
          >
            Software Engineer building{" "}
            <span style={{ color: "var(--accent)" }}>scalable</span> &amp; dynamic
            web apps.
          </h1>

          {/* Subtext */}
          <p
            className="text-lg mb-10 max-w-xl"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
          >
            Specializing in React, Next.js, and TypeScript to create high-performance,
            data-driven applications with optimized architectures and seamless
            user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
              }}
            >
              View Work
              <ArrowDown size={15} />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                background: "transparent",
              }}
            >
              <Download size={15} />
              Download Resume
            </a>
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
            Available for freelance &amp; full-time opportunities
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
