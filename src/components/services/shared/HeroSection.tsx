import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle?: string;
    description: string;
    primaryCta?: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
}

export function HeroSection({
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta
}: HeroSectionProps) {
    return (
        <section className="bg-background text-foreground pb-20 pt-10 px-6 border-b border-border">
            <div className="max-w-4xl mx-auto text-center space-y-8 p-8 border-b border-border rounded-lg">
                {subtitle && (
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                        {subtitle}
                    </div>
                )}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    {primaryCta && (
                        <Link
                            href={primaryCta.href}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5"
                        >
                            {primaryCta.text} <ArrowRightIcon className="ml-2 w-4 h-4" />
                        </Link>
                    )}
                    {secondaryCta && (
                        <Link
                            href={secondaryCta.href}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-foreground bg-background border border-input rounded-lg hover:bg-muted/50 transition-all hover:shadow-sm"
                        >
                            {secondaryCta.text}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
