"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Healy Fitness",
        description: "A comprehensive health and wellness ecosystem featuring real-time tracking, trainer connectivity, and personalized diet planning for a German fitness giant.",
        category: "Web & Mobile Platform",
        tags: ["Flutter", "Node.js", "PostgreSQL", "Real-time"],
        imageColor: "bg-blue-500",
    },
    {
        title: "RealEstate Pro",
        description: "Modern property discovery engine with interactive map integration, advanced lead management, and automated analytics for real estate agencies.",
        category: "SaaS Ecosystem",
        tags: ["Next.js", "Mapbox", "Prisma", "Analytics"],
        imageColor: "bg-emerald-500",
    },
    {
        title: "GroceryOnWheels",
        description: "Optimized hyperlocal delivery platform for fresh produce, featuring smart routing and real-time inventory management.",
        category: "E-commerce",
        tags: ["React Native", "Firebase", "Logic Flow"],
        imageColor: "bg-orange-500",
    },
    {
        title: "Pixel Adventure",
        description: "Engaging web-based gaming experience with secure user authentication, reward systems, and integrated marketplace.",
        category: "Web Gaming",
        tags: ["Canvas API", "WebSockets", "Auth0"],
        imageColor: "bg-purple-500",
    },
    {
        title: "FinanceFlow Docs",
        description: "Automated document processing and classification system for financial services, leveraging custom AI models.",
        category: "AI & Infrastructure",
        tags: ["Python", "TensorFlow", "Kubernetes", "API"],
        imageColor: "bg-slate-500",
    },
    {
        title: "Z-Style Fashion",
        description: "High-performance headless ecommerce storefront with lightning-fast load times and seamless checkout experience.",
        category: "Headless Commerce",
        tags: ["Shopify Storefront", "Tailwind", "Vercel"],
        imageColor: "bg-pink-500",
    }
];

export default function Work() {
    return (
        <section className="min-h-screen pt-32 pb-24 bg-background overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4"
                    >
                        Portfolio
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8"
                    >
                        Selected <span className="text-primary italic">Works</span> & Digital Experiences
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                    >
                        We build robust, scalable, and beautifully designed digital products. Each project is a testament to our commitment to engineering excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-32 p-12 rounded-[40px] border border-border/50 bg-card/30 backdrop-blur-xl text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
                        Let's collaborate to bring your vision to life with world-class engineering and design.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform duration-300"
                    >
                        Start a Conversation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
