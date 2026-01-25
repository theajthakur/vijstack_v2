import About from '@/components/layout/about/About'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "About Us | VijStack",
    description: "Learn about VijStack's mission to help businesses build a strong online presence through clean design and scalable development."
}

export default function page() {
    return (
        <About />
    )
}
