"use client";

import Link from "next/link";
import { ArrowUpRight, Zap, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroStack = ["React", "Next.js", "TypeScript", "Node.js", "AWS"];

const marqueeItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "TanStack Query",
  "Redux Toolkit",
  "Tailwind CSS",
  "WebSockets",
  "Socket.io",
  "Strapi CMS",
  "Chart.js",
  "AWS",
  "GitHub Actions",
  "Framer Motion",
];

// Decorative bar heights (%) for the mock live chart
const bars = [38, 62, 45, 80, 56, 72, 50, 88, 64, 76, 58, 92, 70, 84];

function LiveDashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease }}
      className="relative w-full max-w-md mx-auto lg:ml-auto"
      aria-hidden="true"
    >
      <div className="hero-card-glow" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="glass glass-strong relative rounded-2xl p-5"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span
              className="font-mono text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              live-dashboard.tsx
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-mono text-[10px] font-semibold tracking-wider"
            style={{
              color: "var(--green)",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.25)",
            }}
          >
            <span className="pulse-dot" style={{ width: 6, height: 6 }} />
            LIVE
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--accent-soft)",
              border: "1px solid var(--accent-ring)",
            }}
          >
            <p className="gradient-text text-4xl font-bold leading-none mb-2">5+</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              years shipping
            </p>
          </div>
          <div
            className="rounded-xl p-4"
            style={{
              background: "var(--glass)",
              border: "1px solid var(--glass-border)",
            }}
          >
            <p
              className="text-sm font-semibold leading-tight mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Frontend Dev
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              @ Kode Creators
            </p>
          </div>
        </div>

        {/* Mock live chart */}
        <div
          className="rounded-xl p-4 mb-4"
          style={{
            background: "var(--glass)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="font-mono text-[11px]"
              style={{ color: "var(--text-muted)" }}
            >
              socket.io · streaming
            </span>
            <span
              className="font-mono text-[11px]"
              style={{ color: "var(--accent)" }}
            >
              ● real-time
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-24">
            {bars.map((h, i) => (
              <span
                key={i}
                className="eq-bar"
                style={{ height: `${h}%`, animationDelay: `${(i % 7) * 0.18}s` }}
              />
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {heroStack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="glass glass-strong absolute -left-6 bottom-14 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        <Zap size={14} style={{ color: "var(--accent-2)" }} />
        TanStack Query · cached
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
        className="glass glass-strong absolute -right-4 -top-5 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
        style={{ color: "var(--text-primary)" }}
      >
        <Cloud size={14} style={{ color: "var(--accent-3)" }} />
        AWS · CloudFront
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10 w-full pt-32 pb-16 md:pt-40">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Status pill */}
            <div
              className="glass inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="pulse-dot" aria-hidden="true" />
              Open to full-time roles
            </div>

            {/* Eyebrow — typewriter effect */}
            <p
              className="font-mono text-sm mb-5"
              style={{ color: "var(--accent)" }}
            >
              <span className="typewriter">
                React &amp; Next.js Engineer
              </span>
            </p>

            {/* Headline */}
            <h1
              className="font-bold leading-[1.05] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2.6rem, 5.4vw, 4.4rem)",
                color: "var(--text-primary)",
              }}
            >
              I build fast,{" "}
              <span className="gradient-text whitespace-nowrap">real-time</span>{" "}
              React apps that don&apos;t break under pressure.
            </h1>

            {/* Subtext */}
            <p
              className="text-lg mb-10 max-w-xl"
              style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            >
              I&apos;m Darpan — a frontend engineer with 5+ years building
              scalable products for healthcare, education, and business teams. From
              live operational dashboards to clinical booking and POS platforms, I
              turn complex, real-time requirements into interfaces that stay fast,
              reliable, and genuinely pleasant to use.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link href="#contact" className="btn-primary">
                Get in touch
                <ArrowUpRight size={15} />
              </Link>
              <Link href="#projects" className="btn-secondary">
                View case studies
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              I reply within 24 hours.
            </p>
          </motion.div>

          <LiveDashboardCard />
        </div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 container-main w-full pb-12"
      >
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center gap-10 pr-10"
                aria-hidden={copy === 1}
              >
                {marqueeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-10 font-mono text-sm whitespace-nowrap"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item}
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: "var(--accent-2)" }}
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
