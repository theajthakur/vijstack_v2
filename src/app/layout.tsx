import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/provider/LayoutProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VijStack – Modern Websites, Ecommerce & SaaS Development",
  description:
    "VijStack helps offline businesses and startups build a strong online presence. We create modern ecommerce websites, SaaS platforms, landing pages, and scalable web solutions.",
  keywords: [
    "web development agency",
    "ecommerce website development",
    "SaaS product development",
    "startup website design",
    "landing page design",
    "modern web development",
    "Next.js development",
    "business website development",
    "digital transformation agency",
    "VijStack",
  ],
  authors: [{ name: "VijStack" }],
  creator: "VijStack",
  metadataBase: new URL("https://vijstack.com"),
  openGraph: {
    title: "VijStack – Build Scalable Websites & SaaS Products",
    description:
      "We design and develop clean, modern websites for ecommerce, startups, and SaaS businesses. Turn your offline business into a powerful online brand with VijStack.",
    url: "https://vijstack.com",
    siteName: "VijStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://vijstack.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VijStack – Modern Websites, Ecommerce & SaaS Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VijStack – Modern Web, Ecommerce & SaaS Development",
    description:
      "Clean, scalable, and high-performance websites for ecommerce brands, startups, and SaaS companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
