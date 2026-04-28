import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ryjin.tech"),
  title: {
    default: "RYJIN TECHNOLOGY | High-Performance Digital Systems",
    template: "%s | RYJIN TECHNOLOGY"
  },
  description: "RYJIN TECHNOLOGY: We build performance-driven digital brand systems. Specialized in high-converting web development, brand identity, and growth strategies that scale businesses.",
  keywords: ["web development", "brand identity", "digital marketing", "performance systems", "RYJIN TECHNOLOGY", "Pratyay Gharai", "growth strategy", "luxury design", "business scaling"],
  authors: [{ name: "Pratyay Gharai" }],
  creator: "Pratyay Gharai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryjin.tech",
    siteName: "RYJIN TECHNOLOGY",
    title: "RYJIN TECHNOLOGY | High-Performance Digital Systems",
    description: "Engineering digital ecosystems that attract, convert, and scale brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RYJIN TECHNOLOGY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RYJIN TECHNOLOGY | Digital Performance Systems",
    description: "We build digital systems that perform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable}`}>
      <body suppressHydrationWarning>
        <Preloader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
