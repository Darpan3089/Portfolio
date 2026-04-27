import { FadeUp } from "@/components/motion-wrapper";

const quickFacts = [
  { label: "Years of experience", value: "5+" },
  { label: "Projects shipped", value: "30+" },
  { label: "Tech focus", value: "React / TypeScript" },
  { label: "Current company", value: "Kode Creators" },
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
                I&apos;m Darpan, a Software Engineer based in{" "}
                <strong style={{ color: "var(--text-primary)" }}>Vadodara, Gujarat, India</strong>,
                with over{" "}
                <strong style={{ color: "var(--text-primary)" }}>5 years of experience</strong>{" "}
                building dynamic, data-driven applications. I specialize in React and TypeScript,
                focusing on creating optimized state management systems and scalable
                architectures.
              </p>
              <p>
                Currently, I am working with{" "}
                <strong style={{ color: "var(--text-primary)" }}>Kode Creators</strong>,
                where I structure scalable admin panel architectures and leverage AI-assisted
                tools to accelerate development while maintaining the highest standards of code
                quality. My expertise extends to building responsive interfaces and
                implementing role-based access control.
              </p>
              <p>
                Recently, I&apos;ve been expanding my technical toolkit to include blockchain
                development and Telegram Mini Apps, bringing decentralized solutions and
                innovative mobile web experiences to life. I believe great software is built
                at the intersection of technical depth and design sensibility.
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
