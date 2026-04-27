import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)" }}
      role="contentinfo"
    >
      <div className="container-main py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Monogram + copyright */}
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-sm font-bold"
            style={{ color: "var(--accent)" }}
          >
            DP
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 Darpan Patel. Built with Next.js.
          </span>
          <span
            className="font-mono text-xs px-1.5 py-0.5 rounded"
            style={{
              color: "var(--text-muted)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            v1.0
          </span>
        </div>

        {/* Right: Social links */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Darpan3089"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/darpan-patel-367610169/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="mailto:darpanpatel30899@gmail.com"
            aria-label="Send email"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
