import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/motion-wrapper";
import { GithubIcon } from "@/components/icons";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    slug: "workflow-management-system",
    title: "Workflow Management System",
    description:
      "An internal tool for enterprise teams to orchestrate complex workflows, task dependencies, and automated notifications — reducing manual overhead by 60%.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    slug: "core-health-physiotherapy",
    title: "Core Health Physiotherapy",
    description:
      "A full-stack patient management and booking platform for physiotherapy clinics with real-time appointment scheduling, patient records, and billing.",
    tags: ["React", "Express.js", "MySQL", "Tailwind CSS", "Redux"],
    featured: true,
  },
  {
    slug: "gas-flow-solution",
    title: "Gas Flow Solution",
    description:
      "Industrial IoT dashboard for monitoring gas flow metrics in real-time. Features live data visualization, alerting thresholds, and historical reporting.",
    tags: ["React", "TypeScript", "Chart.js", "WebSockets", "Node.js"],
    featured: true,
  },
  {
    slug: "personal-saas-project",
    title: "SaaS Productivity Tool",
    description:
      "A personal side project — a lightweight SaaS productivity tool with AI-assisted task management, time tracking, and team collaboration features.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex flex-col rounded-xl overflow-hidden card-hover"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top accent bar */}
      <div
        className="h-px w-full transition-all duration-300 group-hover:h-0.5"
        style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
      />

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-medium font-mono"
              style={{
                background: "rgba(59,130,246,0.08)",
                color: "var(--accent)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
            aria-label={`View case study for ${project.title}`}
          >
            Case Study
            <ArrowUpRight size={13} />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
              aria-label={`Visit live site for ${project.title}`}
            >
              Live
              <ArrowUpRight size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto transition-opacity hover:opacity-60"
              style={{ color: "var(--text-muted)" }}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: "var(--surface)" }}
      aria-labelledby="projects-heading"
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
            Projects
          </p>
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Selected work.
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <FadeUp key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
