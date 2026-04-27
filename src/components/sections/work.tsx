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
    company: "Kode Creators Private Limited",
    role: "Software Engineer",
    period: "Dec 2025 — Present",
    current: true,
    achievements: [
      "Specializing in React and TypeScript, building dynamic, data-driven applications with optimized state management and role-based access control.",
      "Structuring scalable admin panel architectures and leveraging AI-assisted tools to accelerate development while maintaining the highest code quality.",
      "Building responsive interfaces and implementing complex business logic across full-stack features.",
    ],
  },
  {
    company: "LedgerLine Technologies",
    role: "Frontend Developer",
    period: "May 2025 — Nov 2025",
    achievements: [
      "Specialized in blockchain development and scalable web/mobile solutions using React and Next.js.",
      "Developed Telegram Mini Apps and decentralized (dApp) solutions, focusing on performance and security.",
      "Collaborated on building dynamic, data-driven applications with optimized state management.",
    ],
  },
  {
    company: "Kode Creators",
    role: "Frontend Developer",
    period: "Sep 2022 — May 2025",
    achievements: [
      "Built and maintained responsive web applications using React.js, Next.js, and Tailwind CSS.",
      "Structured scalable admin panel architectures with role-based access control and optimized state management.",
      "Leveraged AI-assisted tools to accelerate development cycles while maintaining high code quality and visual consistency.",
    ],
  },
  {
    company: "ImageIO",
    role: "Full Stack Developer",
    period: "Sep 2021 — Aug 2022",
    achievements: [
      "Developed full-stack features using Node.js, JavaScript, and CSS for data-driven applications.",
      "Integrated REST APIs and implemented responsive UI components to enhance user engagement.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines.",
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
