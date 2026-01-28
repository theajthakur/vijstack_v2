
import React from 'react';

type JsonLdProps = {
    data: Record<string, any> | Record<string, any>[];
};

export const JsonLd = ({ data }: JsonLdProps) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export const OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VijStack",
    "url": "https://vijstack.com",
    "logo": "https://vijstack.com/logo.png",
    "sameAs": [
        "https://www.linkedin.com/company/vijstack",
        "https://twitter.com/vijstack",
        "https://github.com/vijstack"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9695146906", // Replace with actual
        "contactType": "customer service",
        "areaServed": ["IN", "US", "UK"],
        "availableLanguage": ["en", "hi"]
    }
};

export const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VijStack",
    "image": "https://vijstack.com/office.jpg",
    "telephone": "+91-9695146906", // Replace with actual
    "email": "contact@vijstack.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Greater Noida", // Enhance with full address
        "addressLocality": "Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201308",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.4744,
        "longitude": 77.5040
    },
    "url": "https://vijstack.com",
    "priceRange": "$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    }
};
