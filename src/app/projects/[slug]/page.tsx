import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  approach: string;
  techDecisions: string;
  lessonsLearned: string;
}

const projects: Project[] = [
  {
    slug: "workflow-management-system",
    title: "Workflow Management System",
    description:
      "A full-stack side project with AI-assisted task management, time tracking, and team collaboration, built end-to-end.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    problem:
      "I wanted a single place for small teams to manage tasks, track time, and collaborate, without the overhead of heavier tools. It was also a chance to build a complete product on my own — frontend, API, and database — rather than one slice of it.",
    approach:
      "I built the whole stack myself. A React and Next.js frontend handles the task boards, time tracking, and team views; a Node.js API holds the business logic; and MongoDB stores the data. AI assistance helps draft and organise tasks, so capturing work is faster than filling in a form, while staying an optional layer rather than a core dependency.",
    techDecisions:
      "Next.js gave me server rendering and a single codebase for the UI and routing. MongoDB's flexible document model suited task and workflow data whose shape keeps changing as features grow. Keeping the API in Node.js with TypeScript meant one language across the stack and shared types between client and server.",
    lessonsLearned:
      "Owning every layer made the trade-offs clear — where to validate, what to cache, and how much state belongs on the server. Shipping a small but complete product end-to-end taught me more than building an isolated feature ever could.",
  },
  {
    slug: "core-health-physiotherapy",
    title: "Core Health Physiotherapy",
    description:
      "A full-stack clinic platform with patient-facing service and booking workflows and an admin panel, backed by an Express.js API and MySQL database behind a responsive Tailwind CSS frontend.",
    tags: ["React", "Express.js", "MySQL", "Redux", "Tailwind CSS"],
    liveUrl: "https://core-health-physiotherapy.vercel.app",
    problem:
      "The clinic needed patients to book online and staff to manage appointments and records in one place, instead of handling bookings by phone and keeping records by hand.",
    approach:
      "I built two sides to the platform: a patient-facing portal for services and booking, and an admin panel for staff to manage appointments and patient records. The frontend is React and Tailwind CSS, backed by an Express.js REST API and a MySQL database that handle the booking flow and records.",
    techDecisions:
      "MySQL fit the highly relational data — patients, appointments, and treatments — where referential integrity matters. Redux kept the admin scheduling state in sync across views. Tailwind CSS kept the UI responsive and consistent to build out quickly.",
    lessonsLearned:
      "In a clinic setting, clear states and confirmations matter — destructive actions like cancelling an appointment need a guard. Making the common path, a returning patient booking, fast while still handling the less common cases was the design decision that paid off most.",
  },
  {
    slug: "gas-flow-solution",
    title: "Gas Flow IoT Dashboard",
    description:
      "A real-time IoT monitoring dashboard streaming live gas-flow data from a Node.js WebSocket server to interactive Chart.js visualizations.",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Chart.js"],
    liveUrl: "https://gas-flow-solution.vercel.app",
    problem:
      "Gas-flow readings needed to be visible the moment they changed, not polled or exported to spreadsheets. Operators needed one live view of flow data across the system.",
    approach:
      "I built a responsive dashboard that streams live sensor data from a Node.js WebSocket server straight into interactive Chart.js visualizations, with reusable reporting components so new metrics are quick to add. The connection reconnects on drops so the view stays reliable.",
    techDecisions:
      "WebSockets over a Node.js server pushed updates to the client the moment data arrived, avoiding polling. Chart.js kept the visualizations lightweight and configurable. TypeScript kept the sensor data shapes type-safe from the socket layer through to the charts.",
    lessonsLearned:
      "Real-time UIs live or die on connection handling — the dashboard had to degrade gracefully and show its connection state clearly, not freeze on a dropped socket. Throttling incoming updates kept rendering smooth under a steady stream of data.",
  },
];

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container-main">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          <article className="max-w-3xl" aria-label={project.title}>
            {/* Header */}
            <header className="mb-10">
              <h1
                className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h1>
              <p className="text-base mb-5" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "var(--accent)" }}
                    aria-label={`Visit live site for ${project.title}`}
                  >
                    Live Site <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "var(--text-muted)" }}
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <GithubIcon aria-hidden="true" /> GitHub
                  </a>
                )}
              </div>

              <div
                className="mt-8 h-px"
                style={{ backgroundColor: "var(--border)" }}
              />
            </header>

            {/* Case study sections */}
            {[
              { label: "The Problem", content: project.problem },
              { label: "Approach", content: project.approach },
              { label: "Tech Decisions", content: project.techDecisions },
              { label: "Lessons Learned", content: project.lessonsLearned },
            ].map(({ label, content }) => (
              <section key={label} className="mb-10" aria-labelledby={`section-${label.replace(/\s+/g, "-").toLowerCase()}`}>
                <h2
                  id={`section-${label.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {label}
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {content}
                </p>
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
