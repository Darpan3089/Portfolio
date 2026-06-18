import { Activity, Gauge, Rocket, Network } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";

interface Service {
  Icon: typeof Activity;
  title: string;
  description: string;
  fit: string;
}

const services: Service[] = [
  {
    Icon: Activity,
    title: "Real-time dashboards & data apps",
    description:
      "Live dashboards, trading interfaces, and monitoring tools built on WebSocket feeds and rich charting, with sub-second updates that stay smooth under heavy load.",
    fit: "Good fit if your UI can't keep up with live data.",
  },
  {
    Icon: Gauge,
    title: "Performance audits & optimization",
    description:
      "A deep diagnosis of your React/Next.js app (bundle size, render bottlenecks, caching, Core Web Vitals) followed by the fixes. Faster loads, fewer re-renders, happier users.",
    fit: "Good fit if your app got slower as it grew.",
  },
  {
    Icon: Rocket,
    title: "Full product builds",
    description:
      "End-to-end React/Next.js development, from architecture and design system through to deployment. I take ideas to production-ready, scalable apps.",
    fit: "Good fit if you need to go from zero to launched.",
  },
  {
    Icon: Network,
    title: "Frontend architecture & scaling",
    description:
      "Component libraries, state management, and code conventions that scale across a growing team, so shipping stays fast as the codebase grows.",
    fit: "Good fit if your frontend is getting hard to maintain.",
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
        <FadeUp>
          <p
            className="font-mono text-xs mb-3 flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Services
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            How I can help.
          </h2>
          <p
            className="text-base mb-12 max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            Focused, senior-level frontend help — whether you&apos;re building
            from scratch, scaling, or fixing what&apos;s slow.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(({ Icon, title, description, fit }, index) => (
            <FadeUp key={title} delay={index * 0.1}>
              <div
                className="h-full rounded-xl p-6 card-hover"
                style={{
                  background: "var(--surface-elevated)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {description}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
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
