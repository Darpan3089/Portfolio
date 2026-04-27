import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "optimizing-react-rerenders-patterns-learned-in-production",
    title: "Optimizing React Re-renders: Patterns I Learned in Production",
    description:
      "After 4 years of shipping React applications, I've collected battle-tested patterns for eliminating unnecessary re-renders.",
    publishDate: "2026-04-15",
    readingTime: "8 min read",
    tags: ["React", "Performance", "TypeScript"],
    content: `
React's reconciliation algorithm is incredibly efficient — but it can still be tripped up by common anti-patterns that cause components to re-render when they don't need to. Over 4 years of shipping production React applications, I've learned (sometimes the hard way) which patterns actually matter.

## Why Re-renders Matter

Every re-render runs your component function again: JSX is evaluated, virtual DOM diffed, and in some cases, real DOM mutations happen. For most components, this is fine. But in complex UIs — data tables, dashboards, drag-and-drop interfaces — unnecessary re-renders add up.

The goal isn't zero re-renders. It's *intentional* re-renders.

## Pattern 1: State Co-location

The most underused optimization: move state as close to where it's needed as possible.

\`\`\`tsx
// ❌ State too high — every child re-renders on hover
function ProductPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <ProductGrid 
      hoveredId={hoveredId} 
      onHover={setHoveredId} 
    />
  );
}

// ✅ State co-located — only the hovered item re-renders
function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* ... */}
    </div>
  );
}
\`\`\`

## Pattern 2: Referential Stability with useCallback

Functions are recreated on every render. If you pass them as props to memoized children, those children re-render anyway.

\`\`\`tsx
// ❌ New function reference on every render
function ParentComponent() {
  const handleDelete = (id: string) => {
    // ...
  };
  return <ChildList onDelete={handleDelete} />;
}

// ✅ Stable reference
function ParentComponent() {
  const handleDelete = useCallback((id: string) => {
    // ...
  }, []); // Add deps as needed
  return <ChildList onDelete={handleDelete} />;
}
\`\`\`

## Pattern 3: useMemo for Expensive Computations

Only memoize when the computation is genuinely expensive. The memo itself has a cost.

\`\`\`tsx
// ✅ Memoize heavy transformations
const processedData = useMemo(() => {
  return rawData
    .filter(item => item.active)
    .sort((a, b) => b.date - a.date)
    .slice(0, 100);
}, [rawData]);
\`\`\`

## Pattern 4: Avoid Object and Array Literals in JSX

New object/array literals are created on every render, breaking memoization.

\`\`\`tsx
// ❌ New array every render
<Component style={{ color: 'red', padding: 16 }} />

// ✅ Define outside the component
const STYLE = { color: 'red', padding: 16 };
function MyComponent() {
  return <Component style={STYLE} />;
}
\`\`\`

## Pattern 5: Zustand Selectors Over Full Store Subscriptions

If you're using Zustand (or Redux), selecting only what you need prevents re-renders when unrelated state changes.

\`\`\`typescript
// ❌ Re-renders on any store change
const store = useStore();

// ✅ Only re-renders when user.name changes
const userName = useStore((state) => state.user.name);
\`\`\`

## When NOT to Optimize

- Don't add \`useMemo\`/\`useCallback\` everywhere preemptively
- Profile first with React DevTools Profiler
- Premature optimization is still the root of all evil

The patterns above should be applied surgically, after identifying actual bottlenecks. Ship it right, then make it fast.
    `,
  },
];

function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
      authors: ["Darpan Patel"],
      tags: post.tags,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container-main">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          <article className="reading-width mx-auto" aria-label={post.title}>
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Calendar size={12} aria-hidden="true" />
                  {formatDate(post.publishDate)}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Clock size={12} aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>

              <h1
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {post.title}
              </h1>
              <p className="text-base" style={{ color: "var(--text-muted)" }}>
                {post.description}
              </p>

              <div className="flex gap-2 mt-4">
                {post.tags.map((tag) => (
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

              <div
                className="mt-6 h-px"
                style={{ backgroundColor: "var(--border)" }}
              />
            </header>

            {/* Content — rendered as formatted text */}
            <div
              className="prose-custom text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {post.content.trim().split(/\n\n+/).map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-xl font-bold mt-10 mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("```")) {
                  const code = block.replace(/^```\w*\n/, "").replace(/```$/, "");
                  return (
                    <pre
                      key={i}
                      className="rounded-xl p-5 overflow-x-auto text-sm my-6 font-mono"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (block.startsWith("- ") || block.startsWith("✅") || block.startsWith("❌")) {
                  return (
                    <p key={i} className="my-3" style={{ color: "var(--text-muted)" }}>
                      {block}
                    </p>
                  );
                }
                return (
                  <p key={i} className="my-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {block}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
