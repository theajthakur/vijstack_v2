import { site, absoluteUrl } from "./site";
import { services, type Service } from "./services";
import type { Project } from "./work";

const businessId = absoluteUrl("/#business");

export function businessSchema() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/opengraph-image"),
    email: site.email,
    telephone: "+919695146906",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: site.countries.map((c) => ({ "@type": "Country", name: c.name })),
    sameAs: [site.googleReviews],
    knowsAbout: ["Web development", "Next.js", "React", "SEO", "E-commerce", "CMS development"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web development services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
      })),
    },
  };
  if (site.rating && site.reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
      bestRating: 5,
    };
  }
  return data;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: site.url,
    name: site.name,
    publisher: { "@id": businessId },
    inLanguage: "en",
  };
}

export function offerFor(s: Service) {
  if (!s.price) return undefined;
  return {
    "@type": "Offer",
    url: absoluteUrl(`/services/${s.slug}`),
    priceCurrency: "INR",
    price: s.price.amount,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "INR",
      minPrice: s.price.amount,
      ...(s.price.unit ? { unitCode: "MON", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } } : {}),
    },
  };
}

export function serviceSchema(s: Service) {
  const offer = offerFor(s);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.metaDescription,
    url: absoluteUrl(`/services/${s.slug}`),
    provider: { "@id": businessId },
    areaServed: site.countries.map((c) => ({ "@type": "Country", name: c.name })),
    ...(offer ? { offers: offer } : {}),
  };
}

export function projectSchema(p: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    headline: `${p.name}: ${p.category}`,
    description: p.summary,
    url: absoluteUrl(`/work/${p.slug}`),
    creator: { "@id": businessId },
    genre: p.category,
    keywords: p.stack.join(", "),
    ...(p.country ? { locationCreated: { "@type": "Country", name: p.country } } : {}),
    ...(p.logo ? { image: absoluteUrl(p.logo.src) } : {}),
  };
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: absoluteUrl(it.path) })),
  };
}

export function servicesListSchema(list: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/services/${s.slug}`),
      name: s.title,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}
