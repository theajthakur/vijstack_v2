import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'
import { Toaster } from "sonner";

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-background text-foreground'>
            <Navbar />
            <Toaster position='top-right' richColors />
            {children}
            <Footer />
        </div>
    )
}
