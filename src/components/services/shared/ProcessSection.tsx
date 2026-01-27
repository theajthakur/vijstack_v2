import React from 'react';

interface ProcessStep {
    title: string;
    description: string;
    stepNumber: string;
}

interface ProcessSectionProps {
    title: string;
    description?: string;
    steps: ProcessStep[];
}

export function ProcessSection({ title, description, steps }: ProcessSectionProps) {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            {/* Connector Line (Desktop) */}
                            {idx !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-border -z-10" />
                            )}

                            <div className="bg-background border border-border rounded-2xl p-8 h-full hover:shadow-sm transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mb-6 text-xl font-bold text-foreground mx-auto lg:mx-0 z-10 relative">
                                    {step.stepNumber}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center lg:text-left">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
