import { Layers, Code2, MapPin } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

const facts = [
  { Icon: Layers, label: "Domains", value: "Healthcare SaaS · ERP · Business" },
  { Icon: Code2, label: "Tech focus", value: "React / Next.js / TypeScript / AI" },
  { Icon: MapPin, label: "Based in", value: "Vadodara, Gujarat, India" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title={
            <>
              A developer who cares about the{" "}
              <span className="gradient-text">craft</span>.
            </>
          }
        />

        <div className="grid md:grid-cols-3 gap-4">
          {/* Bio */}
          <FadeUp delay={0.05} className="md:col-span-2 md:row-span-2">
            <div className="glass glow-card h-full rounded-2xl p-7 md:p-9">
              <div
                className="space-y-5 text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                <p>
                  I&apos;m Darpan, a Frontend Developer based in{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Vadodara, Gujarat, India</strong>,
                  with{" "}
                  <strong style={{ color: "var(--text-primary)" }}>5+ years of experience</strong>{" "}
                  building healthcare, ERP, and business products. I specialize in React, Next.js,
                  and TypeScript, with a focus on frontend architecture, real-time dashboards,
                  RBAC-driven multi-role interfaces, and REST API integration — and I work across
                  the stack with Node.js, NestJS, and PostgreSQL.
                </p>
                <p>
                  At{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Kode Creators</strong>, I led
                  frontend development of 5+ healthcare products — appointment booking, patient
                  management, billing, and POS — used by 50+ clinics. I built{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    AI report generation on the Claude API
                  </strong>{" "}
                  that drafts discharge summaries, lab and radiology reports, and management
                  reports, with clinician review, PII masking, and per-hospital usage controls. I
                  also defined a shared component library that cut new-screen development time by
                  about 40%, and moved 12+ modules from SWR to{" "}
                  <strong style={{ color: "var(--text-primary)" }}>TanStack Query</strong>,
                  reducing redundant API calls by about 35%.
                </p>
                <p>
                  I also handle what happens after the code is written — deploying and maintaining
                  apps on{" "}
                  <strong style={{ color: "var(--text-primary)" }}>AWS</strong> with Nginx, PM2,
                  and GitHub Actions CI/CD, as well as Vercel and Netlify. I use Claude Code and
                  Cursor to move faster, and review every line they generate for type safety and
                  maintainability, and test with Vitest, React Testing Library, and Playwright.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Years */}
          <FadeUp delay={0.1}>
            <div className="glass glow-card h-full rounded-2xl p-6 flex flex-col justify-between gap-6">
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Experience
              </span>
              <div>
                <p className="gradient-text text-6xl font-bold leading-none mb-2">5+</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  years building production web apps
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Current role */}
          <FadeUp delay={0.15}>
            <div className="glass glow-card h-full rounded-2xl p-6 flex flex-col justify-between gap-6">
              <span
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="pulse-dot" aria-hidden="true" />
                Availability
              </span>
              <div>
                <p
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Join immediately
                </p>
                <p className="text-sm" style={{ color: "var(--accent)" }}>
                  Remote · Ahmedabad · Pune · Bangalore · Hyderabad
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Facts row */}
          {facts.map(({ Icon, label, value }, index) => (
            <FadeUp key={label} delay={0.2 + index * 0.05}>
              <div className="glass glow-card h-full rounded-2xl p-6 flex items-start gap-4">
                <span className="icon-badge shrink-0" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
