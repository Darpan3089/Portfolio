import { FadeUp } from "@/components/motion-wrapper";

interface TechGroup {
  label: string;
  items: string[];
}

const techStack: TechGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Telegram Mini Apps",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "MySQL", "REST APIs", "Blockchain"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "ESLint"],
  },
];

export function TechSection() {
  return (
    <section
      id="tech"
      className="section-padding"
      aria-labelledby="tech-heading"
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
            Skills
          </p>
          <h2
            id="tech-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            My tech stack.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((group, groupIndex) => (
            <FadeUp key={group.label} delay={groupIndex * 0.1}>
              <div
                className="rounded-xl p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="font-mono text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ color: "var(--accent)" }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium transition-colors"
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
