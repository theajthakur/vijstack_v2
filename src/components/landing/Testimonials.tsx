"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";

const testimonials = [
    {
        name: "Samuel Hufnagel",
        role: "Fitness Platform Owner, Germany",
        content: "The Vijstack team built our complete fitness platform including calorie tracking, diet suggestions, workout planning, trainer chat and scheduling. The system supports multiple roles like user, admin and super admin. Excellent work and very reliable communication.",
        rating: 5,
    },
    {
        name: "M. Hanzla",
        role: "Real Estate Platform",
        content: "Vijstack developed several tools for our real estate platform including map based plot listings and a lead tracking system. The analytics dashboard and employee activity tracking have been very helpful for our operations.",
        rating: 4.5,
    },
    {
        name: "Keshav",
        role: "Founder, GroceryOnWheels",
        content: "We partnered with Vijstack to build our grocery delivery platform. Their team handled the mobile app development in Flutter and backend integration smoothly.",
        rating: 4,
    },
    {
        name: "Sumo",
        role: "Game Platform, Canada",
        content: "Vijstack helped us build and launch a web based game similar to Pacman. The platform includes authentication, rewards, coupon codes and user accounts. Great technical support during launch.",
        rating: 5,
    },
    {
        name: "Michael R.",
        role: "SaaS Platform @ Upwork",
        content: "The Vijstack team quickly understood our existing architecture and fixed several critical backend issues. Very professional and efficient to work with.",
        rating: 4.5,
    },
    {
        name: "Daniel K.",
        role: "Fitness Software @ Firm",
        content: "Great experience working with Vijstack. They optimized our APIs and improved overall application performance.",
        rating: 5,
    },
    {
        name: "Sarah L.",
        role: "Ecommerce Store",
        content: "We needed help stabilizing our production application and the Vijstack team handled it perfectly. Bugs were resolved quickly and deployment was smooth.",
        rating: 4,
    },
    {
        name: "Ahmed T.",
        role: "Startup Web Application @ Network",
        content: "Vijstack joined our project during development and delivered clean and scalable solutions. Communication and technical expertise were excellent.",
        rating: 5,
    }
];

const TestimonialCard = ({ testimonial, onClick }: { testimonial: typeof testimonials[0], onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className="h-[320px] p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl group hover:bg-card/50 transition-all duration-500 flex flex-col justify-between cursor-pointer relative overflow-hidden"
        >
            <div className="relative flex-1 overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => {
                            const isFull = i + 1 <= testimonial.rating;
                            const isHalf = i + 0.5 === testimonial.rating;
                            return (
                                <div key={i} className="relative">
                                    <Star className="w-4 h-4 text-muted-foreground/30" />
                                    {isFull && (
                                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500 absolute inset-0" />
                                    )}
                                    {isHalf && (
                                        <div className="absolute inset-0 overflow-hidden w-[50%]">
                                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/30 transition-colors" />
                </div>

                <div className="relative">
                    <p className="text-foreground/80 text-lg leading-relaxed italic line-clamp-5">
                        "{testimonial.content}"
                    </p>
                    {/* Fade out effect */}
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/30 to-transparent pointer-events-none group-hover:from-background/50" />
                </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                    {testimonial.name[0]}
                </div>
                <div className="overflow-hidden">
                    <h4 className="font-bold text-foreground truncate">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground truncate">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default function Testimonials() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrevious = useCallback(() => {
        setSelectedIndex(prev => (prev === null ? null : (prev - 1 + testimonials.length) % testimonials.length));
    }, []);

    const handleNext = useCallback(() => {
        setSelectedIndex(prev => (prev === null ? null : (prev + 1) % testimonials.length));
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handlePrevious, handleNext]);

    // Split testimonials for different rows
    const testimonialsToDisplay = [...testimonials, ...testimonials]; // Double for continuous swiper look if needed

    const selectedTestimonial = selectedIndex !== null ? testimonials[selectedIndex] : null;

    return (
        <section className="py-24 pb-12 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.02),transparent_50%)]" />

            <div className="container px-4 mx-auto relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Why Developers <span className="text-primary italic pr-5">Trust</span> Us
                    </h2>
                </div>
            </div>

            <div className="space-y-8">
                {/* Horizontal Row 1 */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    loop={true}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="testimonial-swiper-horizontal"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard testimonial={t} onClick={() => setSelectedIndex(i)} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Horizontal Row 2 (Reversed) */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    loop={true}
                    speed={10000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="testimonial-swiper-horizontal"
                >
                    {[...testimonials].reverse().map((t, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard
                                testimonial={t}
                                onClick={() => setSelectedIndex(testimonials.length - 1 - i)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Testimonial Detail Modal */}
            <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
                <DialogContent className="w-[90vw] md:max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-background/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
                    <DialogHeader className="sr-only">
                        <DialogTitle>Testimonial Details</DialogTitle>
                    </DialogHeader>

                    <div className="relative h-full flex flex-col">
                        {/* Navigation Buttons (Desktop) */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95 hidden md:flex"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95 hidden md:flex"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>

                        <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-white/10">
                            <div className="flex justify-between items-start mb-10">
                                <div className="flex gap-1.5">
                                    {[...Array(5)].map((_, i) => {
                                        const isFull = i + 1 <= (selectedTestimonial?.rating || 0);
                                        const isHalf = i + 0.5 === (selectedTestimonial?.rating || 0);
                                        return (
                                            <div key={i} className="relative">
                                                <Star className="w-5 h-5 text-muted-foreground/30" />
                                                {isFull && (
                                                    <Star className="w-5 h-5 fill-yellow-500 text-yellow-500 absolute inset-0" />
                                                )}
                                                {isHalf && (
                                                    <div className="absolute inset-0 overflow-hidden w-[50%]">
                                                        <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <Quote className="w-12 h-12 text-primary/20" />
                            </div>

                            <div className="space-y-8">
                                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
                                    "{selectedTestimonial?.content}"
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-6 pt-10 border-t border-white/10">
                                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl font-bold shrink-0">
                                    {selectedTestimonial?.name[0]}
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-xl font-bold text-foreground truncate">{selectedTestimonial?.name}</h4>
                                    <p className="text-muted-foreground truncate">{selectedTestimonial?.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="md:hidden flex justify-between p-4 bg-background/50 border-t border-white/5 backdrop-blur-md">
                            <Button
                                variant="ghost"
                                onClick={handlePrevious}
                                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground h-auto p-2"
                            >
                                <ChevronLeft className="w-5 h-5" /> Previous
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={handleNext}
                                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground h-auto p-2"
                            >
                                Next <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <style jsx global>{`
                .testimonial-swiper-horizontal .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                .testimonial-swiper-horizontal {
                    padding: 20px 0;
                }
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
}
