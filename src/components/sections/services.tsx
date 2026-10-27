import { Activity, Gauge, Rocket, Network, ArrowRight } from "lucide-react";
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
    Icon: Activity,
    title: "Real-time dashboards & data apps",
    description:
      "Live operational dashboards, IoT monitoring tools, and booking systems built on WebSocket feeds and rich charting, with updates that stay smooth under heavy load.",
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
      "End-to-end React/Next.js development, from architecture and headless CMS setup through to deployment on AWS, Vercel, or Netlify. I take ideas to production-ready, scalable apps.",
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
              Focused, senior-level frontend help — whether you&apos;re building
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
