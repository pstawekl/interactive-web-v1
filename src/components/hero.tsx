import Logo from '../assets/logo-horizontal.png';
import { Button } from './ui/button';
import heroVideo from '../assets/hero-bg-video.mp4';

export function Hero() {
    return <div className="relative hero overflow-hidden text-white flex flex-col lg:flex-row gap-8 items-center justify-center min-h-[80vh] p-5">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75 blur-sm opacity-10"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={heroVideo} type="video/mp4" />
            Twoja przeglądarka nie wspiera wideo HTML5.
        </video>
        <div className='relative select-none text-center max-w-[400px] lg:max-w-[1000px] flex flex-col justify-center items-center gap-5'>
            <img src={Logo} draggable="false" className='mb-5' alt="Interactive Logo horizontal" width="50%"/>
            <h1 className="text-4xl font-bold">Rozwiązania IT, które napędzą Twój sukces</h1>
            <p className="text-lg">Od 2017 roku oferujemy profesjonalne usługi programistyczne - od wizji po realizacje.</p>
            <Button variant={'interactive'} className="mt-6" onClick={() => document.getElementById("headings")?.scrollIntoView({ behavior: "smooth" })}>Dowiedz się więcej</Button>
        </div>
    </div>;
}
