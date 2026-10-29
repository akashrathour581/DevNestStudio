import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "DevNest Studio | Full Stack Web, Mobile, AI & Automation Agency",
    template: "%s | DevNest Studio",
  },
  description:
    "DevNest Studio — Build • Code • Deploy. Elite software agency specializing in Full Stack Web, Mobile Apps, Custom AI Agents, and Intelligent Automation. Top-rated on Upwork.",
  keywords: [
    "DevNest Studio",
    "software development agency",
    "Upwork top rated agency",
    "full stack web development",
    "Next.js agency",
    "Python FastAPI developer",
    "AI agents development",
    "LangChain RAG developers",
    "React Native mobile apps",
    "web scraping automation",
    "SaaS development",
  ],
  authors: [{ name: "DevNest Studio", url: "https://www.upwork.com/agencies/2104202313777019716/" }],
  creator: "DevNest Studio",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://devneststudio.com"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DevNest Studio",
    title: "DevNest Studio | Build • Code • Deploy",
    description:
      "Full Stack Web, Mobile, Custom AI Agents, and Intelligent Automation for modern businesses and startups.",
    images: [{ url: "/images/logo.png", width: 800, height: 800, alt: "DevNest Studio Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevNest Studio | Build • Code • Deploy",
    description:
      "Full Stack Web, Mobile, Custom AI Agents, and Intelligent Automation for modern businesses and startups.",
    images: ["/images/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
