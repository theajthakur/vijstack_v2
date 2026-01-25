import Footer from '@/components/layout/Footer'
import Landing from '@/components/layout/landing/Landing'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-background text-foreground'>
            <Navbar />
            <Landing />
            <Footer />
        </div>
    )
}
