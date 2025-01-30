import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import { Headings } from "@/components/headings";
import { Hero } from "@/components/hero";
import SlideUp from "@/components/slide-up";
import { ViewMap } from "@/components/view-map";
import { useTranslation } from "@/hooks/useTranslation";

export default function Index() {
    const { t } = useTranslation();

    return <div>
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