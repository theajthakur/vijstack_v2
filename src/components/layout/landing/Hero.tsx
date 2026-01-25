import React from 'react';
import Link from 'next/link';

import { RocketLaunchIcon, FaceSmileIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background pt-20">
            <div className="container relative z-10 px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                            Building Digital <br />
                            Experiences That Matter
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Transforming ambitious ideas into powerful, scalable software solutions.
                            Specialized in high-performance SASS platforms, E-commerce, and Cloud infrastructure.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5"
                        >
                            Start Project
                        </Link>
                        <Link
                            href="/work"
                            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-foreground bg-background border border-input rounded-lg hover:bg-muted/50 transition-all hover:shadow-sm"
                        >
                            View Our Work
                        </Link>
                    </div>

                    <div className="pt-8 w-full">
                        <div className="text-sm font-semibold text-muted-foreground mb-4 text-center lg:text-left">Trusted by Industry Leaders</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Stat Card 1 */}
                            <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
                                <div className="p-2.5 bg-blue-500/10 text-blue-600 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                    <UsersIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-foreground">80%</div>
                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Retention</div>
                                </div>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
                                <div className="p-2.5 bg-green-500/10 text-green-600 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                    <FaceSmileIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-foreground">100%</div>
                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Satisfaction</div>
                                </div>
                            </div>

                            {/* Stat Card 3 */}
                            <div className="bg-white/60 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group">
                                <div className="p-2.5 bg-purple-500/10 text-purple-600 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <RocketLaunchIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-foreground">20+</div>
                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Content (Dashboard Mockup / Abstract) */}
                <div className="relative hidden lg:block perspective-1000">
                    <div className="relative w-full aspect-square max-w-lg mx-auto transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
                        {/* Abstract Glass Card 1 */}
                        <div className="absolute inset-0 bg-linear-to-tr from-background/40 to-background/10 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col p-6">
                            {/* Mock Dashboard UI */}
                            <div className="flex justify-between items-center mb-8 border-b border-border/10 pb-4">
                                <div className="h-4 w-24 bg-foreground/20 rounded-full"></div>
                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1/3 h-32 bg-primary/10 rounded-xl border border-primary/20"></div>
                                    <div className="w-2/3 h-32 bg-secondary/30 rounded-xl border border-white/5"></div>
                                </div>
                                <div className="h-48 bg-background/50 rounded-xl border border-white/5 p-4 space-y-3">
                                    <div className="h-2 w-full bg-foreground/10 rounded-full"></div>
                                    <div className="h-2 w-4/5 bg-foreground/10 rounded-full"></div>
                                    <div className="h-2 w-3/5 bg-foreground/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
