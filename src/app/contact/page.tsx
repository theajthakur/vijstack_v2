import Contact from '@/components/layout/contact/Contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Us | VijStack",
    description: "Start your digital project with VijStack. We build modern websites, ecommerce platforms, and SaaS products. Get a clear, no-obligation quote today."
}

export default function page() {
    return (
        <Contact />
    )
}
