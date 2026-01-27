"use client"

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import { mapping } from './map'

export default function Page() {
    const params = useParams();
    const slug = params?.slug;
    // Ensure slug is a string
    const pageKey = Array.isArray(slug) ? slug[0] : slug;

    if (!pageKey) return notFound();

    const lowerKey = pageKey.toLowerCase();
    const Component = mapping[lowerKey as keyof typeof mapping];

    if (!Component) {
        return notFound();
    }

    // Format breadcrumb label (e.g., "ecommerce-development" -> "Ecommerce Development")
    const breadcrumbLabel = lowerKey
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="w-full">
            {/* Breadcrumb Navigation */}
            <div className="container mx-auto px-4 mb-8">
                <nav className="flex items-center text-sm text-muted-foreground" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <HomeIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>

                    <ChevronRightIcon className="w-4 h-4 mx-2 text-muted-foreground/50" />

                    <Link
                        href="/services"
                        className="hover:text-primary transition-colors"
                    >
                        Services
                    </Link>

                    <ChevronRightIcon className="w-4 h-4 mx-2 text-muted-foreground/50" />

                    <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
                        {breadcrumbLabel}
                    </span>
                </nav>
            </div>

            {/* Dynamic Component Content */}
            <Component />
        </div>
    )
}
