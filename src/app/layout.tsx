import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { AuroraBackground } from "@/components/aurora-background";
import { PointerGlow } from "@/components/pointer-glow";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darpanpatel.dev"),
  title: {
    default: "Darpan Patel — Full-Stack Developer",
    template: "%s | Darpan Patel",
  },
  description:
    "Full-Stack Developer with 5+ years building healthcare and EdTech products end-to-end with React, Next.js, Node.js, and TypeScript — plus production AI features on the Claude API.",
  keywords: [
    "Full-Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "REST APIs",
    "Real-time Dashboards",
    "WebSocket",
    "React",
    "Next.js",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "TanStack Query",
    "Claude API",
    "AI Integrations",
    "Healthcare SaaS",
    "Darpan Patel",
    "Open to Work",
  ],
  authors: [{ name: "Darpan Patel" }],
  creator: "Darpan Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darpanpatel.dev",
    title: "Darpan Patel — Full-Stack Developer",
    description:
      "React, Next.js & Node.js developer with 5+ years shipping healthcare and EdTech products end-to-end, including AI report generation on the Claude API.",
    siteName: "Darpan Patel",
    // OG image is generated dynamically — see src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Patel — Full-Stack Developer",
    description:
      "React, Next.js & Node.js developer with 5+ years shipping healthcare and EdTech products end-to-end, including AI report generation on the Claude API.",
    // Twitter image is generated dynamically — see src/app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="darpan-theme"
        >
          <AuroraBackground />
          <PointerGlow />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
