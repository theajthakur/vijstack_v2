import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Reason {
    title: string;
    description: string;
}

interface WhyUsSectionProps {
    title: string;
    description?: string;
    reasons: Reason[];
    illustration?: string;
}

export function WhyUsSection({ title, description, reasons, illustration }: WhyUsSectionProps) {
    return (
        <section className="py-20 px-4 container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
                    {description && (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}

                    <div className="space-y-6 pt-4">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="shrink-0 mt-1">
                                    <CheckCircleIcon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                                    <p className="text-muted-foreground">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <Image src={illustration || "/illustrations/relaxed.png"} alt='ecommerce' objectFit='cover' width={500} height={500} />
                </div>
            </div>
        </section>
    );
}
