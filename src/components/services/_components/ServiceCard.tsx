import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    bestFor?: string;
    color: string;
    bg: string;
    cta?: {
        text: string;
        href: string;
    };
}

export function ServiceCard({ title, description, icon: Icon, bestFor, color, bg, cta }: ServiceCardProps) {
    return (
        <div className="group relative rounded-3xl border border-border bg-card/50 p-1 hover:border-primary/20 transition-all duration-300 h-full">
            <div className="h-full rounded-[20px] bg-background p-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm flex flex-col">
                <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6 ${color}`}>
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed grow">
                    {description}
                </p>

                <div className="pt-6 border-t border-border flex items-center justify-between mt-auto gap-4">
                    {bestFor && (
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                                Best For
                            </span>
                            <span className="text-sm font-medium text-foreground">
                                {bestFor}
                            </span>
                        </div>
                    )}

                    {cta && (
                        <Link
                            href={cta.href}
                            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors ml-auto"
                        >
                            {cta.text} <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
