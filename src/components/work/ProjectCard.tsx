import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/work";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ p, headingLevel = 3 }: { p: Project; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border-2 border-ink bg-white transition-shadow duration-300 hover:shadow-[-8px_8px_0_0_#000]"
    >
      <ProjectVisual p={p} className="aspect-[16/10] border-b-2 border-ink" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <H className="text-2xl tracking-tight sm:text-[28px]">{p.name}</H>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden />
        </div>
        <p className="mt-1 text-sm text-muted">
          {p.category}
          {p.country ? `, ${p.country}` : ""}
        </p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((t) => (
            <li key={t} className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
