import React from 'react'

interface PrivacySectionProps {
    title: string;
    children: React.ReactNode;
}

export default function PrivacySection({ title, children }: PrivacySectionProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
                {children}
            </div>
        </div>
    )
}
