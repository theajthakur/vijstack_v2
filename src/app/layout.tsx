import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/provider/LayoutProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VijStack - Web Development & Digital Solutions Agency",
    template: "%s | VijStack - Web Development & Digital Solutions",
  },
  description:
    "Expert web development company in Greater Noida, Delhi NCR & India. We specialize in custom websites, ecommerce solutions, SaaS development, and digital transformation for businesses.",
  keywords: [
    "Web Development",
    "Web Developer near me",
    "Web Developer Greater Noida",
    "Web Developer Delhi",
    "Website Development India",
    "Ecommerce Development",
    "SaaS Development",
    "Next.js Developer",
    "React Developer",
    "Digital Agency Greater Noida",
    "VijStack",
  ],
  authors: [{ name: "VijStack" }],
  creator: "VijStack",
  publisher: "VijStack",
  metadataBase: new URL("https://vijstack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VijStack – Expert Web Development Agency in Greater Noida & Delhi",
    description:
      "Transform your business with VijStack. Top-rated web development company offering custom websites, ecommerce, and SaaS solutions in Greater Noida, Delhi NCR.",
    url: "https://vijstack.com",
    siteName: "VijStack",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://vijstack.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VijStack – web development agency greater noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VijStack – Web Development & Digital Solutions",
    description:
      "Expert web development services in Greater Noida & Delhi. Custom websites, ecommerce stores, and SaaS products.",
    images: ["https://vijstack.com/og-image.png"],
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
  verification: {
    google: "your-google-verification-code", // Placeholder for actual code
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
