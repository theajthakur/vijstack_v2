import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'
import { Toaster } from "sonner";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <NuqsAdapter>
            <div className='bg-background text-foreground'>
                <Navbar />
                <Toaster position='top-right' richColors />
                <div className='py-20'>{children}</div>
                <Footer />
            </div>
        </NuqsAdapter>
    )
}
