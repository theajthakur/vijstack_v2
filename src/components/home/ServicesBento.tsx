import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { getService } from "@/lib/services";

const featured = [
  "ecommerce",
  "app-development",
  "seo",
  "startup-landing-pages",
  "custom-cms",
  "admin-panels",
  "payment-gateway-integration",
  "devops-cloud-deployment",
];
const more = ["domain-email-integration", "security-plans", "lead-generation", "startup-kits", "website-revamp", "technical-support"];

export default function ServicesBento() {
  const hero = getService("custom-websites")!;
  const maintenance = getService("maintenance")!;
  const HeroIcon = hero.icon;
  const MIcon = maintenance.icon;

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="h-section max-w-2xl">Everything your business needs online, from one studio</h2>
          <Link href="/services" className="btn btn-ghost self-start md:self-auto">
            All 16 services
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          <Link
            href={`/services/${hero.slug}`}
            className="stacked stacked-hover group relative mb-3 ml-3 flex flex-col justify-between rounded-[24px] bg-ink p-7 text-white [--stack-color:var(--color-gold)] col-span-2 sm:mb-5 sm:ml-5 sm:rounded-[28px] sm:p-9 lg:row-span-2"
          >
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink">
                <HeroIcon className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="mt-8 text-4xl tracking-tight sm:text-5xl">{hero.title}</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">{hero.short}</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Next.js & React", "Mobile first", "SEO built in", "From ₹14,999"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80">
                  {t}
                </span>
              ))}
            </div>
            <ArrowUpRight className="absolute right-7 top-7 h-6 w-6 text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" aria-hidden />
          </Link>

          {featured.map((slug) => {
            const s = getService(slug)!;
            const Icon = s.icon;
            return (
              <Link key={slug} href={`/services/${slug}`} className="group block rounded-2xl">
                <SpotlightCard
                  theme="light"
                  spotlightColor="rgba(240, 180, 41, 0.35)"
                  intensity={0.5}
                  borderGlow={0.9}
                  className="!rounded-2xl !p-4 sm:!p-6 h-full border-2 border-ink/10 transition-colors group-hover:border-ink"
                  style={{ ["--spotlight-card-surface" as string]: "#ffffff", ["--spotlight-card-shadow" as string]: "none" }}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-soft text-gold-deep transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg leading-tight tracking-tight sm:mt-5 sm:text-[22px]">{s.title}</h3>
                  <p className="mt-2 hidden text-[15px] leading-relaxed text-muted sm:block">{s.short}</p>
                  <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-ink/20 transition-all sm:right-5 sm:top-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden />
                </SpotlightCard>
              </Link>
            );
          })}

          <div className="flex flex-col gap-5 rounded-2xl border-2 border-gold bg-gold-soft p-6 col-span-2 sm:p-7 lg:col-span-4 lg:flex-row lg:items-center">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold text-ink">
              <MIcon className="h-6 w-6" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="text-2xl tracking-tight">Already have a website? We fix, update and grow it.</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[maintenance.slug, ...more].map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="inline-flex rounded-full border-2 border-ink/15 bg-white px-3 py-1 text-sm font-medium transition-colors hover:border-ink"
                    >
                      {getService(slug)!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href={`/services/${maintenance.slug}`} className="btn btn-primary shrink-0 self-start lg:self-auto">
              Get it fixed
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
