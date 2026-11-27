"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

interface WorkRole {
  title: string;
  /** Only needed when a company has more than one role */
  period?: string;
}

interface WorkEntry {
  company: string;
  /** Most recent role first */
  roles: WorkRole[];
  period: string;
  current?: boolean;
  achievements: string[];
}

const workHistory: WorkEntry[] = [
  {
    company: "Kode Creators Pvt. Ltd.",
    roles: [{ title: "Software Engineer (Full-Stack)" }],
    period: "Sep 2022 — Present",
    current: true,
    achievements: [
      "Worked as a full-stack developer on 5+ healthcare products (appointment booking, patient management, billing, POS) using React, Next.js, TypeScript, Node.js, Express.js, and MySQL/MongoDB, used by 50+ clinics and 100+ daily users.",
      "Built AI-assisted report generation on the Claude API (discharge summaries, lab interpretations, radiology reports, consultation notes, management reports) with a human-in-the-loop flow: clinicians edit, approve, or reject every AI draft before it enters the record.",
      "Built a shared Node.js AI service layer that masks PII before data leaves the server, uses versioned prompt templates, enforces per-hospital switches and monthly quotas, and audits every AI request.",
      "Designed RESTful APIs, database schemas, and role-based access control for clinic staff, doctors, and admins.",
      "Defined the frontend architecture and a reusable component library shared across 5+ projects, cutting new-screen development time by about 40%.",
      "Migrated 12+ modules from SWR to TanStack Query, reducing redundant API calls by about 35%.",
      "Built real-time appointment and operations dashboards with Node.js and Socket.io, replacing manual refresh with live updates.",
      "Built a custom Strapi headless CMS for client-managed Next.js content, and improved load performance with code splitting, lazy loading, React Suspense, and memoisation.",
      "Contributed to an Angular-based client application: UI components, services, reactive forms, and bug fixes.",
      "Deployed and maintained apps on AWS (EC2, Route 53, CloudFront) with Nginx, PM2, and GitHub Actions CI/CD, plus Vercel and Netlify.",
    ],
  },
  {
    company: "ImageIO Knowledge Solutions Pvt. Ltd.",
    roles: [{ title: "Full Stack Developer" }],
    period: "Sep 2021 — Aug 2022",
    achievements: [
      "Built Academic ERP modules for students, courses, faculty, and administration using React, Node.js, Express, and MySQL, serving 5+ institutions / 100+ users.",
      "Built reusable React components and responsive role-based interfaces, with RBAC for admin, faculty, and student portals.",
      "Designed and integrated RESTful APIs with request validation, structured error handling, and authentication middleware.",
      "Integrated the HDFC payment gateway for automated fee collection, transaction tracking, and reconciliation.",
      "Designed MySQL schemas and wrote Swagger/OpenAPI documentation, reducing frontend–backend integration back-and-forth.",
    ],
  },
];

