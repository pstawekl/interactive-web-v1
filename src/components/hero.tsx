import Logo from '../assets/logo-horizontal.png';
import { Button } from './ui/button';
import heroVideo from '../assets/hero-bg-video.mp4';
import { useTranslation } from '@/hooks/useTranslation';

export function Hero() {
    const { t } = useTranslation();

    return <div id="banner" className="relative hero overflow-hidden text-white flex flex-col lg:flex-row gap-8 items-center justify-center min-h-[80vh] p-5">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover filter brightness-75 blur-sm opacity-10"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={heroVideo} type="video/mp4" />
            {t('html5error')}
        </video>
        <div className='relative select-none text-center max-w-[400px] lg:max-w-[1000px] flex flex-col justify-center items-center gap-5'>
            <img src={Logo} draggable="false" className='mb-5' alt="Interactive Logo horizontal" width="50%"/>
            <h1 className="text-4xl text-black dark:text-white font-bold">{t('indexBannerTitle')}</h1>
            <p className="text-lg text-black dark:text-white">{t('indexBannerSubtitle')}</p>
            <Button variant={'interactive'} className="mt-6" onClick={() => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth", block: 'end' })}>
                {t('learnMore')}
            </Button>
        </div>
    </div>;
}
