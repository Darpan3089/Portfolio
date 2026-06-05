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
      "An internal tool for enterprise teams to orchestrate complex workflows, task dependencies, and automated notifications.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    problem:
      "The client's team was managing complex, multi-stage workflows using spreadsheets and Slack messages. Tasks fell through the cracks, deadlines were missed, and there was no visibility into overall project progress. They needed a centralized tool that reflected how their unique business processes actually worked.",
    approach:
      "I started with a discovery phase — two weeks of user interviews with project managers and team leads to understand their actual workflows. Instead of fitting them into a generic kanban board, I built a flexible dependency graph system where tasks could have multiple parents and children. The UI was designed around 'stages' rather than statuses, matching their mental model exactly. I used Next.js App Router for server-side rendering of the workflow graphs, which made sharing workflow links (with full context) trivial.",
    techDecisions:
      "Chose MongoDB for the flexible document schema that suited workflow graph data far better than a rigid SQL structure. Used Socket.io for real-time updates so team members see changes instantly without polling. State management was kept purposefully local — most workflow state lives on the server, streamed to clients, avoiding the complexity of a global client store. TypeScript strict mode caught several data shape mismatches during development that would have been runtime bugs in production.",
    lessonsLearned:
      "Domain modeling beats generic solutions. The biggest win was spending time understanding the client's business processes before writing a line of code — the resulting mental model shaped the data structures and UI patterns in ways that a generic project management tool never could. Also, real-time features should be designed as progressive enhancements, not core requirements — the app worked perfectly with server-rendered data when WebSocket connections dropped.",
  },
  {
    slug: "core-health-physiotherapy",
    title: "Core Health Physiotherapy",
    description:
      "A full-stack patient management and online booking platform for a physiotherapy clinic chain.",
    tags: ["React", "Express.js", "MySQL", "Tailwind CSS", "Redux", "Stripe"],
    problem:
      "The clinic was using paper-based patient records and phone-only appointment booking. This created bottlenecks at reception, led to scheduling errors, and made patient history difficult to access during appointments. The solution needed to be simple enough for clinic staff with minimal technical literacy while powerful enough to handle a growing patient database.",
    approach:
      "Built a two-interface system: a patient-facing booking portal (simple, mobile-first, minimal friction) and a staff dashboard for managing appointments, patient records, and billing. The booking flow required zero account creation for first-time patients — we used phone number verification instead, reducing drop-off dramatically. The staff dashboard used a classic calendar view augmented with quick-action shortcuts for the most common tasks.",
    techDecisions:
      "MySQL was the right choice here — patient data is highly relational (patients → appointments → treatments → billing), and the referential integrity guarantees matter in a healthcare context. Redux managed the complex scheduling state in the staff dashboard where multiple calendars needed to stay in sync. Stripe handled payments with their client-side Elements for PCI compliance without us touching card data.",
    lessonsLearned:
      "Healthcare software requires extra attention to privacy and error states. Every destructive action (cancelling appointments, archiving records) needed a confirmation step and an audit log. The most valuable design decision was making the 'quick book' flow for returning patients a single screen — the 80% case should be fast, even if the 20% case (new patients) takes longer.",
  },
  {
    slug: "gas-flow-solution",
    title: "Gas Flow Solution",
    description:
      "Industrial IoT dashboard for monitoring gas flow metrics in real-time with alerting and historical reporting.",
    tags: ["React", "TypeScript", "Chart.js", "WebSockets", "Node.js", "InfluxDB"],
    problem:
      "An industrial gas distribution company needed real-time visibility into flow rates, pressure readings, and valve states across multiple monitoring stations. Alert conditions were being missed because operators had to check multiple disconnected systems. Historical data was stored in spreadsheets, making trend analysis impossible.",
    approach:
      "Built a single unified dashboard that aggregated data from all monitoring stations into one view with a configurable alerting system. Used WebSockets for real-time data streaming with an exponential backoff reconnection strategy for resilience. Alerts were designed as a layered system — visual, audio (opt-in), and email notifications — so operators could configure their preferred channels. Historical analysis was powered by time-series charts with selectable time windows.",
    techDecisions:
      "InfluxDB was chosen for time-series storage because it's built for exactly this use case — efficient storage and querying of timestamped metrics data. Chart.js for visualization because it's lightweight and highly configurable, allowing custom rendering for alert thresholds. TypeScript strict mode was especially valuable here — sensor data types were complex and nested, and type safety prevented several bugs around unit conversions.",
    lessonsLearned:
      "Industrial software has a different performance profile than typical web apps. The data volume (readings every 100ms from 50+ stations) required careful throttling and batching strategies to avoid overwhelming the browser. Also learned to always design for connection failures first — in industrial environments, network reliability is not guaranteed, and the dashboard needed to degrade gracefully and clearly communicate its connection state.",
  },
  {
    slug: "personal-saas-project",
    title: "SaaS Productivity Tool",
    description:
      "A personal side project — lightweight SaaS with AI-assisted task management and time tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "OpenAI", "Vercel"],
    problem:
      "Existing productivity tools are either too complex (Notion, Jira) or too simple (basic to-do apps). I wanted to build something that balanced structure with flexibility, specifically for solo developers and small teams who needed project tracking without the overhead.",
    approach:
      "Designed around a 'capture first' philosophy — the fastest path from thought to task is the priority. Built a unified input that intelligently routes entries to the right place based on content. AI assistance is used for auto-tagging, priority suggestions, and generating daily summaries, not as a core dependency. Time tracking is ambient — starts automatically when you open a task, stops when you navigate away.",
    techDecisions:
      "Next.js App Router with server actions for mutations, eliminating the need for a separate API layer for most operations. Prisma with PostgreSQL for type-safe database access. OpenAI API with streaming responses for the AI features, so users see output immediately. Deployed to Vercel with their Postgres integration for zero infrastructure management.",
    lessonsLearned:
      "Building for yourself first is the best product research. Dogfooding this tool daily revealed pain points within days that I never would have caught in user testing. The biggest technical lesson: server actions simplify data mutations dramatically, but you still need careful optimistic UI updates to make the experience feel instant.",
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
                    className="text-xs px-2 py-0.5 rounded font-mono"
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
