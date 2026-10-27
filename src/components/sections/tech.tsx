import { FadeUp } from "@/components/motion-wrapper";

interface TechGroup {
  label: string;
  items: string[];
}

const techStack: TechGroup[] = [
  {
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
