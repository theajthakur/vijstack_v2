"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/lib/work";
import ProjectVisual from "@/components/work/ProjectVisual";

const featured = projects.slice(0, 4);

export default function WorkStack() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Cards pile up like the logo's stack: earlier cards shrink and dim as the next one slides over
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          const inner = card.querySelector("[data-stack-inner]");
          const shade = card.querySelector("[data-stack-shade]");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: next, start: "top bottom", end: "top 30%", scrub: true },
          });
          tl.to(inner, { scale: 1 - (cards.length - i) * 0.025, ease: "none" }, 0).to(shade, { opacity: 0.22, ease: "none" }, 0);
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="work" className="py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="h-section">Selected work</h2>
            <p className="lede mt-4">Platforms, stores and tools built from scratch for clients in Germany, Pakistan, Spain and beyond.</p>
          </div>
          <Link href="/work" className="btn btn-ghost self-start md:self-auto">
            All projects
          </Link>
        </div>

        <div className="mt-10 space-y-5 sm:mt-14 md:space-y-0">
          {featured.map((p, i) => (
            <div key={p.slug} data-stack-card className="md:sticky md:pb-[8vh]" style={{ top: `calc(96px + ${i * 22}px)` }}>
              <article
                data-stack-inner
                className="relative origin-top overflow-hidden rounded-[22px] border-2 border-ink bg-white will-change-transform sm:rounded-[28px] md:grid md:h-[min(540px,calc(100svh-180px))] md:grid-cols-[1fr_1.05fr]"
              >
                <div className="flex flex-col p-6 sm:p-10 md:order-1">
                  <p className="font-display text-sm text-muted">
                    {String(i + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-[clamp(2rem,1.2rem+2.6vw,3.4rem)] leading-[1] tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-muted">
                    {p.category}
                    {p.country ? `, ${p.country}` : ""}
                  </p>
                  <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink/85 md:mt-6">{p.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.stack.slice(0, 5).map((t) => (
                      <li key={t} className="rounded-full border border-ink/15 px-3 py-1 text-sm text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group mt-8 inline-flex items-center gap-2 self-start border-b-2 border-ink pb-1 font-semibold md:mt-auto"
                  >
                    Read the case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
                <ProjectVisual p={p} size="lg" className="aspect-[16/9] border-t-2 border-ink md:order-2 md:aspect-auto md:border-l-2 md:border-t-0" />
                <span data-stack-shade aria-hidden className="pointer-events-none absolute inset-0 bg-ink opacity-0" />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
