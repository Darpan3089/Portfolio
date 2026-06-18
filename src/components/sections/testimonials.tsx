import { Quote } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";

/*
 * ⚠️ PLACEHOLDER CONTENT — replace before launch.
 * These are intentionally empty scaffolds, NOT real testimonials.
 * Swap each `quote`, `name`, and `role` with a real client quote you have
 * permission to publish. Delete this section entirely if you have no quotes
 * yet rather than shipping the placeholders live.
 */
interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "[Client quote goes here]",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    quote: "[Client quote goes here]",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    quote: "[Client quote goes here]",
    name: "[Name]",
    role: "[Role, Company]",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-labelledby="testimonials-heading"
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
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            What clients say.
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              {/* PLACEHOLDER testimonial card — replace text above in `testimonials` */}
              <figure
                className="h-full flex flex-col rounded-xl p-6"
                style={{
                  background: "var(--surface-elevated)",
                  border: "1px dashed var(--border)",
                }}
              >
                <Quote
                  size={20}
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                  aria-hidden="true"
                />
                <blockquote
                  className="text-sm leading-relaxed my-4 flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="flex flex-col gap-0.5">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
