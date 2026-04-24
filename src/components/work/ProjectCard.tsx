"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    description: string;
    category: string;
    tags: string[];
    fullDetail: string;
    challenge: string;
    solution: string;
    impact: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="h-full p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/30 group-hover:bg-card/50 flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{project.category}</p>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-auto">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-primary-200 text-neutral-900 border border-border uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
