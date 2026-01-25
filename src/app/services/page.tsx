import Services from '@/components/layout/services/Services'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Our Services | VijStack",
    description: "Explore VijStack's web solutions: Business Websites, Ecommerce, SaaS & MVP Development, and Landing Pages. Built for growth and reliability."
}

export default function page() {
    return (
        <Services />
    )
}
