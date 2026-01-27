"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface TechItem {
    name: string;
    iconClass: string;
}

interface TechStackSectionProps {
    title: string;
    description?: string;
    technologies: TechItem[];
}

export function TechStackSection({ title, description, technologies }: TechStackSectionProps) {
    return (
        <section className="py-20 px-4 container mx-auto text-center overflow-hidden">

            {/* Inject CSS for linear continuous scroll */}
            <style jsx global>{`
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>

            <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{title}</h2>
                {description && (
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                )}
            </div>

            <div className="mx-auto max-w-full px-4">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={60}
                    slidesPerView="auto"
                    loop={true}
                    speed={5000}
                    allowTouchMove={false}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    className="w-full py-10"
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                        <SwiperSlide key={idx} className="w-auto! px-4 select-none">
                            <div className="flex flex-col items-center gap-4 group cursor-pointer min-w-[100px]">
                                <div className="w-20 h-20 flex items-center justify-center bg-secondary/30 rounded-2xl border border-border group-hover:border-primary/50 group-hover:bg-secondary/50 transition-all duration-300 shadow-sm relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <i className={`${tech.iconClass} text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}></i>
                                </div>
                                <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
