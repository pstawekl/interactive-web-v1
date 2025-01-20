import React from "react";
import { Hero } from "@/components/hero";
import { Headings } from "@/components/headings";
import SlideUp from "@/components/slide-up";
import CallToAction from "@/components/call-to-action";
import { ViewMap } from "@/components/view-map";
import Footer from "@/components/footer";
import LanguagePicker from "@/components/language-picker";
import { useTranslation } from "@/hooks/useTranslation";

export default function Index() {
    const { t } = useTranslation();

    return <div className="gap-8">
        <Hero />
        <Headings />
        <CallToAction />
        <ViewMap items={[
            {
                id: "banner",
                name: t('indexViewMap1')
            },
            {
                id: "offer",
                name: t('indexViewMap2')
            }, {
                id: "description",
                name: t('indexViewMap3')
            },
            {
                id: "callToAction",
                name: t('indexViewMap4')
            }
        ]} />
        <SlideUp />
        <Footer />
    </div>
}