"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

export default function Clients() {
    const data = [
        { name: "Fitness 360", logo: "/projects/fitness-360.png" },
        { name: "Urban Escape", logo: "/projects/urban_escape.png" },
        { name: "DeutscheMall", logo: "/projects/deutsche-mall.png" },
        { name: "GoldenKeyz", logo: "/projects/golden_keyz.png", className: "bg-[#143642] rounded-lg p-2" },
        { name: "Golden Keyz Mobile App", logo: "/projects/golden_keys_app.png", className: "rounded-full bg-neutral-900" },
        { name: "PONION", logo: "/projects/ponion.png" }
    ];

    return (
        <section className="py-20 border-y border-border/50 bg-background/30 backdrop-blur-sm overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-center px-4 md:px-10">
                        <div className="relative h-16 w-16 md:h-24 md:w-24 transform hover:scale-110 transition-transform duration-300">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className={cn("object-contain", item.className)}
                                sizes="(max-width: 768px) 100px, 150px"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
