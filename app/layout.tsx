import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { Footer } from "@/components/navigation/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://orxio.ai";
const siteName = "ORXIO";
const siteDescription =
  "ORXIO is a premium AI consulting and AI products company delivering enterprise-grade AI agents, generative AI, automation, and data engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ORXIO | AI Consulting & AI Engineering",
    template: "%s | ORXIO",
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/brand/favicon-source.png",
    apple: "/brand/favicon-source.png",
  },
  keywords: [
    "AI consulting",
    "AI agents",
    "generative AI",
    "enterprise AI",
    "AI engineering",
    "automation",
    "data engineering",
    "ORXIO",
  ],
  authors: [{ name: "ORXIO" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "ORXIO | AI Consulting & AI Engineering",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1983,
        height: 793,
        alt: "ORXIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ORXIO | AI Consulting & AI Engineering",
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "oklch(1 0 0)" },
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.145 0 0)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
