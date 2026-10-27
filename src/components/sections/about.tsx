import { Layers, Code2, MapPin } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

const facts = [
  { Icon: Layers, label: "Domains", value: "Healthcare · Education · Business" },
  { Icon: Code2, label: "Tech focus", value: "React / Next.js / TypeScript" },
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
                  building scalable web applications across healthcare, education, and business
                  platforms. I specialize in React, Next.js, TypeScript, and Node.js, with a focus
                  on frontend architecture, performance optimization, real-time applications, and
                  REST API integration.
                </p>
                <p>
                  Currently at{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Kode Creators</strong>, I own
                  frontend development of healthcare booking, patient management, billing, and POS
                  platforms. I built a headless{" "}
                  <strong style={{ color: "var(--text-primary)" }}>Strapi CMS</strong> that lets
                  the team update site content with no developer involvement, added live dashboards
                  over WebSockets, and migrated data fetching from SWR to{" "}
                  <strong style={{ color: "var(--text-primary)" }}>TanStack Query</strong> for
                  caching, deduplication, and optimistic updates.
                </p>
                <p>
                  I also handle what happens after the code is written — deploying and maintaining
                  apps on{" "}
                  <strong style={{ color: "var(--text-primary)" }}>AWS</strong> with Nginx, PM2,
                  and GitHub Actions CI/CD, as well as Vercel and Netlify. I use Claude Code and
                  Cursor to move faster, and review every line they generate for type safety and
                  maintainability.
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
                Current role
              </span>
              <div>
                <p
                  className="text-xl font-bold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Frontend Developer
                </p>
                <p className="text-sm" style={{ color: "var(--accent)" }}>
                  @ Kode Creators
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
