import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    ctaText: string;
    ctaLink: string;
    popular?: boolean;
}

interface PricingSectionProps {
    title: string;
    description?: string;
    plans: PricingPlan[];
}

export function PricingSection({ title, description, plans }: PricingSectionProps) {
    return (
        <section className="py-20 px-4 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h2>
                    {description && (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-3xl p-8 border hover:-translate-y-1 transition-all duration-300 flex flex-col ${plan.popular
                                    ? 'bg-background border-primary shadow-lg ring-1 ring-primary/20'
                                    : 'bg-card border-border shadow-sm'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-3xl font-extrabold mb-2">{plan.price}</div>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.ctaLink}
                                className={`w-full py-3 rounded-xl font-semibold text-center transition-colors ${plan.popular
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                                    }`}
                            >
                                {plan.ctaText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
