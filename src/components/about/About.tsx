"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section className="min-h-screen pt-32 pb-24 bg-background overflow-hidden selection:bg-primary selection:text-neutral-900">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

            <div className="container px-4 mx-auto">
                <div className="space-y-24">
                    {/* Hero Hook */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 justify-center flex flex-col items-center"
                    >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-neutral-900 leading-[0.95]">
                            I don't do <br />
                            <span className="text-primary italic">"Innovation"</span>.
                        </h1>
                        <p className="text-lg text-neutral-600  text-center font-medium leading-tight max-w-2xl">
                            Most others sell you on buzzwords and "synergy".<br />
                            I just build stuff that actually works.
                        </p>
                    </motion.div>

                    {/* Core Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold tracking-tight">Execution over excuses.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Vijstack, I’m a full-stack developer for founders who care about the final product, not the presentation deck. I specialize in fast delivery and scalable systems that don’t fall apart the moment you scale.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Whether it's a complex CRM, a real-time dashboard, or a massive eCommerce platform, I build it from the ground up. No bloated templates, no "magic" tools, just clean, battle-tested code.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-xl space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Custom, Not Glued.</h3>
                                <p className="text-sm text-muted-foreground">
                                    I don't just stitch third-party SaaS tools together. I engineer solutions that you actually own.
                                </p>
                            </div>
                            <div className="p-8 rounded-3xl border border-border bg-card/30 backdrop-blur-xl space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Fast. Really Fast.</h3>
                                <p className="text-sm text-muted-foreground">
                                    I ship production-ready code while others are still debating font sizes in their weekly meetings.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* The "Different" Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="p-12 md:p-20 rounded-[40px] bg-neutral-950 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -z-0" />
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">I'm for the builders.</h2>
                            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
                                I work with startups and businesses who are tired of technical debt and endless "almost done" reports. I value long-term reliability and performance over short-term hacks.
                            </p>
                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="space-y-2">
                                    <p className="text-primary font-black text-4xl">100%</p>
                                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Execution</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary font-black text-4xl">0%</p>
                                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Corporate Drama</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-primary font-black text-4xl">24/7</p>
                                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Reliability</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Closing Hook */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center space-y-10"
                    >
                        <div className="space-y-4">
                            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900">
                                I ship. Not "almost done".
                            </h3>
                            <p className="text-lg text-muted-foreground">
                                Ready to stop hearing excuses and start seeing results?
                            </p>
                        </div>
                        <Button asChild className="rounded-full px-12 h-14 text-lg font-bold">
                            <Link href="/contact" className="flex items-center gap-2">
                                Talk to an Engineer <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Button({ className, asChild, ...props }: any) {
    const Comp = asChild ? React.Fragment : "button";
    return (
        <button
            className={`inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 ${className}`}
            {...props}
        />
    );
}