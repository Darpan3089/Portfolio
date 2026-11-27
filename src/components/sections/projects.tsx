"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";
import { StaggerContainer, fadeUpVariants } from "@/components/motion-wrapper";
import { SectionHeading } from "@/components/section-heading";

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
      "A full-stack side project with AI-assisted task management, time tracking, and team collaboration — I built the frontend, APIs, and database layer end-to-end.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    image: "/projects/workflow.png",
    featured: true,
  },
  {
    slug: "core-health-physiotherapy",
    title: "Core Health Physiotherapy",
    description:
      "A full-stack clinic platform with patient-facing service and booking workflows and an admin panel, backed by an Express.js API and MySQL database behind a responsive Tailwind CSS frontend.",
    tags: ["React", "Express.js", "MySQL", "Tailwind CSS", "Redux"],
    image: "/projects/physio.png",
    liveUrl: "https://core-health-physiotherapy.vercel.app",
    featured: true,
  },
  {
    slug: "gas-flow-solution",
    title: "Gas Flow IoT Dashboard",
    description:
      "A real-time IoT monitoring dashboard streaming live gas-flow data from a Node.js WebSocket server to interactive Chart.js visualizations.",
    tags: ["React", "TypeScript", "Chart.js", "WebSockets", "Node.js"],
    image: "/projects/gasflow.png",
    liveUrl: "https://gas-flow-solution.vercel.app",
    featured: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUpVariants}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
      className="glass glow-card group flex flex-col rounded-2xl overflow-hidden"
      aria-label={`Project: ${project.title}`}
    >
      {/* Project image with overlay */}
      {project.image && (
        <div className="relative h-52 overflow-hidden m-2 mb-0 rounded-xl bg-(--surface-elevated)">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 530px"
          />
          {/* Bottom fade into card */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(var(--bg-rgb), 0.55), transparent)",
            }}
          />
          {/* Overlay — appears on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            style={{ background: "rgba(7,7,13,0.55)" }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="btn-primary py-2! px-4! text-xs!"
            >
              Case Study <ArrowUpRight size={13} />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/30 bg-white/10 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Live Site <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Featured badge */}
        {project.featured && (
          <span className="tag self-start mb-3">Featured</span>
        )}

        <h3
          className="text-lg font-bold mb-2"
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
            <span key={tag} className="chip py-0.5! px-2.5!">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div
          className="flex items-center gap-4 pt-4 border-t"
          style={{ borderColor: "var(--glass-border)" }}
        >
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
      aria-labelledby="projects-heading"
    >
      <div className="container-main">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title={
            <>
              Selected <span className="gradient-text">work</span>.
            </>
          }
        />

        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
