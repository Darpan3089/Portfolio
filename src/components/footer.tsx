import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer role="contentinfo">
      <div className="glow-divider" aria-hidden="true" />
      <div className="container-main py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Monogram + copyright */}
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-lg font-mono text-[10px] font-bold text-white"
            style={{ background: "var(--btn-gradient)" }}
          >
            DP
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2026 Darpan Patel.
          </span>
          {/* <span
            className="font-mono text-xs px-1.5 py-0.5 rounded"
            style={{
              color: "var(--text-muted)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            v1.0
          </span> */}
        </div>

        {/* Right: Resume + social links */}
        <div className="flex items-center gap-4">
          <Link
            href="/Darpan_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            Resume
          </Link>
          <span
            aria-hidden="true"
            className="h-3 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />
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
