import { Activity, Sparkles, Rocket, Network, ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

interface Service {
  Icon: typeof Activity;
  title: string;
  description: string;
  fit: string;
}

const services: Service[] = [
  {
    Icon: Sparkles,
    title: "AI features you can trust",
    description:
      "LLM features on the Claude API that are safe to ship in regulated products: PII masking before data leaves the server, versioned prompts, human review before anything is saved, plus quotas, usage tracking, and audit logs.",
    fit: "Good fit if you want AI in your product without the risk.",
  },
  {
    Icon: Activity,
    title: "Real-time dashboards & data apps",
    description:
      "Live appointment, operations, and IoT dashboards built on WebSocket feeds and rich charting, replacing manual refresh with updates that stay smooth under load.",
    fit: "Good fit if your UI can't keep up with live data.",
  },
  {
    Icon: Network,
    title: "Frontend architecture & performance",
    description:
      "Shared component libraries, TanStack Query data fetching, and code splitting that keep shipping fast as the codebase grows. My last component library cut new-screen build time by about 40%.",
    fit: "Good fit if your frontend got slower or harder to change.",
  },
  {
    Icon: Rocket,
    title: "Full product builds",
    description:
      "End-to-end React/Next.js development with Node.js and Express APIs on MySQL or MongoDB, from schema design and RBAC to payments and deployment on AWS, Vercel, or Netlify.",
    fit: "Good fit if you need to go from zero to launched.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding"
      aria-labelledby="services-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title={
            <>
              How I can <span className="gradient-text">help</span>.
            </>
          }
          description={
            <>
              Focused, senior-level full-stack help — whether you&apos;re building
              from scratch, scaling, or fixing what&apos;s slow.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map(({ Icon, title, description, fit }, index) => (
            <FadeUp key={title} delay={index * 0.1}>
              <div className="glass glow-card h-full flex flex-col rounded-2xl p-7">
                <span className="icon-badge mb-5" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {description}
                </p>
                <p
                  className="flex items-center gap-2 text-sm font-medium pt-4 border-t"
                  style={{ color: "var(--accent)", borderColor: "var(--glass-border)" }}
                >
                  <ArrowRight size={14} aria-hidden="true" />
                  {fit}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
