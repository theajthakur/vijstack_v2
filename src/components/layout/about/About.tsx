import React from 'react';
import Link from 'next/link';
import {
    CheckCircleIcon,
    BuildingStorefrontIcon,
    RocketLaunchIcon,
    ShoppingBagIcon,
    SparklesIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function About() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] opacity-70" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px] opacity-70" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 py-24 md:py-32 lg:py-40">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Our Mission
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Crafting Digital <br className="hidden md:block" /> Excellence
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                        Helping businesses build a strong, reliable online presence through clean design, solid development, and a clear delivery process.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/contact" className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center gap-2">
                            Start a Project <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                        <Link href="#niche" className="px-8 py-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-all">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Aims Section */}
            <section className="relative z-10 py-20 bg-muted/30 border-y border-border/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Simple. Scalable. <span className="text-primary">Reliable.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We aim to make going online simple and stress-free. At Vijstack, success is not just launching a website — it’s helping businesses grow with confidence.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { text: "Build websites that support real business goals", title: "Business Focused" },
                                    { text: "Deliver digital products that are scalable, fast, and easy to manage", title: "Technical Excellence" },
                                    { text: "Earn long-term trust through clarity, quality, and reliability", title: "Trust & Transparency" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <CheckCircleIcon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/50 shadow-2xl skew-y-1">
                                <div className="absolute inset-0 bg-grid-white/5" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 backdrop-blur-xl border border-primary/20">
                                        <SparklesIcon className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Growth Partner</h3>
                                    <p className="text-zinc-400 max-w-sm">
                                        We don't just build websites; we build engines for your business growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Niche Section */}
            <section id="niche" className="relative z-10 py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Niche</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Specialized expertise where it matters most.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group relative rounded-3xl border border-border bg-card p-1 duration-500">
                            <div className="h-full rounded-[20px] bg-background/95 backdrop-blur-sm p-8 transition-transform group-hover:scale-[0.99]">
                                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                                    <BuildingStorefrontIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Offline Businesses</h3>
                                <ul className="space-y-4">
                                    {["Local businesses", "Professionals & service providers", "Small brands needing web presence"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative rounded-3xl border border-border bg-card p-1">
                            <div className="h-full rounded-[20px] bg-background/95 backdrop-blur-sm p-8 transition-transform group-hover:scale-[0.99]">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                                    <RocketLaunchIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Startups & Founders</h3>
                                <ul className="space-y-4">
                                    {["MVPs & SaaS platforms", "Product landing pages", "Scalable web systems"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative rounded-3xl border border-border bg-card p-1">
                            <div className="h-full rounded-[20px] bg-background/95 backdrop-blur-sm p-8 transition-transform group-hover:scale-[0.99]">
                                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500">
                                    <ShoppingBagIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Ecommerce Brands</h3>
                                <ul className="space-y-4">
                                    {["End-to-end ecommerce websites", "Clean buying flows", "High-performance storefronts"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Join companies that trust Vijstack for their digital transformation.
                    </p>
                    <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
