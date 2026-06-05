import { FadeUp } from "@/components/motion-wrapper";

const quickFacts = [
  { label: "Years of experience", value: "5+" },
  { label: "Domains", value: "Healthcare · Fintech · IoT" },
  { label: "Tech focus", value: "React / Next.js / TypeScript" },
  { label: "Current role", value: "Software Engineer @ Kode Creators" },
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
                I&apos;m Darpan, a Frontend-focused Full Stack Developer based in{" "}
                <strong style={{ color: "var(--text-primary)" }}>Vadodara, Gujarat, India</strong>,
                with over{" "}
                <strong style={{ color: "var(--text-primary)" }}>5 years of experience</strong>{" "}
                building real-time, performance-optimized applications across healthcare,
                fintech/blockchain, IoT, and EdTech. I specialize in React, Next.js, and
                TypeScript, with a focus on optimized state management and component systems
                that scale across teams.
              </p>
              <p>
                Currently at{" "}
                <strong style={{ color: "var(--text-primary)" }}>Kode Creators</strong>, I lead
                frontend development of healthcare booking and practice-management platforms,
                architect scalable admin panels with role-based access control, and recently
                migrated server-state management to{" "}
                <strong style={{ color: "var(--text-primary)" }}>TanStack React Query</strong>{" "}
                for smarter caching and optimistic updates. I lean on AI-assisted tooling to
                accelerate delivery without compromising code quality.
              </p>
              <p>
                Along the way I&apos;ve cut page load times by{" "}
                <strong style={{ color: "var(--text-primary)" }}>~30%</strong>, reduced manual
                workflow overhead by{" "}
                <strong style={{ color: "var(--text-primary)" }}>60%</strong>, and built reusable
                component systems adopted across engineering teams. My recent work spans
                blockchain dApps, Telegram Mini Apps, and AI-assisted development tooling — and I
                believe great software is built at the intersection of technical depth and design
                sensibility.
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
