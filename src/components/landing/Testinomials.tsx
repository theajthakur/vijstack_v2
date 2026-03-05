"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        rating: 5,
    },
    {
        name: "Keshav",
        role: "Founder, GroceryOnWheels",
        content: "We partnered with Vijstack to build our grocery delivery platform. Their team handled the mobile app development in Flutter and backend integration smoothly.",
        rating: 5,
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
        rating: 5,
    },
    {
        name: "Daniel K.",
        role: "Fitness Software @ Fiverr",
        content: "Great experience working with Vijstack. They optimized our APIs and improved overall application performance.",
        rating: 5,
    },
    {
        name: "Sarah L.",
        role: "Ecommerce Store",
        content: "We needed help stabilizing our production application and the Vijstack team handled it perfectly. Bugs were resolved quickly and deployment was smooth.",
        rating: 5,
    },
    {
        name: "Ahmed T.",
        role: "Startup Web Application @ Network",
        content: "Vijstack joined our project during development and delivered clean and scalable solutions. Communication and technical expertise were excellent.",
        rating: 5,
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    return (
        <div className="h-full p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl group hover:bg-card/50 transition-all duration-500 flex flex-col justify-between">
            <div className="relative">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "w-4 h-4",
                                    i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"
                                )}
                            />
                        ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/10 group-hover:text-primary/30 transition-colors" />
                </div>

                <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name[0]}
                </div>
                <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default function Testimonials() {
    // Split testimonials for different rows
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4, 8);

    return (
        <section className="py-24 pb-12 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.02),transparent_50%)]" />

            <div className="container px-4 mx-auto relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
                    >
                        Wall of Love
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Why Developers <span className="text-primary italic">Trust</span> Us
                    </h2>
                </div>
            </div>

            <div className="space-y-8">
                {/* Horizontal X - Left to Right */}
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
                    {[...row1, ...row1].map((t, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard testimonial={t} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Horizontal X - Right to Left */}
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
                    {[...row2, ...row2].map((t, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard testimonial={t} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .testimonial-swiper-horizontal .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                .testimonial-swiper-horizontal {
                    padding: 20px 0;
                }
            `}</style>
        </section>
    );
}
