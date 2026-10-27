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
    default: "Darpan Patel — React & Next.js Engineer",
    template: "%s | Darpan Patel",
  },
  description:
    "React & Next.js engineer with 5+ years building fast, real-time, scalable web apps for healthcare, education, and business teams. Open to full-time frontend roles.",
  keywords: [
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
    "Strapi CMS",
    "Darpan Patel",
    "Senior Frontend Engineer",
    "Open to Work",
  ],
  authors: [{ name: "Darpan Patel" }],
  creator: "Darpan Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darpanpatel.dev",
    title: "Darpan Patel — React & Next.js Engineer",
    description:
      "Fast, real-time React apps that don't break under pressure. Frontend engineer with 5+ years on data-heavy products, open to full-time roles.",
    siteName: "Darpan Patel",
    // OG image is generated dynamically — see src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Patel — React & Next.js Engineer",
    description:
      "Fast, real-time React apps that don't break under pressure. Frontend engineer with 5+ years on data-heavy products, open to full-time roles.",
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
