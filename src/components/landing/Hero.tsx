import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rocket, SmileIcon, User } from 'lucide-react';
import StatCard from './_components/StatCard';

export default function Hero() {
    const [activeStatIndex, setActiveStatIndex] = useState(2);
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background pt-10">

            <div className="container relative z-10 px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-start">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                            Building Digital <br />
                            <span className="text-primary italic">Experiences</span> That Matter
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Transforming ambitious ideas into powerful, scalable software solutions.
                            Specialized in high-performance SaaS platforms, E-commerce, and Cloud infrastructure.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95"
                        >
                            Start Project
                        </Link>
                        <Link
                            href="/work"
                            className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-foreground bg-background border border-input rounded-xl hover:bg-muted/50 transition-all hover:shadow-md transform hover:-translate-y-1 active:scale-95"
                        >
                            View Our Work
                        </Link>
                    </div>

                    <div className="pt-8 w-full">
                        <div className="text-sm font-semibold text-muted-foreground mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                            <div className="h-[1px] w-8 bg-muted-foreground/30" />
                            Trusted by Industry Leaders
                            <div className="h-[1px] w-8 bg-muted-foreground/30" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-fit mx-auto lg:mx-0">
                            {
                                [
                                    { icon: User, title: "80%", subtitle: "Retention", color: "blue" },
                                    { icon: SmileIcon, title: "100%", subtitle: "Satisfaction", color: "green" },
                                    { icon: Rocket, title: "20+", subtitle: "Projects", color: "purple" }
                                ].map((item, index) => (
                                    <StatCard
                                        key={index}
                                        Icon={item.icon}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        color={item.color}
                                        isExpanded={activeStatIndex === index}
                                        onMouseEnter={() => setActiveStatIndex(index)}
                                    />
                                ))
                            }
                        </div>
                    </div>

                </motion.div>

                {/* Visual Content (Logo with Premium Treatment) */}
                <div className="sticky top-24 self-start flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-4 border border-primary/10 rounded-3xl animate-[spin_25s_linear_infinite] pointer-events-none" />
                        <div className="absolute inset-8 border border-primary/5 rounded-3xl animate-[spin_20s_linear_reverse_infinite] pointer-events-none" />

                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                rotate: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            className="relative z-20 w-48 h-48 md:w-60 md:h-60 flex items-center justify-center cursor-pointer group"
                        >
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                                {/* Light sweep effect */}
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out" />
                            </div>

                            <div className="relative p-10 transform transition-transform duration-500 group-hover:scale-110">
                                <img src="/logo.png" alt="Logo" width={240} height={240} className="w-full h-full object-contain" />
                            </div>


                        </motion.div>


                        {/* Floating Orbs - position adjusted for smaller size */}
                        <motion.div
                            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-4 left-4 w-3 h-3 rounded-full bg-primary/40 blur-sm"
                        />
                        <motion.div
                            animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-blue-500/30 blur-sm"
                        />
                    </motion.div>
                </div>


            </div>
        </section>
    );
}

