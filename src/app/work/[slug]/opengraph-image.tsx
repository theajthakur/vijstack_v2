import { renderOg, ogSize } from "@/lib/og";
import { getProject, projects } from "@/lib/work";

export const alt = "VijStack case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  return renderOg(p?.name ?? "VijStack", p ? `Case study: ${p.category}${p.country ? `, ${p.country}` : ""}` : "");
}
