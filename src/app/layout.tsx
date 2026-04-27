import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darpanpatel.dev"),
  title: {
    default: "Darpan Patel — Senior Frontend Developer",
    template: "%s | Darpan Patel",
  },
  description:
    "Senior Frontend Developer with 4+ years of experience building fast, scalable, and visually polished web applications with React and the modern JavaScript ecosystem.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
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
    title: "Darpan Patel — Senior Frontend Developer",
    description:
      "Building fast, scalable, and visually polished web applications with React and the modern JavaScript ecosystem.",
    siteName: "Darpan Patel",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darpan Patel — Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Patel — Senior Frontend Developer",
    description:
      "Building fast, scalable, and visually polished web applications with React and the modern JavaScript ecosystem.",
    images: ["/og/og-image.png"],
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
