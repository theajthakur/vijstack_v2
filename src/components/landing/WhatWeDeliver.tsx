"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const landingServices = services.slice(0, 4);

export default function WhatWeDeliver() {
    return (
        <section className="py-4 sm:py-20 relative overflow-hidden bg-background">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 lg:mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        What We <span className="text-primary italic">Deliver</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We don't just write code—we build digital products that solve real business problems and drive measurable growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {landingServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl hover:bg-card/50 hover:border-primary/20 transition-all duration-500 flex flex-col">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                                    service.bg,
                                    service.color
                                )}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base grow">
                                    {service.description}
                                </p>
                                <div className="pt-4 mt-auto">
                                    <div className="w-full h-[1px] bg-border/50 mb-4 group-hover:bg-primary/20 transition-colors" />
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Starting from</span>
                                            <span className="text-lg font-extrabold text-foreground">{service.price}</span>
                                        </div>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                        >
                                            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-xl shadow-primary/20">
                        <Link href="/services">
                            View All Services
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
