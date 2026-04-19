import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'
import { Toaster } from "sonner";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <NuqsAdapter>
            <div className='bg-background text-foreground sm:px-6 md:px-10 lg:px-20'>
                <Navbar />
                <Toaster position='top-right' richColors />
                <div>{children}</div>
                <Footer />
            </div>
        </NuqsAdapter>
    )
}
