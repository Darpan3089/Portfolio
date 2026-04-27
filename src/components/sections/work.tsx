"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

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
              scaleY,
              background:
                "linear-gradient(to bottom, var(--accent) 85%, transparent 100%)",
            }}
          />

          {/* Fixed anchor dot at the top of the line */}
          <div
            className="absolute -left-[4px] top-0 w-2 h-2 rounded-full hidden md:block z-10"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />

          <div className="space-y-12 md:pl-8">
            {workHistory.map((entry, index) => (
              <FadeUp key={entry.company} delay={index * 0.1}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-8 top-1.5 w-2 h-2 rounded-full hidden md:block"
                    style={{
                      backgroundColor: entry.current
                        ? "var(--accent)"
                        : "var(--border)",
                      boxShadow: entry.current
                        ? `0 0 0 3px var(--bg), 0 0 0 5px var(--accent)`
                        : "none",
                    }}
                  />

                  <div
                    className="rounded-xl p-6"
                    style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3
                          className="text-lg font-bold"
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
                      <div className="flex items-center gap-2">
                        <time
                          className="font-mono text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {entry.period}
                        </time>
                        {entry.current && (
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              background: "rgba(59,130,246,0.1)",
                              color: "var(--accent)",
                              border: "1px solid rgba(59,130,246,0.2)",
                            }}
                          >
                            Most Recent
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {entry.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "var(--accent)" }}
                            aria-hidden="true"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
