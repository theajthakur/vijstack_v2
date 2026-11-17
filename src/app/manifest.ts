import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VijStack",
    short_name: "VijStack",
    description: "Custom websites, e-commerce, SEO and admin panels for growing businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f5",
    theme_color: "#000000",
    icons: [
      { src: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
