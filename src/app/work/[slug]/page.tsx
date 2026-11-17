import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Quote, Star } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ProjectVisual from "@/components/work/ProjectVisual";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/JsonLd";
import { projects, getProject } from "@/lib/work";
import { getService } from "@/lib/services";
import { reviews } from "@/lib/reviews";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const title = `${p.name}: ${p.category}${p.country ? ` for a client in ${p.country}` : ""}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { type: "article", url: `/work/${p.slug}`, title: `${title} | VijStack`, description: p.summary },
    twitter: { title: `${title} | VijStack`, description: p.summary },
  };
}

export default async function CaseStudy({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const review = reviews.find((r) => r.name === p.review);
  const used = p.services.map(getService).filter((s) => !!s);

  const meta = [
    { k: "Category", v: p.category },
    { k: "Client location", v: p.country ?? "International" },
    { k: "Stack", v: p.stack.join(", ") },
  ];

  return (
    <>
      <JsonLd
        data={[
          projectSchema(p),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: p.name, path: `/work/${p.slug}` },
          ]),
        ]}
      />
      <PageHeader
        title={p.name}
        intro={p.detail}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: p.name, href: `/work/${p.slug}` },
        ]}
      />

      <section className="pb-12 sm:pb-16">
        <div className="container-x">
          <div className="stacked mb-3 ml-3 overflow-visible rounded-[22px] sm:mb-5 sm:ml-5 sm:rounded-[28px]">
            <ProjectVisual p={p} size="lg" className="aspect-[4/3] rounded-[22px] border-2 border-ink sm:aspect-[21/9] sm:rounded-[28px]" />
          </div>
          <dl className="mt-12 grid sm:mt-16 gap-px overflow-hidden rounded-2xl border-2 border-ink bg-ink/10 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.k} className="bg-white p-5 sm:p-6">
                <dt className="text-sm text-muted">{m.k}</dt>
                <dd className="mt-1 font-semibold">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="h-section">The challenge</h2>
          <p className="text-xl leading-relaxed text-ink/85 sm:text-2xl">{p.challenge}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <h2 className="h-section">What we built</h2>
          <div>
            <p className="text-xl leading-relaxed text-ink/85 sm:text-2xl">{p.solution}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border-2 border-ink/10 bg-white p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gold">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {review && (
        <section className="py-12 sm:py-16">
          <div className="container-x">
            <figure className="rounded-[28px] bg-ink p-8 text-white sm:p-14">
              <div className="flex items-center justify-between">
                <span className="flex gap-0.5" aria-label={`Rated ${review.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className={`h-5 w-5 ${k < Math.floor(review.rating) ? "fill-gold text-gold" : k < review.rating ? "fill-gold/40 text-gold" : "text-white/20"}`} aria-hidden />
                  ))}
                </span>
                <Quote className="h-8 w-8 text-gold" aria-hidden />
              </div>
              <blockquote className="mt-6 font-display text-[clamp(1.5rem,1rem+1.8vw,2.5rem)] leading-snug tracking-tight">
                {review.quote}
              </blockquote>
              <figcaption className="mt-8 text-white/70">
                <span className="font-semibold text-white">{review.name}</span>, {review.role}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {used.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="container-x">
            <h2 className="text-3xl tracking-tight sm:text-4xl">Services on this project</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {used.map((s) => (
                <li key={s!.slug}>
                  <Link href={`/services/${s!.slug}`} className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 font-medium transition-colors hover:bg-gold">
                    {s!.title} <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16">
        <div className="container-x">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col justify-between gap-4 border-y-2 border-ink py-8 sm:flex-row sm:items-center"
          >
            <span className="text-muted">Next project</span>
            <span className="flex items-center gap-3 font-display text-[clamp(2rem,1.2rem+3vw,4rem)] leading-none tracking-tight">
              {next.name}
              <ArrowUpRight className="h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-12 sm:w-12" aria-hidden />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand title="Planning something similar?" />
    </>
  );
}
