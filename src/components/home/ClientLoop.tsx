"use client";

import Image from "next/image";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";
import { projects } from "@/lib/work";

const countries = ["Germany", "Pakistan", "Canada", "Spain", "United Kingdom", "India"];

export default function ClientLoop() {
  const logos = projects.filter((p) => p.logo);
  const items: LogoItem[] = [];
  logos.forEach((p, i) => {
    items.push({
      node: (
        <span className={`grid h-16 w-32 place-items-center rounded-xl border-2 border-ink/10 px-3 ${p.logo!.dark ? "bg-[#143642]" : "bg-white"}`}>
          <Image src={p.logo!.src} alt={p.name} width={p.logo!.width} height={p.logo!.height} className="max-h-12 w-auto object-contain" sizes="128px" />
        </span>
      ),
      title: p.name,
      ariaLabel: p.name,
    });
    const c = countries.slice(i * 2, i * 2 + 2);
    c.forEach((name) =>
      items.push({
        node: <span className="whitespace-nowrap font-display text-2xl tracking-tight text-ink/70 sm:text-3xl">{name}</span>,
        title: name,
      })
    );
  });

  return (
    <section aria-label="Clients and countries" className="border-y-2 border-ink/10 bg-white py-6 sm:py-8">
      <div className="container-x mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">Trusted by founders and teams in 5+ countries</p>
      </div>
      <LogoLoop
        logos={items}
        speed={40}
        gap={44}
        logoHeight={64}
        pauseOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="VijStack clients and the countries they are in"
      />
    </section>
  );
}