export function WorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reachedCount, setReachedCount] = useState(0);

  // Progress 0 → 1 while the track passes the viewport centre, so the tip of
  // the line always sits on the centre line of the screen.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // `top` is relative to the track; a percentage `y` would be relative to the dot itself
  const dotTop = useTransform(springProgress, (v) => `${v * 100}%`);

  // Light up each entry node once the line's tip has passed it
  useMotionValueEvent(springProgress, "change", (v) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const tip = rect.top + v * rect.height;
    let count = 0;
    for (const node of nodeRefs.current) {
      if (!node) continue;
      const r = node.getBoundingClientRect();
      if (r.top + r.height / 2 <= tip + 1) count++;
    }
    setReachedCount(count);
  });

  return (
    <section
      id="work"
      className="section-padding"
      aria-labelledby="work-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="work-heading"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve <span className="gradient-text">worked</span>.
            </>
          }
        />

        {/* Timeline */}
        <div className="relative">
          {/* Track — starts at the centre of the first entry node */}
          <div
            ref={trackRef}
            className="absolute left-0 top-8.5 bottom-0 w-px hidden md:block"
            aria-hidden="true"
          >
            {/* Base line — dimmed */}
            <div className="absolute inset-0" style={{ background: "var(--border)" }} />

            {/* Progress line — grows from the top as the user scrolls */}
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                scaleY: springProgress,
                background:
                  "linear-gradient(to bottom, var(--accent), var(--accent-2) 60%, var(--accent-3))",
                boxShadow: "0 0 8px var(--accent)",
              }}
            />

            {/* Scroll-tracking dot — rides the tip of the progress line */}
            <motion.div
              className="absolute left-1/2 w-2.75 h-2.75 rounded-full z-20"
              style={{
                top: dotTop,
                x: "-50%",
                y: "-50%",
                background: "var(--btn-gradient)",
                boxShadow:
                  "0 0 0 3px var(--bg), 0 0 14px var(--accent), 0 0 4px var(--accent-2)",
              }}
            />
          </div>

          <div className="space-y-6 md:pl-10">
            {workHistory.map((entry, index) => {
              const reached = index < reachedCount;
              return (
                <FadeUp key={entry.company} delay={index * 0.1}>
                  <div className="relative">
                    {/* Timeline connector dot per entry — lights up once the line reaches it */}
                    <div
                      ref={(el) => {
                        nodeRefs.current[index] = el;
                      }}
                      className="absolute -left-11.5 top-7 hidden md:flex items-center justify-center w-3 h-3 rounded-full z-10 transition-[border-color,box-shadow] duration-300"
                      style={{
                        background: reached ? "var(--btn-gradient)" : "var(--bg)",
                        border: reached
                          ? "2px solid var(--accent)"
                          : "2px solid var(--border)",
                        boxShadow: reached
                          ? "0 0 0 3px var(--bg), 0 0 10px var(--accent)"
                          : "0 0 0 3px var(--bg)",
                      }}
                    >
                      {entry.current && reached && (
                        <motion.span
                          className="absolute inset-0 rounded-full"
                          style={{ border: "2px solid var(--accent)" }}
                          animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className="glass glow-card rounded-2xl p-6 md:p-7"
                      style={
                        entry.current
                          ? {
                              borderColor: "var(--accent-ring)",
                              backgroundImage:
                                "linear-gradient(135deg, var(--accent-soft) 0%, transparent 55%)",
                            }
                          : undefined
                      }
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div>
                          <h3
                            className="text-lg md:text-xl font-bold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {entry.company}
                          </h3>
                          <ul className="space-y-0.5">
                            {entry.roles.map((role, i) => (
                              <li key={role.title} className="text-sm">
                                <span
                                  className="font-medium"
                                  style={{ color: i === 0 ? "var(--accent)" : "var(--text-muted)" }}
                                >
                                  {role.title}
                                </span>
                                {role.period && (
                                  <span
                                    className="font-mono text-xs ml-2"
                                    style={{ color: "var(--text-muted)" }}
                                  >
                                    {role.period}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <time
                            className="font-mono text-xs px-3 py-1 rounded-full"
                            style={{
                              color: entry.current ? "var(--accent)" : "var(--text-muted)",
                              background: entry.current ? "var(--accent-soft)" : "var(--glass)",
                              border: entry.current
                                ? "1px solid var(--accent-ring)"
                                : "1px solid var(--glass-border)",
                            }}
                          >
                            {entry.period}
                          </time>
                          {entry.current && (
                            <span
                              className="px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 text-white"
                              style={{ background: "var(--btn-gradient)" }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full inline-block bg-white" />
                              Now
                            </span>
                          )}
                        </div>
                      </div>

                      <ul className="grid gap-3 lg:grid-cols-2 lg:gap-x-8">
                        {entry.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span
                              className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                              style={{ background: "var(--btn-gradient)" }}
                              aria-hidden="true"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
