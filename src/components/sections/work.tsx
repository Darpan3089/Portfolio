"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FadeUp } from "@/components/motion-wrapper";

interface WorkEntry {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  achievements: string[];
}

const workHistory: WorkEntry[] = [
  {
    company: "Kode Creators Pvt. Ltd.",
    role: "Software Engineer",
    period: "Dec 2025 — Present",
    current: true,
    achievements: [
      "Lead frontend development of healthcare booking and practice-management platforms with React.js, TypeScript, and Tailwind CSS, serving clinical workflows for multiple provider organisations.",
      "Architected scalable admin panel architectures with role-based access control, advanced data tables, and dynamic views — improving operator throughput on high-volume workflows.",
      "Migrated server-state management to TanStack React Query, introducing intelligent caching, background refetching, and optimistic updates that cut redundant API calls.",
      "Established a reusable component library and conventions adopted across modules, accelerating feature delivery for the wider engineering team.",
    ],
  },
  {
    company: "LedgerLine Technologies",
    role: "Frontend Developer",
    period: "May 2025 — Nov 2025",
    achievements: [
      "Built blockchain dApps and Telegram Mini Apps with React.js and Next.js, delivering decentralised solutions and mobile web experiences focused on performance and security.",
      "Developed real-time trading interfaces with WebSocket feeds and TradingView charts — live order books, trade history, and price tickers handling sub-second updates without UI jank.",
      "Reduced page load time by ~30% through bundle analysis, dynamic imports, image optimisation, and route-level caching.",
      "Implemented secure auth flows: JWT-based session management, protected routes, and role-based access for trader and admin views.",
    ],
  },
  {
    company: "Kode Creators Pvt. Ltd.",
    role: "Frontend Developer",
    period: "Sep 2022 — May 2025",
    achievements: [
      "Delivered a scalable healthcare booking and POS platform with React.js, Next.js, and TypeScript — used daily by clinic staff for appointments, billing, and patient records.",
      "Owned the data-fetching architecture using SWR stale-while-revalidate patterns, reducing API load and enabling near-instant navigation between cached views.",
      "Built admin dashboards with real-time appointment and transaction tracking, replacing manual reconciliation processes.",
      "Applied React Suspense, lazy loading, and memoisation to keep the bundle lean as the app scaled to dozens of routes and modules.",
    ],
  },
  {
    company: "ImageIO Knowledge Solutions Pvt. Ltd.",
    role: "Full Stack Developer",
    period: "Sep 2021 — Aug 2022",
    achievements: [
      "Built end-to-end Academic ERP modules with React.js, Node.js, Express.js, and MySQL — covering student lifecycle, course enrollment, and administrative workflows.",
      "Integrated the HDFC payment gateway for automated fee collection, reconciliation, and transaction tracking, eliminating manual finance work for the institution.",
      "Tuned MySQL queries through indexing and schema refactoring, significantly improving report-generation speed for admin users.",
      "Authored RESTful APIs with input validation, structured error handling, and Swagger documentation for downstream consumers.",
    ],
  },
];

export function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const dotY = useTransform(springProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="work"
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-labelledby="work-heading"
    >
      <div className="container-main">
        <FadeUp>
          <p
            className="font-mono text-xs mb-3 flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Experience
          </p>
          <h2
            id="work-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-14"
            style={{ color: "var(--text-primary)" }}
          >
            Where I&apos;ve worked.
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Base Vertical line — full height, dimmed */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          {/* Growing accent line — scales from top as user scrolls */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block origin-top"
            style={{
              scaleY: springProgress,
              background:
                "linear-gradient(to bottom, var(--accent) 85%, transparent 100%)",
            }}
          />

          {/* Scroll-tracking dot — follows the tip of the accent line */}
          <motion.div
            className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full hidden md:block z-10"
            style={{
              y: dotY,
              translateY: "-50%",
              backgroundColor: "var(--accent)",
              boxShadow:
                "0 0 0 3px var(--surface), 0 0 12px var(--accent), 0 0 4px var(--accent)",
            }}
          />

          <div className="space-y-8 md:pl-10">
            {workHistory.map((entry, index) => (
              <FadeUp key={entry.company} delay={index * 0.1}>
                <motion.div
                  className="relative group"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Timeline connector dot per entry */}
                  <div
                    className="absolute   left-[-45.5px] top-0 hidden md:flex items-center justify-center w-3 h-3 rounded-full z-10 transition-all duration-300"
                    style={{
                      backgroundColor: entry.current
                        ? "var(--accent)"
                        : "var(--surface)",
                      border: entry.current
                        ? "2px solid var(--accent)"
                        : "2px solid var(--border)",
                      boxShadow: entry.current
                        ? `0 0 0 3px var(--surface), 0 0 8px var(--accent)`
                        : "none",
                    }}
                  >
                    {/* Pulsing ring for current role */}
                    {entry.current && (
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{ border: "2px solid var(--accent)" }}
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-xl p-6 transition-all duration-300"
                    style={{
                      background: entry.current
                        ? "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, var(--bg) 60%)"
                        : "var(--bg)",
                      border: entry.current
                        ? "1px solid rgba(59,130,246,0.3)"
                        : "1px solid var(--border)",
                      boxShadow: entry.current
                        ? "0 0 0 0 transparent, inset 0 1px 0 rgba(59,130,246,0.1)"
                        : "none",
                    }}
                  >
                    {/* Hover shimmer on current */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: entry.current
                          ? "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 70%)"
                          : "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 70%)",
                      }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3
                          className="text-lg font-bold mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {entry.company}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: "var(--accent)" }}
                        >
                          {entry.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <time
                          className="font-mono text-xs px-2.5 py-1 rounded-md"
                          style={{
                            color: entry.current
                              ? "var(--accent)"
                              : "var(--text-muted)",
                            background: entry.current
                              ? "rgba(59,130,246,0.08)"
                              : "rgba(255,255,255,0.04)",
                            border: entry.current
                              ? "1px solid rgba(59,130,246,0.2)"
                              : "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          {entry.period}
                        </time>
                        {entry.current && (
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
                            style={{
                              background: "rgba(59,130,246,0.12)",
                              color: "var(--accent)",
                              border: "1px solid rgba(59,130,246,0.25)",
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full inline-block"
                              style={{ backgroundColor: "var(--accent)" }}
                            />
                            Now
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {entry.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span
                            className="mt-2 shrink-0 w-1 h-1 rounded-full"
                            style={{ backgroundColor: "var(--accent)", opacity: 0.7 }}
                            aria-hidden="true"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
