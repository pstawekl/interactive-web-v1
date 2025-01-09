import React from "react";
import { Hero } from "@/components/hero";
import { Headings } from "@/components/headings";
import SlideUp from "@/components/slide-up";

export default function Index() {
    return <div className="gap-8">
        <Hero />
        <Headings />
        <SlideUp />
    </div>
}