import Work from "@/components/work/Work";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Our Work - VijStack | Portfolio of Digital Excellence",
    description: "Explore selected works by VijStack. From SaaS platforms to mobile apps and headless commerce, we deliver robust digital products with premium design.",
    alternates: {
        canonical: "https://vijstack.com/work",
    }
};

export default function WorkPage() {
    return <Work />;
}
