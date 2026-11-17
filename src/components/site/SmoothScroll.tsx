"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let lenis: Lenis | null = null;

/** Smooth scrolling driven by GSAP's ticker so ScrollTrigger animations stay in sync. */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ autoRaf: false, anchors: { offset: -88 }, lerp: 0.12, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    document.documentElement.classList.add("has-lenis");
    return () => {
      gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
      document.documentElement.classList.remove("has-lenis");
    };
  }, []);

  // New page: jump to top (or to the hash target) and re-measure triggers
  useEffect(() => {
    const hash = window.location.hash;
    if (lenis) {
      if (hash) lenis.scrollTo(hash, { offset: -88, immediate: true });
      else lenis.scrollTo(0, { immediate: true });
    }
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

export const pauseScroll = (paused: boolean) => (paused ? lenis?.stop() : lenis?.start());
