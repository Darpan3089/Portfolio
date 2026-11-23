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
    default: "Darpan Patel — Senior Frontend Developer",
    template: "%s | Darpan Patel",
  },
  description:
    "Senior Frontend Developer with 5+ years building healthcare SaaS, ERP, and business products with React, Next.js, and TypeScript — plus AI features on the Claude API. Available to join immediately.",
  keywords: [
    "Senior Frontend Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Real-time Dashboards",
    "WebSocket",
    "Frontend Performance Optimization",
    "React",
    "Next.js",
    "TypeScript",
    "TanStack Query",
    "Claude API",
    "AI Integrations",
    "Healthcare SaaS",
    "Node.js",
    "Darpan Patel",
    "Open to Work",
  ],
  authors: [{ name: "Darpan Patel" }],
  creator: "Darpan Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darpanpatel.dev",
    title: "Darpan Patel — Senior Frontend Developer",
    description:
      "React, Next.js & TypeScript developer with 5+ years on healthcare SaaS and real-time products, including AI report generation on the Claude API. Available immediately.",
    siteName: "Darpan Patel",
    // OG image is generated dynamically — see src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Patel — Senior Frontend Developer",
    description:
      "React, Next.js & TypeScript developer with 5+ years on healthcare SaaS and real-time products, including AI report generation on the Claude API. Available immediately.",
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
