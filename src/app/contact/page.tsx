import Contact from '@/components/contact/Contact'
import { JsonLd } from '@/components/seo/JsonLd';
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact VijStack - Web Developer in Greater Noida & Delhi",
    description: "Get a quote for your web development project. Contact VijStack in Greater Noida for ecommerce websites, SaaS development, and digital solutions.",
    alternates: {
        canonical: "https://vijstack.com/contact",
    }
}

export default function page() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact VijStack",
        "url": "https://vijstack.com/contact",
        "description": "Contact information for VijStack.",
        "mainEntity": {
            "@type": "Organization",
            "name": "VijStack",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9695146906",
                "contactType": "sales",
                "areaServed": "IN"
            }
        }
    };

    return (
        <>
            <JsonLd data={contactSchema} />
            <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <Contact />
            </React.Suspense>
        </>
    )
}
