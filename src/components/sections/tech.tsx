import { Code2, Database, Radio, Gauge, Cloud, Wrench } from "lucide-react";
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
    label: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js (SSR/SSG/ISR)",
      "Node.js",
      "Express.js",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    Icon: Database,
    label: "State, Data & APIs",
    items: [
      "Redux Toolkit",
      "TanStack Query",
      "SWR",
      "Context API",
      "React Hook Form",
      "REST APIs",
      "Authentication",
      "RBAC",
      "Swagger / OpenAPI",
    ],
  },
  {
    Icon: Radio,
    label: "UI & Real-Time",
    items: [
      "Tailwind CSS",
      "Headless UI",
      "Framer Motion",
      "WebSockets",
      "Socket.io",
      "Chart.js",
      "TradingView",
    ],
  },
  {
    Icon: Gauge,
    label: "Performance & Quality",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Caching",
      "Web Vitals",
      "SEO",
      "React Testing Library",
      "Unit & Integration Testing",
    ],
  },
  {
    Icon: Cloud,
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, Route 53, CloudFront)",
      "Nginx",
      "Apache",
      "PM2",
      "Linux",
      "GitHub Actions CI/CD",
      "Vercel",
      "Netlify",
    ],
  },
  {
    Icon: Wrench,
    label: "Databases, Tools & AI",
    items: [
      "MySQL",
      "MongoDB",
      "Strapi CMS",
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "Agile / Scrum",
      "Claude Code",
      "Cursor",
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
