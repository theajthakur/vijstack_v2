import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface CTASectionProps {
    title: string;
    description: string;
    primaryCta: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
}

export function CTASection({ title, description, primaryCta, secondaryCta }: CTASectionProps) {
    return (
        <section className="py-24 px-4 container mx-auto text-center border-t border-border/50">
            <div className="max-w-4xl mx-auto bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href={primaryCta.href}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                    >
                        {primaryCta.text} <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Link>
                    {secondaryCta && (
                        <Link
                            href={secondaryCta.href}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-background border border-input rounded-xl hover:bg-muted/50 transition-all"
                        >
                            {secondaryCta.text}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
