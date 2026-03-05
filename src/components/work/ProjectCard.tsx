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
    imageColor: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl aspect-[4/3] mb-6 transition-all duration-500 group-hover:border-primary/30">
                {/* Mock Image Placeholder */}
                <div className={cn("absolute inset-0 opacity-20", project.imageColor)} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="w-8 h-8 text-primary" />
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{project.category}</p>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
