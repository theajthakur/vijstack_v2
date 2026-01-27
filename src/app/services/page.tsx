import Services from '@/components/services/Services'
import { JsonLd } from '@/components/seo/JsonLd';
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Web Development Services in Greater Noida | VijStack",
    description: "Expert web design, ecommerce development, and SaaS solutions. We provide affordable and scalable digital services for businesses in Greater Noida, Delhi NCR & India.",
    alternates: {
        canonical: "https://vijstack.com/services",
    }
}

export default function page() {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "VijStack Services",
        "description": "Comprehensive web development and digital solutions.",
        "url": "https://vijstack.com/services",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Business Website Development",
                    "url": "https://vijstack.com/services/business-website"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Ecommerce Development",
                    "url": "https://vijstack.com/services/ecommerce"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "SaaS Development",
                    "url": "https://vijstack.com/services/saas"
                }
            ]
        }
    };

    return (
        <>
            <JsonLd data={servicesSchema} />
            <Services />
        </>
    )
}
