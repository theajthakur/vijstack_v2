import About from '@/components/about/About'
import { JsonLd } from '@/components/seo/JsonLd';
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "About VijStack - Web Development Agency Greater Noida",
    description: "Learn about VijStack, a premier web development agency in Greater Noida. We help businesses grow with custom websites, ecommerce solutions, and digital strategy.",
    alternates: {
        canonical: "https://vijstack.com/about",
    }
}

export default function page() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About VijStack",
        "url": "https://vijstack.com/about",
        "description": "Information about VijStack web development agency.",
        "mainEntity": {
            "@type": "Organization",
            "name": "VijStack",
            "url": "https://vijstack.com",
            "logo": "https://vijstack.com/logo.png"
        }
    };

    return (
        <>
            <JsonLd data={aboutSchema} />
            <About />
        </>
    )
}
