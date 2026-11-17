import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/home/CtaBand";
import JsonLd from "@/components/JsonLd";
import { getService } from "@/lib/services";
import { site, absoluteUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, offerFor } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing: Website, App & E-commerce Development Costs",
  description:
    "Transparent starting prices: websites from ₹14,999, apps from ₹19,999, e-commerce stores from ₹79,000, maintenance from ₹10,000/month, SEO and support from ₹5,000.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" },
};

const order = ["custom-websites", "website-revamp", "app-development", "ecommerce", "maintenance", "seo", "technical-support", "devops-cloud-deployment"];

const promises = [
  "A clear written quote before any work starts",
  "Mobile-first, SEO-ready builds as standard",
  "Progress updates at every stage",
  "You own your code, domain and content",
];

const pricingFaqs = [
  {
    q: "Why are prices shown as \u201cstarting from\u201d?",
    a: "Every business needs something slightly different. The starting price covers a well-defined version of each service; the final quote depends on pages, features and integrations.",
  },
  {
    q: "What affects the final price?",
    a: "The number of pages or screens, custom features such as payments, logins or dashboards, content and design needs, and how quickly you need it live.",
  },
  {
    q: "Are there ongoing costs after launch?",
    a: "Domain and hosting renew yearly with the provider. Ongoing care is optional: maintenance plans start from ₹10,000 a month, or you can book one-off fixes.",
  },
];

export default function PricingPage() {
  const plans = order.map((slug) => getService(slug)!);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "VijStack pricing",
            url: absoluteUrl("/pricing"),
            provider: { "@id": absoluteUrl("/#business") },
            itemListElement: plans.map((s) => ({ ...offerFor(s), itemOffered: { "@type": "Service", name: s.title } })),
          },
          faqSchema(pricingFaqs),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]),
        ]}
      />
      <PageHeader
        title="Clear prices, no surprises"
        intro="Starting prices for every core service. Tell us what you need and you'll get a written quote before anything begins."
        crumbs={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }]}
      />

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {plans.map((s, i) => {
              const featured = i === 0;
              const Icon = s.icon;
              return (
                <li
                  key={s.slug}
                  className={`flex flex-col rounded-[22px] border-2 border-ink p-6 ${featured ? "bg-ink text-white shadow-[-8px_8px_0_0_var(--color-gold)]" : "bg-white"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${featured ? "bg-gold text-ink" : "bg-gold-soft text-gold-deep"}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    {featured && <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">Most popular</span>}
                  </div>
                  <h2 className="mt-5 text-2xl leading-tight tracking-tight lg:min-h-[2.5em]">{s.title}</h2>
                  <p className={`mt-4 text-sm ${featured ? "text-white/60" : "text-muted"}`}>Starting from</p>
                  <p className="font-display text-[40px] font-medium leading-tight tracking-tight">
                    {s.price!.label.replace("/month", "")}
                    {s.price!.unit && <span className={`ml-1 font-sans text-base ${featured ? "text-white/60" : "text-muted"}`}>/month</span>}
                  </p>
                  <ul className={`mt-5 flex-1 space-y-2.5 border-t pt-5 text-[15px] ${featured ? "border-white/15 text-white/85" : "border-ink/10 text-ink/85"}`}>
                    {s.includes.slice(0, 4).map((inc) => (
                      <li key={inc} className="flex gap-2.5">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-gold" : "text-gold-deep"}`} aria-hidden />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 grid gap-2">
                    <Link href={`/contact?service=${s.slug}`} className={`btn ${featured ? "btn-light" : "btn-primary"} w-full`}>
                      Get a quote
                    </Link>
                    <Link href={`/services/${s.slug}`} className={`py-2 text-center text-sm font-medium underline-offset-4 hover:underline ${featured ? "text-white/80" : "text-muted"}`}>
                      What&apos;s included
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 grid gap-4 rounded-[22px] border-2 border-gold bg-gold-soft p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {promises.map((t) => (
              <p key={t} className="flex items-start gap-3 font-medium">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gold">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                {t}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Prices are in Indian rupees and exclude third-party costs such as domains, hosting and paid plugins. Clients outside India can
            ask for a quote in their currency at <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
          </p>
        </div>
      </section>

      <Faq items={pricingFaqs} title="Pricing questions" />
      <CtaBand title="Get your exact quote" />
    </>
  );
}
