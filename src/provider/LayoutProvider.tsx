import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-background text-foreground'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
