"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight, CheckCircle2, Target, Lightbulb } from "lucide-react";

const projects = [
    {
        title: "GoldenKeyz Dashboard",
        description: "Advanced lead management system with Kanban workflows, task tracking, and multi-role collaboration.",
        fullDetail: "GoldenKeyz Dashboard is a powerful CRM-like platform built for a Pakistan-based client to manage sales operations efficiently. It features admin and salesman roles with shared access to leads, tasks, and properties. The system includes a dynamic Kanban board with drag-and-drop functionality across multiple stages, tabular data views, and seamless CSV import for bulk lead management. Built using Next.js, Tailwind, Framer Motion, and shadcn UI, it also includes a fully custom authentication system and email workflows powered by Resend API.",
        category: "CRM / Lead Management System",
        tags: ["Next.js", "Tailwind", "Framer Motion", "shadcn", "Custom Auth"],
        challenge: "Managing complex lead workflows, role-based access, and real-time updates without relying on third-party SaaS tools.",
        solution: "Engineered a fully custom dashboard with drag-and-drop Kanban logic, scalable CRUD operations, CSV import automation, and a secure in-house authentication system.",
        impact: "Streamlined sales operations, improved lead tracking efficiency, and enabled better team collaboration with structured workflows."
    },
    {
        title: "PersonalPeak360",
        description: "Comprehensive fitness management platform with multi-role access, nutrition tracking, and real-time scheduling.",
        fullDetail: "PersonalPeak360 is a full-scale gym ecosystem built for a Germany-based client. It supports users, trainers, and super admins with dedicated dashboards. The platform includes a massive nutrition database with over 100,000 food items, BMI and fitness calculators, appointment scheduling, and a custom-built chat system using pure fetch APIs without third-party services.",
        category: "Fitness SaaS Platform",
        tags: ["PHP", "jQuery", "Bootstrap", "Vanilla JS"],
        challenge: "Managing complex user roles, large-scale nutrition data, and real-time interactions without relying on modern frameworks.",
        solution: "Architected a modular core PHP system with optimized database queries and built custom features like chat and scheduling from scratch.",
        impact: "Enabled seamless gym operations, improved user engagement, and delivered a scalable system handling large datasets efficiently.",
    },
    {
        title: "RealEstate Pro",
        description: "Interactive property discovery platform with geolocation-based search and dynamic plot insights.",
        fullDetail: "Built for a Lahore-based client, RealEstate Pro allows users to explore properties via map-based navigation. Users can search plots using geo-coordinates, view pricing, area details, and surrounding insights with precision.",
        category: "Real Estate Platform",
        tags: ["PHP", "jQuery", "Bootstrap", "Geo-logic"],
        challenge: "Handling accurate geo-based queries and building a responsive mapping system without advanced libraries.",
        solution: "Developed custom geo-coordinate calculations and optimized search algorithms for precise plot detection and filtering.",
        impact: "Improved property discovery speed and provided users with accurate, real-time location-based insights.",
    },
    {
        title: "Chat Replica System",
        description: "WhatsApp-style chat interface with dynamic rendering of exported conversations.",
        fullDetail: "Developed for a Spain-based client, this system replicates the WhatsApp UI/UX by allowing users to upload exported chat data and render it in a fully interactive interface. It accurately handles group chats, multiple users, and message structures.",
        category: "UI/UX System",
        tags: ["JavaScript", "UI Rendering", "Data Parsing"],
        challenge: "Parsing raw chat exports and recreating a pixel-perfect messaging interface with multiple user interactions.",
        solution: "Built a custom parser and rendering engine to map chat data into a structured UI mimicking WhatsApp behavior.",
        impact: "Delivered a seamless and familiar chat experience, enhancing usability and data visualization.",
    },
    {
        title: "Urban Escape",
        description: "Location-based interactive game with real-time tracking and dynamic rewards system.",
        fullDetail: "Urban Escape is a Pokémon Go-inspired game where users track and capture moving entities (Pacman) based on real-world coordinates. Built with Node.js and MongoDB, it includes live location tracking, route-based movement, and an admin-controlled reward system.",
        category: "Location-Based Game",
        tags: ["Node.js", "Express", "MongoDB", "jQuery"],
        challenge: "Implementing real-time location tracking and dynamic entity movement without advanced gaming engines.",
        solution: "Engineered custom logic for coordinate tracking, route mapping, and reward distribution using a lightweight backend.",
        impact: "Created an engaging real-world gaming experience with scalable backend logic and dynamic gameplay.",
    },
    {
        title: "DeutcheMall",
        description: "Modern eCommerce platform with high-performance search and scalable architecture.",
        fullDetail: "Developed for a German startup, DeutcheMall is a MERN stack-based platform focused on performance and user experience. It features advanced search capabilities, Redux-powered state management, and a clean UI built with Tailwind CSS.",
        category: "eCommerce Platform",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind"],
        challenge: "Building a fast, scalable eCommerce experience with efficient state management and search performance.",
        solution: "Implemented optimized APIs, structured state handling with Redux, and a responsive UI for seamless navigation.",
        impact: "Delivered a smooth, scalable shopping experience with improved performance and user engagement.",
    }
];

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div key={project.title} onClick={() => setSelectedProject(project)} className="cursor-pointer">
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>

                {/* Project Detail Modal */}
                <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                    <DialogContent className="max-w-[95vw] md:max-w-3xl max-h-[95vh] overflow-y-auto rounded-[2rem] border-border/50 bg-card/95 backdrop-blur-2xl p-0">
                        {selectedProject && (
                            <div className="relative">
                                {/* Header Visual - Custom Light VijStack Banner */}
                                <div className="h-32 md:h-48 w-full bg-[#fce588] relative overflow-hidden flex items-center justify-center">
                                    {/* Abstract Background Text */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none">
                                        <span className="text-[8rem] md:text-[12rem] font-black text-black whitespace-nowrap tracking-tighter">VIJSTACK</span>
                                    </div>
                                    {/* Centered Logo */}
                                    <img src="/logo.png" alt="VijStack" className="h-12 md:h-20 w-auto relative z-10 brightness-0 opacity-80" />
                                </div>

                                <div className="px-6 md:px-12 pb-12 -mt-12 relative z-10">
                                    <div className="inline-block bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                                        {selectedProject.category}
                                    </div>

                                    <DialogHeader className="my-8">
                                        <DialogTitle className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                                            {selectedProject.title}
                                        </DialogTitle>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </DialogHeader>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 text-primary">
                                                    <Target className="w-5 h-5" />
                                                    <h4 className="font-bold uppercase tracking-wider text-xs">The Challenge</h4>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {selectedProject.challenge}
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 text-primary">
                                                    <Lightbulb className="w-5 h-5" />
                                                    <h4 className="font-bold uppercase tracking-wider text-xs">The Solution</h4>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {selectedProject.solution}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 text-primary">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                    <h4 className="font-bold uppercase tracking-wider text-xs">The Impact</h4>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {selectedProject.impact}
                                                </p>
                                            </div>

                                            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                                                <p className="text-sm italic text-foreground leading-relaxed">
                                                    "{selectedProject.fullDetail}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-border/50 flex justify-center">
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                        >
                                            Inquire about a similar project <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

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
