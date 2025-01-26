import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import { Headings } from "@/components/headings";
import { Hero } from "@/components/hero";
import SlideUp from "@/components/slide-up";

export default function Index() {
    return <div className="gap-8">
        <Hero />
        <Headings />
        <CallToAction />
        <SlideUp />
        <Footer />
    </div>
}