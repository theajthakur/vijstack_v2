import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/home/CtaBand";
import Faq from "@/components/home/Faq";
import JsonLd from "@/components/JsonLd";
import { services, categories, servicesIn } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { breadcrumbSchema, servicesListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Web & App Development Services: Websites, E-commerce, SEO, DevOps",
  description:
    "16 services from VijStack: custom websites, e-commerce, Flutter apps, landing pages, CMS and admin panels, domain and payment integration, DevOps, SEO, maintenance and support.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[servicesListSchema(services), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]} />
      <PageHeader
        title="Services that get your business online and growing"
        intro="Build it, launch it, grow it. Sixteen services covering everything from a first landing page to cloud deployment and ongoing support."
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]}
      />

      <nav aria-label="Service categories" className="container-x -mt-6 mb-10 flex flex-wrap gap-2 sm:mb-14">
        {categories.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="rounded-full border-2 border-ink/15 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-ink">
            {c.title}
          </a>
        ))}
      </nav>

      {categories.map((c) => {
        const list = servicesIn(c.id);
        const n = list.length;
        const cols = n % 4 === 0 || n % 4 === 3 ? 4 : 3;
        const lgSpan = (cols - (n % cols)) % cols > 0;
        return (
        <section key={c.id} id={c.id} className="pb-14 sm:pb-20">
          <div className="container-x">
            <div className="flex flex-col gap-2 border-b-2 border-ink pb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="h-section">{c.title}</h2>
              <p className="text-muted sm:text-lg">{c.intro}</p>
            </div>
            <ul className={`grid gap-4 pt-6 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {list.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.slug} className={i === 0 ? `${n % 2 ? "sm:col-span-2" : ""} ${lgSpan ? "lg:col-span-2" : "lg:col-span-1"}` : ""}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col rounded-[22px] border-2 border-ink/10 bg-white p-6 transition-all hover:border-ink hover:shadow-[-6px_6px_0_0_#000]"
                    >
                      <div className="flex items-start justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-soft text-gold-deep transition-colors group-hover:bg-gold group-hover:text-ink">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        {s.price && <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-muted">From {s.price.label}</span>}
                      </div>
                      <h3 className="mt-5 text-2xl tracking-tight">{s.title}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.short}</p>
                      <ul className="mt-5 space-y-2 border-t border-ink/10 pt-4">
                        {s.includes.slice(0, 3).map((inc) => (
                          <li key={inc} className="flex gap-2 text-sm text-ink/85">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden />
                            {inc}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                        Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        );
      })}

      <Faq items={faqs.slice(0, 4)} />
      <CtaBand title="Not sure which service you need?" />
    </>
  );
}
