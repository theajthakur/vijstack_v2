"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ComputerDesktopIcon,
    ShoppingCartIcon,
    CommandLineIcon,
    MegaphoneIcon,
    PaintBrushIcon,
    WrenchScrewdriverIcon,
    ArrowPathIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';

const CoreServices = [
    {
        title: "Business Website Development",
        description: "Professional, responsive websites designed to establish credibility and convert visitors into customers. Perfect for offline businesses transitioning online.",
        icon: ComputerDesktopIcon,
        bestFor: "Local Businesses, Service Providers",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Ecommerce Development",
        description: "Scalable online stores with secure payment gateways and smooth user journeys. We build platforms that make buying effortless.",
        icon: ShoppingCartIcon,
        bestFor: "Retailers, Digital Brands",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "SaaS & MVP Development",
        description: "Robust technical foundations for startups. We transform ideas into functional, scalable software products ready for market.",
        icon: CommandLineIcon,
        bestFor: "Startups, Tech Founders",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Landing Pages & Funnels",
        description: "High-conversion pages designed for specific marketing campaigns. Focused purely on speed, clarity, and action.",
        icon: MegaphoneIcon,
        bestFor: "Product Launches, Marketing Campaigns",
        color: "text-orange-500",
        bg: "bg-orange-500/10"
    }
];

const SecondaryServices = [
    {
        title: "UI/UX Design",
        description: "User-centric interfaces that are intuitive and visually appealing.",
        icon: PaintBrushIcon
    },
    {
        title: "Revamp & Optimization",
        description: "Modernizing legacy sites for better performance and fresh aesthetics.",
        icon: ArrowPathIcon
    },
    {
        title: "Maintenance & Support",
        description: "Ongoing security updates, backups, and technical assistance.",
        icon: WrenchScrewdriverIcon
    }
];

export default function Services() {
    return (
        <div className="w-full min-h-screen bg-background overflow-hidden font-sans">

            <section className="relative z-10 py-16 container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 backdrop-blur-md">
                            Our Expertise
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Reliable Digital Solutions for Growing Businesses
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We translate business goals into clear, functional digital products. No fluff, just results.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg lg:max-w-xl">
                            <Image
                                src="/illustrations/services.png"
                                alt="VijStack Services"
                                width={800}
                                height={600}
                                priority
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="relative z-10 pb-24 container px-4 mx-auto">
                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Core Services</h2>
                    <p className="text-muted-foreground max-w-xl">
                        Comprehensive solutions tailored for businesses at every stage of growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CoreServices.map((service, index) => (
                        <div key={index} className="group relative rounded-3xl border border-border bg-card/50 p-1 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-transparent transition-all duration-300">
                            <div className="h-full rounded-[20px] bg-background p-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-sm">
                                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="pt-6 border-t border-border flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                        Best For
                                    </span>
                                    <span className="text-sm font-medium text-foreground">
                                        {service.bestFor}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Secondary Services */}
            <section className="relative z-10 py-24 bg-muted/30 border-y border-border/50">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Supporting Your Growth</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Ensure your digital presence remains sharp, secure, and effective.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SecondaryServices.map((service, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-background hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 text-foreground">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-32 container px-4 mx-auto text-center overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to move forward?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    Let's discuss how we can bring clarity to your digital goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact" className="px-10 py-4 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-all flex items-center gap-2">
                        Start a Project <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="px-10 py-4 rounded-xl border border-border bg-background hover:bg-muted font-medium transition-all">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
