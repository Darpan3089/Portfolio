import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darpanpatel.dev"),
  title: {
    default: "Darpan Patel — Frontend / Full Stack Developer",
    template: "%s | Darpan Patel",
  },
  description:
    "Frontend-focused Full Stack Developer with 5+ years of experience building fast, scalable, and performance-optimized web applications with React, Next.js, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Darpan Patel",
    "Vadodara",
    "Web Developer",
  ],
  authors: [{ name: "Darpan Patel" }],
  creator: "Darpan Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darpanpatel.dev",
    title: "Darpan Patel — Frontend / Full Stack Developer",
    description:
      "Building fast, scalable, and visually polished web applications with React and the modern JavaScript ecosystem.",
    siteName: "Darpan Patel",
    // OG image is generated dynamically — see src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Patel — Frontend / Full Stack Developer",
    description:
      "Building fast, scalable, and visually polished web applications with React and the modern JavaScript ecosystem.",
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
