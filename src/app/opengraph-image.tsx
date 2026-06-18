import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Darpan Patel — Freelance React & Next.js Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens mirrored from globals.css (dark theme)
const BG = "#0a0a0a";
const SURFACE = "#111111";
const BORDER = "#1f1f1f";
const TEXT = "#ededed";
const MUTED = "#888888";
const ACCENT = "#3b82f6";

// Dynamically generated Open Graph image (statically optimized at build time).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: BG,
          backgroundImage: `radial-gradient(circle at 0 0, rgba(59,130,246,0.18), transparent 45%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row — monogram + availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 4,
              color: ACCENT,
            }}
          >
            DP
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 20px",
              borderRadius: 999,
              backgroundColor: SURFACE,
              border: `1px solid ${BORDER}`,
              fontSize: 22,
              color: MUTED,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#10b981",
              }}
            />
            Booking freelance projects
          </div>
        </div>

        {/* Center — name + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              color: TEXT,
              lineHeight: 1.05,
            }}
          >
            Darpan Patel
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              color: ACCENT,
              marginTop: 8,
            }}
          >
            Freelance React & Next.js Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: MUTED,
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            Fast, real-time React apps that don&apos;t break under pressure —
            dashboards, performance audits & full builds.
          </div>
        </div>

        {/* Bottom row — domain + stack */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex" }}>darpanpatel.dev</div>
          <div style={{ display: "flex", gap: 12 }}>
            {["React", "Next.js", "TypeScript"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "6px 16px",
                  borderRadius: 8,
                  backgroundColor: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: ACCENT,
                  fontSize: 22,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
