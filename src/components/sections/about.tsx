import { FadeUp } from "@/components/motion-wrapper";

const quickFacts = [
  { label: "Years of experience", value: "5+" },
  { label: "Domains", value: "Healthcare · Education · Business" },
  { label: "Tech focus", value: "React / Next.js / TypeScript" },
  { label: "Current role", value: "Frontend Developer @ Kode Creators" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
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
            About
          </p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            A developer who cares about the craft.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16">
          {/* Bio */}
          <FadeUp delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
          </FadeUp>

          {/* Quick facts */}
          <FadeUp delay={0.2}>
            <div
              className="rounded-xl p-6 space-y-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-mono text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                Quick Facts
              </p>
              {quickFacts.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </span>
                  <div
                    className="mt-2 h-px"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
