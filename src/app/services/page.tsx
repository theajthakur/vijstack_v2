"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="container px-4 mx-auto mb-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 space-y-8 text-center lg:text-left"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                            Reliable Digital <span className="text-primary italic">Solutions</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            We translate complex business goals into clear, functional digital products. No fluff, just results that move the needle.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Button asChild size="lg" className="rounded-full px-8">
                                <Link href="/contact">Start a Project</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                                <Link href="#all-services">Explore Services</Link>
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-1 w-full max-w-2xl"
                    >
                        <div className="relative aspect-square lg:aspect-video w-full">
                            <Image
                                src="/illustrations/services.png"
                                alt="VijStack Services"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section id="all-services" className="container px-4 mx-auto space-y-32">
                {services.map((service, index) => (
                    <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className={cn(
                            "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                            index % 2 === 1 && "lg:flex-row-reverse"
                        )}
                    >
                        {/* Service Visual */}
                        <div className="flex-1 w-full max-w-md">
                            <div className={cn(
                                "aspect-[4/3] rounded-[3rem] flex items-center justify-center relative group overflow-hidden border border-border/50",
                                service.bg
                            )}>
                                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                            </div>
                        </div>

                        {/* Service Content */}
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                                    {service.title}
                                </h2>
                                <div className="font-extrabold text-primary flex items-center justify-center lg:justify-start gap-2">
                                    <span className="text-lg opacity-80 font-semibold">Starting from</span>
                                    <span className="text-2xl md:text-4xl">{service.price}</span>
                                </div>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pt-2">
                                    {service.detailedDescription}
                                </p>
                            </div>

                            <Button asChild variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/5 px-0 text-lg font-bold">
                                <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                                    Read More <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Final CTA */}
            <section className="container px-4 mx-auto mt-32">
                <div className="bg-primary-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Ready to build something <span className="italic opacity-80">extraordinary</span>?</h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Whether you're a startup or an established enterprise, we have the technical expertise to bring your vision to life.
                        </p>
                        <Button asChild size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100 rounded-full px-12 h-14 text-lg font-bold">
                            <Link href="/contact">Get in Touch Now</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}