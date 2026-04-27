import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on React, TypeScript, performance, and the modern web development ecosystem by Darpan Patel.",
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readingTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "optimizing-react-rerenders-patterns-learned-in-production",
    title: "Optimizing React Re-renders: Patterns I Learned in Production",
    description:
      "After 4 years of shipping React applications, I've collected battle-tested patterns for eliminating unnecessary re-renders — from memo strategies to state co-location and selector patterns.",
    publishDate: "2026-04-15",
    readingTime: "8 min read",
    tags: ["React", "Performance", "TypeScript"],
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container-main">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-60"
              style={{ color: "var(--text-muted)" }}
            >
              <ArrowLeft size={14} />
              Back home
            </Link>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Blog
            </h1>
            <p className="text-base" style={{ color: "var(--text-muted)" }}>
              Writing about frontend development, performance, and the tools I
              find useful.
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl p-6 card-hover"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                aria-label={post.title}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2
                    className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4">
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
                    <div className="flex items-center gap-1.5">
                      <Tag size={12} style={{ color: "var(--text-muted)" }} aria-hidden="true" />
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
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
