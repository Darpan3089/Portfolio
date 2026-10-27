import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

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
        <SectionHeading
          id="process-heading"
          eyebrow="Process"
          title={
            <>
              How we&apos;ll work <span className="gradient-text">together</span>.
            </>
          }
        />

        <ol className="relative grid sm:grid-cols-3 gap-4" role="list">
          {steps.map(({ title, description }, index) => (
            <FadeUp key={title} delay={index * 0.1} className="h-full">
              <li className="glass glow-card h-full flex flex-col rounded-2xl p-7">
                <span
                  className="gradient-text font-mono text-4xl font-bold mb-5 leading-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-lg font-bold mb-2"
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
