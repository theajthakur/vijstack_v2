"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function Clients() {
    const data = [
        { name: "Fitness 360", logo: "/projects/fitness-360.png" },
        { name: "Urban Escape", logo: "/projects/urban_escape.png" },
        { name: "DeutscheMall", logo: "/projects/deutsche-mall.png" },
        { name: "Fitness 360", logo: "/projects/fitness-360.png" },
        { name: "Urban Escape", logo: "/projects/urban_escape.png" },
        { name: "DeutscheMall", logo: "/projects/deutsche-mall.png" },
    ];

    return (
        <section className="py-12 border-y border-border/50 bg-background/30 backdrop-blur-sm">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Trusted by industry leaders
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={40}
                    slidesPerView={2}
                    loop={true}
                    speed={4000}
                    allowTouchMove={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 80,
                        },
                    }}
                    className="w-full flex items-center"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="relative h-20 w-40">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100px, 150px"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
