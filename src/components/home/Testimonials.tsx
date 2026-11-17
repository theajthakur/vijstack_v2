import { Quote, Star } from "lucide-react";
import { reviews, type Review } from "@/lib/reviews";
import { site } from "@/lib/site";

const tones = ["bg-gold text-ink", "bg-ink", "bg-gold-deep", "bg-ink", "bg-gold text-ink"];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("");
}

function Card({ r, i }: { r: Review; i: number }) {
  return (
    <figure className="flex w-[min(80vw,400px)] shrink-0 flex-col justify-between rounded-3xl border-2 border-ink/10 bg-white p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-0.5" aria-label={`Rated ${r.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className={`h-4 w-4 ${k < Math.floor(r.rating) ? "fill-gold text-gold" : k < r.rating ? "fill-gold/40 text-gold" : "text-ink/20"}`} aria-hidden />
          ))}
        </span>
        <Quote className="h-6 w-6 text-gold" aria-hidden />
      </div>
      <blockquote className="mt-4 text-base leading-relaxed text-ink sm:text-lg">{r.quote}</blockquote>
      <figcaption className="mt-7 flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ${tones[i % tones.length]}`} aria-hidden>
          {initials(r.name)}
        </span>
        <span>
          <span className="block font-semibold">{r.name}</span>
          <span className="block text-sm text-muted">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const rowA = reviews;
  const rowB = [...reviews.slice(2), ...reviews.slice(0, 2)];

  return (
    <section id="reviews" className="overflow-hidden border-y border-line bg-white py-16 sm:py-24 lg:py-32">
      <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="h-section max-w-2xl">What clients say</h2>
          <p className="lede mt-5">Feedback from founders and teams in Germany, Canada, Pakistan and beyond.</p>
        </div>
        <a href={site.googleReviews} target="_blank" rel="noopener" className="btn btn-ghost shrink-0 self-start md:self-auto">
          <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
          {site.rating && site.reviewCount ? `${site.rating.toFixed(1)} from ${site.reviewCount} Google reviews` : "Read reviews on Google"}
        </a>
      </div>

      <div className="marquee-mask group mt-14 space-y-5">
        <div className="motion-marquee flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
          {[...rowA, ...rowA].map((r, i) => (
            <div key={i} aria-hidden={i >= rowA.length} className="flex">
              <Card r={r} i={i} />
            </div>
          ))}
        </div>
        <div className="motion-marquee flex w-max gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...rowB, ...rowB].map((r, i) => (
            <div key={i} aria-hidden="true" className="flex">
              <Card r={r} i={i + 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
