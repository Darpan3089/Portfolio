import { FadeUp } from "@/components/motion-wrapper";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Free consult",
    description:
      "We talk through your problem and goals (20–30 min, no obligation).",
  },
  {
    title: "Scope & proposal",
    description: "I send a clear plan, timeline, and pricing.",
  },
  {
    title: "Build & ship",
    description:
      "Regular updates, a clean handoff, and support after launch.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="section-padding"
      aria-labelledby="process-heading"
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
            Process
          </p>
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            How we&apos;ll work together.
          </h2>
        </FadeUp>

        <ol className="grid sm:grid-cols-3 gap-5" role="list">
          {steps.map(({ title, description }, index) => (
            <FadeUp key={title} delay={index * 0.1} className="h-full">
              <li
                className="h-full flex flex-col rounded-xl p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="font-mono text-sm font-bold mb-4"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {description}
                </p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
