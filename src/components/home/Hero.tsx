"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Magnet from "@/components/reactbits/Magnet";

const stats = [
  ["20+", "clients"],
  ["60+", "projects"],
  ["5+", "countries"],
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const frames = gsap.utils.toArray<HTMLElement>("[data-frame]");
        const o = parseFloat(getComputedStyle(root.current!).getPropertyValue("--o")) || 10;

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        // The frames start stacked, then fan out into the logo's stack
        tl.from(frames, { x: (i) => o * Number(frames[i].dataset.frame), y: (i) => -o * Number(frames[i].dataset.frame), duration: 1.1, ease: "expo.out" }, 0.1)
          .from("[data-line]", { yPercent: 108, duration: 1, stagger: 0.1 }, 0.2)
          .from("[data-fade]", { autoAlpha: 0, y: 12, duration: 0.6, stagger: 0.07 }, 0.65);

        // Scrolling spreads the stack a little further (transform only, scrubbed)
        tl.eventCallback("onComplete", () => {
          frames.forEach((f) => {
            const i = Number(f.dataset.frame);
            if (!i) return;
            gsap.to(f, {
              x: -o * i * 0.6,
              y: o * i * 0.6,
              ease: "none",
              scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
            });
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative pb-10 pt-[88px] [--o:8px] sm:pb-16 sm:pt-28 sm:[--o:16px] lg:pb-20 lg:pt-32 lg:[--o:22px]">
      <div className="container-x">
        <div className="relative mb-[calc(var(--o)*2)] ml-[calc(var(--o)*2)]">
          <div
            data-frame="2"
            aria-hidden
            className="absolute inset-0 rounded-[18px] border-2 border-ink/25 sm:rounded-[28px]"
            style={{ translate: "calc(var(--o) * -2) calc(var(--o) * 2)" }}
          />
          <div
            data-frame="1"
            aria-hidden
            className="absolute inset-0 rounded-[18px] border-2 border-ink/60 bg-gold sm:rounded-[28px]"
            style={{ translate: "calc(var(--o) * -1) var(--o)" }}
          />

          <div data-frame="0" className="relative overflow-hidden rounded-[18px] border-2 border-ink bg-white sm:rounded-[28px]">
            <div className="px-5 pb-7 pt-7 sm:px-10 sm:pb-12 sm:pt-12 lg:px-14 lg:pt-14">
              <p data-fade className="mb-5 text-sm font-medium text-muted sm:mb-8 sm:text-[15px]">
                Web, app &amp; cloud development studio
              </p>
              <h1
                className="font-display text-ink"
                style={{ fontSize: "clamp(2.3rem, 0.2rem + 10.2vw, 9.75rem)", lineHeight: 0.92, letterSpacing: "-0.04em", fontWeight: 470 }}
              >
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-line className="block">Your vision,</span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-line className="block">
                    built in code
                    <span
                      aria-hidden
                      className="ml-[0.08em] inline-block h-[0.72em] w-[0.42em] translate-y-[0.04em] rounded-[0.06em] bg-gold align-baseline animate-caret"
                    />
                  </span>
                </span>
              </h1>

              <div className="mt-6 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-14">
                <p data-fade className="max-w-xl text-[17px] leading-relaxed text-muted sm:text-xl">
                  <span className="sm:hidden">Websites, apps and online stores for startups and growing businesses worldwide.</span>
                  <span className="hidden sm:inline">
                    VijStack designs, builds and runs websites, apps and online stores for startups and growing businesses, from
                    Greater Noida to clients in Germany, Canada, Spain, the UK and Pakistan.
                  </span>
                </p>
                <div data-fade className="flex flex-wrap gap-3 sm:flex-nowrap sm:gap-4 lg:justify-end">
                  <Magnet padding={50} magnetStrength={4} wrapperClassName="min-w-[130px] flex-1 sm:min-w-0 sm:flex-none" innerClassName="w-full">
                    <Link href="/contact" className="btn btn-primary w-full max-sm:px-4 max-sm:text-sm">
                      Start your project
                    </Link>
                  </Magnet>
                  <Link href="/work" className="btn btn-ghost min-w-[130px] flex-1 max-sm:px-4 max-sm:text-sm sm:min-w-0 sm:flex-none">
                    See our work
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-stretch border-t-2 border-ink">
              <dl data-fade className="grid flex-1 grid-cols-3 divide-x-2 divide-ink/10">
                {stats.map(([v, l]) => (
                  <div key={l} className="px-4 py-3.5 sm:px-8 sm:py-5">
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-display text-[26px] font-medium leading-none tracking-tight sm:text-4xl">{v}</dd>
                    <dd className="mt-1.5 text-xs text-muted sm:text-sm">{l}</dd>
                  </div>
                ))}
              </dl>
              <p
                data-fade
                className="hidden items-center gap-2 border-l-2 border-ink/10 px-8 text-sm text-muted md:flex"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Taking new projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
