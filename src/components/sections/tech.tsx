import { Code2, Sparkles, Server, Radio, Gauge, Cloud } from "lucide-react";
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
      "TypeScript",
      "JavaScript (ES6+)",
      "React 19",
      "Next.js (App Router, SSR/SSG/ISR)",
      "TanStack Query",
      "TanStack Table",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    Icon: Sparkles,
    label: "AI / LLM",
    items: [
      "Claude API (Anthropic SDK)",
      "Prompt Engineering",
      "Versioned Prompt Templates",
      "PII Masking",
      "Human-in-the-loop Review",
      "Token & Cost Tracking",
      "Claude Code",
      "Cursor",
    ],
  },
  {
    Icon: Server,
    label: "Backend, APIs & Databases",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API Design",
      "JWT Auth",
      "RBAC",
      "Swagger / OpenAPI",
      "Strapi (Headless CMS)",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma ORM",
      "SQL",
    ],
  },
  {
    Icon: Radio,
    label: "Real-Time & Visualization",
    items: ["WebSockets", "Socket.io", "Recharts", "Chart.js"],
  },
  {
    Icon: Gauge,
    label: "Testing & Quality",
    items: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Playwright (E2E)",
      "ESLint",
      "Web Vitals",
    ],
  },
  {
    Icon: Cloud,
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Route 53, CloudFront)",
      "Docker",
      "Nginx",
      "PM2",
      "Linux",
      "GitHub Actions CI/CD",
      "Vercel",
      "Netlify",
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
