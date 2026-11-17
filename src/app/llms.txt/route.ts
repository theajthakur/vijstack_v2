import { site, absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/work";

export const dynamic = "force-static";

// A plain-text summary of the site for AI assistants and answer engines (llmstxt.org)
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Based in ${site.address.locality}, ${site.address.region}, India. Clients in ${site.countries.map((c) => c.name).join(", ")}.`,
    `Contact: ${site.email}, ${site.phoneDisplay} (call or WhatsApp).`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.short}${s.price ? ` From ${s.price.label}.` : ""}`),
    "",
    "## Case studies",
    ...projects.map((p) => `- [${p.name}](${absoluteUrl(`/work/${p.slug}`)}): ${p.summary}`),
    "",
    "## Pages",
    `- [Pricing](${absoluteUrl("/pricing")})`,
    `- [About](${absoluteUrl("/about")})`,
    `- [Contact](${absoluteUrl("/contact")})`,
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
