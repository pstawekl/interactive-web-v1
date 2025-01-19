import React from "react";
import { Hero } from "@/components/hero";
import { Headings } from "@/components/headings";
import SlideUp from "@/components/slide-up";
import CallToAction from "@/components/call-to-action";
import { ViewMap } from "@/components/view-map";
import Footer from "@/components/footer";

export default function Index() {
    return <div className="gap-8">
        <Hero />
        <Headings />
        <CallToAction />
        <ViewMap items={[
            {
                id: "banner",
                name: "Home"
            },
            {
                id: "offer",
                name: "Oferta"
            }, {
                id: "description",
                name: "Opis"
            },
            {
                id: "callToAction",
                name: "Kontakt"
            }
        ]} />
        <SlideUp />
        <Footer />
    </div>
}