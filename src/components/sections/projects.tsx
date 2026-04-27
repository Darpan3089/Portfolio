"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";
import { StaggerContainer, fadeUpVariants } from "@/components/motion-wrapper";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
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
    image: "/projects/workflow.png",
    featured: true,
  },
  {
    slug: "core-health-physiotherapy",
    title: "Core Health Physiotherapy",
    description:
      "A full-stack patient management and booking platform for physiotherapy clinics with real-time appointment scheduling, patient records, and billing.",
    tags: ["React", "Express.js", "MySQL", "Tailwind CSS", "Redux"],
    image: "/projects/physio.png",
    featured: true,
  },
  {
    slug: "gas-flow-solution",
    title: "Gas Flow Solution",
    description:
      "Industrial IoT dashboard for monitoring gas flow metrics in real-time. Features live data visualization, alerting thresholds, and historical reporting.",
    tags: ["React", "TypeScript", "Chart.js", "WebSockets", "Node.js"],
    image: "/projects/gasflow.png",
    featured: true,
  },
  {
    slug: "personal-saas-project",
    title: "SaaS Productivity Tool",
    description:
      "A personal side project — a lightweight SaaS productivity tool with AI-assisted task management, time tracking, and team collaboration features.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    image: "/projects/saas.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUpVariants}
      className="group relative flex flex-col rounded-xl overflow-hidden"
      style={{
        background: "var(--surface-elevated)",
        border: "1px solid var(--border)",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Project image with overlay */}
      {project.image && (
        <div className="relative h-44 overflow-hidden bg-(--border)">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 530px"
          />
          {/* Overlay — appears on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{ background: "var(--accent)" }}
              onClick={(e) => e.stopPropagation()}
            >
              Case Study ↗
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/30 transition-transform duration-200 hover:scale-105 active:scale-95"
                onClick={(e) => e.stopPropagation()}
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Featured badge */}
        {project.featured && (
          <span
            className="self-start mb-2 px-2 py-0.5 rounded text-xs font-mono font-medium"
            style={{
              background: "rgba(59,130,246,0.1)",
              color: "var(--accent)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            Featured
          </span>
        )}

        <h3
          className="text-base font-bold mb-2 transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono"
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

        {/* Footer links */}
        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
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
              className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-70"
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
    </motion.article>
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
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
        </motion.div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
