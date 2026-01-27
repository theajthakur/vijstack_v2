import React from 'react';

interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
}

interface FeatureSectionProps {
    title: string;
    description?: string;
    features: Feature[];
}

export function FeatureSection({ title, description, features }: FeatureSectionProps) {
    return (
        <section className="py-20 px-4 container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h2>
                {description && (
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
