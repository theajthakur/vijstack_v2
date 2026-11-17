import Image from "next/image";
import type { Project } from "@/lib/work";

const tones: Record<Project["tone"], string> = {
  white: "bg-white",
  ink: "bg-ink",
  gold: "bg-gold",
  teal: "bg-[#143642]",
};

/** Logo panel with the brand's stacked-square motif drawn behind the mark */
export default function ProjectVisual({ p, className = "", size = "md" }: { p: Project; className?: string; size?: "md" | "lg" }) {
  const Icon = p.icon;
  const box = size === "lg" ? "h-32 w-44 sm:h-48 sm:w-72" : "h-28 w-40 sm:h-32 sm:w-48";
  const dark = p.tone === "ink" || p.tone === "teal";
  return (
    <div className={`relative grid place-items-center overflow-hidden ${tones[p.tone]} ${className}`}>
      <div className={`relative ${box}`} style={{ translate: "10px -10px" }}>
        <span aria-hidden className={`absolute inset-0 rounded-2xl border-2 ${dark ? "border-white/40" : "border-ink/40"}`} style={{ translate: "-12px 12px" }} />
        <span aria-hidden className={`absolute inset-0 rounded-2xl border-2 ${dark ? "border-white/20" : "border-ink/20"}`} style={{ translate: "-24px 24px" }} />
        <div className={`relative grid h-full w-full place-items-center rounded-2xl border-2 border-ink p-4 ${p.logo?.dark ? "bg-[#143642]" : p.logo || p.tone === "gold" ? "bg-white" : "bg-gold"}`}>
        {p.logo ? (
          <Image src={p.logo.src} alt={`${p.name} logo`} width={p.logo.width} height={p.logo.height} className="max-h-full w-auto object-contain" sizes="(min-width: 640px) 288px, 224px" />
        ) : Icon ? (
          <Icon className="h-12 w-12 text-ink" aria-hidden />
        ) : null}
        </div>
      </div>
    </div>
  );
}
