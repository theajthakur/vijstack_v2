import Landing from '@/components/landing/Landing'
import { JsonLd } from "@/components/seo/JsonLd";
import { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "VijStack - Best Web Development Company in Greater Noida & Delhi",
  description: "Looking for a web developer near you? VijStack offers top-notch web development, ecommerce, and app development services in Greater Noida, Delhi, and India. Contact us today!",
  alternates: {
    canonical: "https://vijstack.com",
  }
};

export default function page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VijStack",
    "url": "https://vijstack.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vijstack.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <Landing />
    </>
  )
}
