import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/work/ProjectCard";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/lib/work";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Work: Websites, Apps & Platforms We've Built",
  description:
    "Case studies from VijStack: a real estate CRM in Pakistan, a fitness SaaS platform and an e-commerce store in Germany, a location-based game and more.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          itemListSchema("VijStack case studies", projects.map((p) => ({ name: p.name, path: `/work/${p.slug}` }))),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]),
        ]}
      />
      <PageHeader
        title="Work that ships and keeps working"
        intro="A selection of platforms, stores and tools built from scratch for founders and teams in Germany, Pakistan, Spain and beyond."
        crumbs={[{ name: "Home", href: "/" }, { name: "Work", href: "/work" }]}
      />
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <ul className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li key={p.slug}>
                <ProjectCard p={p} headingLevel={2} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Want results like these?" />
    </>
  );
}
