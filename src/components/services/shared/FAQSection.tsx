"use client"
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title: string;
    description?: string;
    faqs: FAQItem[];
}

export function FAQSection({ title, description, faqs }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h2>
                    {description && (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-border rounded-xl bg-background overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <ChevronDownIcon
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`px-6 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
