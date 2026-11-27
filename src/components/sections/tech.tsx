import { Code2, Sparkles, Server, RefreshCw, Gauge, Cloud } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

interface TechGroup {
  Icon: typeof Code2;
  label: string;
  items: string[];
}

const techStack: TechGroup[] = [
  {
    Icon: Code2,
    label: "Frontend",
    items: [
      "React.js",
      "Next.js (SSR/SSG/ISR)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Chart.js",
      "TradingView",
      "Design Systems",
      "Component-driven Architecture",
      "Angular (working knowledge)",
    ],
  },
  {
    Icon: Server,
    label: "Backend, APIs & Databases",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSockets (Socket.io)",
      "Strapi (Headless CMS)",
      "Auth & RBAC",
      "Swagger / OpenAPI",
      "Payment Gateway Integration",
      "MySQL",
      "MongoDB",
      "Schema Design",
      "Query Optimisation",
    ],
  },
  {
    Icon: RefreshCw,
    label: "State & Data Fetching",
    items: [
      "TanStack Query",
      "Redux Toolkit",
      "SWR",
      "Context API",
      "Caching & Optimistic Updates",
    ],
  },
  {
    Icon: Sparkles,
    label: "AI & Automation",
    items: [
      "Claude API",
      "LLM Integration",
      "Prompt Templates",
      "PII Masking",
      "Human-in-the-loop Review",
      "Claude Code",
      "Cursor",
      "GitHub Actions CI/CD",
    ],
  },
  {
    Icon: Gauge,
    label: "Performance & QA",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Memoisation",
      "Core Web Vitals",
      "SEO",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Code Reviews",
      "Strict TypeScript",
    ],
  },
  {
    Icon: Cloud,
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, Route 53, CloudFront)",
      "Nginx / Apache",
      "PM2",
      "Vercel",
      "Netlify",
      "Hostinger",
      "Git / GitHub",
      "Postman",
      "Agile / Scrum",
    ],
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
        <SectionHeading
          id="tech-heading"
          eyebrow="Skills"
          title={
            <>
              My tech <span className="gradient-text">stack</span>.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map(({ Icon, label, items }, groupIndex) => (
            <FadeUp key={label} delay={groupIndex * 0.08}>
              <div className="glass glow-card h-full rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="icon-badge" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <h3
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="chip">
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
