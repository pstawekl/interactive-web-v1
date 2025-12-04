import EmailForm from '@/components/email';
import { FAQ } from '@/components/faq';
import Footer from '@/components/footer';
import { PricingCardSkeleton } from '@/components/pricing-card-skeleton';
import SlideUp from '@/components/slide-up';
import { Button } from '@/components/ui/button';
import ScrollDownButton from '@/components/ui/scroll-down-button';
import { ViewMap } from '@/components/view-map';
import { useTranslation } from '@/hooks/useTranslation';
import { isMobile } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowUp, Award, BookOpen, Calendar, Code, GraduationCap, Rocket, Sparkles, Users, Zap } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

type CoursesType = 'frontend' | 'backend' | 'fullstack' | '';

const CoursesView: React.FC = () => {
    const { t, ts } = useTranslation();
    const [type, setType] = React.useState<CoursesType>('');
    const [emailFormDesc, setEmailFormDesc] = React.useState<string>('');
    const [isEmailFormOpen, setIsEmailFormOpen] = React.useState<boolean>(false);
    const [isUserInteraction, setIsUserInteraction] = React.useState(false);
    const [isEmailSent, setIsEmailSent] = React.useState(false);

    useEffect(() => {
        // Dodaj skrypt reCAPTCHA v3
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        switch (type) {
            case 'frontend':
                setIsEmailFormOpen(true);
                setEmailFormDesc(ts('frontendEmailDesc'));
                break;
            case 'backend':
                setIsEmailFormOpen(true);
                setEmailFormDesc(ts('backendEmailDesc'));
                break;
            case 'fullstack':
                setIsEmailFormOpen(true);
                setEmailFormDesc(ts('fullstackEmailDesc'));
                break;
            case '':
                setIsEmailFormOpen(false);
                setEmailFormDesc('');
                break;
            default:
                setIsEmailFormOpen(false);
                setEmailFormDesc("");
                break;
        }
    }, [type, t])


    const services = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: ts('trainingServices.training'),
            description: ts('trainingServices.trainingDesc')
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: ts('trainingServices.materials'),
            description: ts('trainingServices.materialsDesc')
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: ts('trainingServices.smallGroups'),
            description: ts('trainingServices.smallGroupsDesc')
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: ts('trainingServices.flexibility'),
            description: ts('trainingServices.flexibilityDesc')
        }
    ];

    const handleTypeChange = (newType: CoursesType) => {
        setIsUserInteraction(true);
        setType(newType);
    };

    const handleEmailSent = () => {
        setIsEmailSent(true);
        setTimeout(() => {
            setType('');
            setIsEmailSent(false);
        }, 2000);
    };

    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const pricingRef = useRef(null);
    const whymeRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
    const pricingInView = useInView(pricingRef, { once: true, margin: "-100px" });
    const whymeInView = useInView(whymeRef, { once: true, margin: "-100px" });

    return (
        <div className="w-full flex justify-center items-center flex-col relative overflow-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 dark:opacity-30" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tl from-cyan-500 via-blue-500 to-purple-600 opacity-10 dark:opacity-20"
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
            </div>

            <section id="home" ref={heroRef} className='relative px-5 sm:px-10 lg:px-20 lg:pb-32 lg:max-w-7xl w-full pt-20'>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 pb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {ts('itTraining')}
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl dark:text-white text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {ts('trainingDescription')}
                    </motion.p>
                    <motion.p
                        className="text-primary dark:text-white italic font-semibold text-lg sm:text-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        {ts('earlyBirdDiscount')}
                    </motion.p>
                </motion.div>

                <div ref={servicesRef}>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                        initial={{ opacity: 0 }}
                        animate={servicesInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative border rounded-2xl shadow-lg h-full flex flex-col bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 overflow-hidden"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="p-6 flex-grow flex flex-col items-center relative z-10">
                                    <motion.div
                                        className="mb-4 text-primary"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {ts(service.title)}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <ScrollDownButton servicesInView={servicesInView} id="pricing" />
                </div>
            </section>

            <section id="pricing" ref={pricingRef} className="relative mt-24 px-5 sm:px-10 lg:px-20 xl:px-64 w-full">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 pb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    {ts('trainingOffer')}
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    initial={{ opacity: 0 }}
                    animate={pricingInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {
                        (type == 'frontend' || type == '') ?
                            <motion.div
                                className={"group relative border-2 rounded-2xl p-6 shadow-xl flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden transition-all duration-300 " + (type == 'frontend' ? " border-blue-500 ring-4 ring-blue-500/20 scale-105" : " border-gray-200 dark:border-gray-700 hover:border-blue-400")}
                                initial={{ opacity: 0, x: -50 }}
                                animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: type == 'frontend' ? 1.05 : 1.02, y: -5 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Front-end</h3>
                                <motion.div
                                    className="text-center mb-6 space-y-2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={pricingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="text-2xl font-bold line-through text-gray-400">1999 zł</span>
                                    <span className="text-4xl font-bold block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1799 zł</span>
                                    <span className="text-sm text-green-500 font-semibold">{ts('discount')}</span>
                                </motion.div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <motion.li
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.4 + 0.1 * 0 }}
                                    >
                                        <span className="text-primary mr-2 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">{ts('trainings.frontendBasics')}</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.4 + 0.1 * 1 }}
                                    >
                                        <span className="text-primary mr-2 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">{ts('trainings.reactBasics')}</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.4 + 0.1 * 2 }}
                                    >
                                        <span className="text-primary mr-2 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">{ts('trainings.fiveDays')}</span>
                                    </motion.li>
                                </ul>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant={'interactive'} onClick={() => handleTypeChange('frontend')} className="w-full">
                                        {ts('signUp')}
                                    </Button>
                                </motion.div>
                            </motion.div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }
                    {
                        (type == 'backend' || type == '') ?
                            <motion.div
                                className={"group relative border-2 rounded-2xl p-6 shadow-xl flex flex-col bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden transition-all duration-300 " + (type == 'backend' ? " ring-4 ring-purple-500/30 scale-105" : " hover:ring-2 hover:ring-purple-400/50")}
                                initial={{ opacity: 0, y: -50 }}
                                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: type == 'backend' ? 1.05 : 1.02, y: -5 }}
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-tr-full" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-2">
                                        <Sparkles className="w-6 h-6 mr-2" />
                                        <h3 className="text-2xl font-bold text-center">Back-end</h3>
                                    </div>
                                    <motion.div
                                        className="text-center mb-6 space-y-2"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={pricingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <span className="text-2xl font-bold line-through text-white/60">2499 zł</span>
                                        <span className="text-4xl font-bold block">2249 zł</span>
                                        <span className="text-sm text-green-300 font-semibold">{ts('discount')}</span>
                                    </motion.div>
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        <motion.li
                                            className="flex items-center"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.5 + 0.1 * 0 }}
                                        >
                                            <span className="mr-2 text-xl">✓</span>
                                            Node.js, Python
                                        </motion.li>
                                        <motion.li
                                            className="flex items-center"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.5 + 0.1 * 1 }}
                                        >
                                            <span className="mr-2 text-xl">✓</span>
                                            Podstawy interfejsów Rest API
                                        </motion.li>
                                        <motion.li
                                            className="flex items-center"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 0.5 + 0.1 * 2 }}
                                        >
                                            <span className="mr-2 text-xl">✓</span>
                                            14 dni szkolenia
                                        </motion.li>
                                    </ul>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant={'interactive'} onClick={() => handleTypeChange('backend')} className="w-full text-white hover:bg-gray-100">
                                            {ts('signUp')}
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }
                    {
                        (type == 'fullstack' || type == '') ?
                            <motion.div
                                className={"group relative border-2 rounded-2xl p-6 shadow-xl flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden transition-all duration-300 " + (type == 'fullstack' ? " border-pink-500 ring-4 ring-pink-500/20 scale-105" : " border-gray-200 dark:border-gray-700 hover:border-pink-400")}
                                initial={{ opacity: 0, x: 50 }}
                                animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: type == 'fullstack' ? 1.05 : 1.02, y: -5 }}
                            >
                                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center justify-center mb-2">
                                    <Rocket className="w-6 h-6 mr-2 text-pink-600" />
                                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Full-stack</h3>
                                </div>
                                <motion.div
                                    className="text-center mb-6 space-y-2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={pricingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="text-2xl font-bold line-through text-gray-400">6999 zł</span>
                                    <span className="text-4xl font-bold block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">6299 zł</span>
                                    <span className="text-sm text-green-500 font-semibold">{ts('discount')}</span>
                                </motion.div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <motion.li
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.6 + 0.1 * 0 }}
                                    >
                                        <span className="text-primary mr-2 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Next.js, PostgreSQL</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.6 + 0.1 * 1 }}
                                    >
                                        <span className="text-primary mr-2 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">React zaawansowane</span>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-center"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={pricingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: 0.6 + 0.1 * 2 }}
                                    >
                                        <span className="text-primary mr-2 text-xl">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">30 dni szkolenia</span>
                                    </motion.li>
                                </ul>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant={'interactive'} onClick={() => handleTypeChange('fullstack')} className="w-full">
                                        {ts('signUp')}
                                    </Button>
                                </motion.div>
                            </motion.div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }
                </motion.div>
                {
                    isEmailFormOpen && !isEmailSent &&
                    <motion.div
                        className='grid grid-cols-1 gap-8 mt-32 justify-items-center'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button variant={'interactive'} className='w-min' onClick={() => handleTypeChange('')}>
                                <ArrowUp className='w-6 h-6' />
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <EmailForm description={emailFormDesc} onEmailSent={handleEmailSent} />
                        </motion.div>
                    </motion.div>
                }
                {
                    isEmailSent &&
                    <motion.div
                        className='text-center mt-32 text-green-500 font-bold text-2xl'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {ts('thankYouForTheMessage')}
                    </motion.div>
                }
                <ScrollDownButton servicesInView={pricingInView} id="whyme" />
            </section>

            <section id="whyme" ref={whymeRef} className="relative mt-24 px-5 sm:px-10 lg:px-20 xl:px-64 mb-20 lg:mb-32 w-full">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 pb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={whymeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    {ts('whyme')}
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    initial={{ opacity: 0 }}
                    animate={whymeInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="space-y-6 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, x: -50 }}
                        animate={whymeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Code className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{ts('trainingProgram')}</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { text: ts('aboutProgram.reactTs'), icon: <Zap className="w-5 h-5" /> },
                                { text: ts('aboutProgram.nodeExpress'), icon: <Code className="w-5 h-5" /> },
                                { text: ts('aboutProgram.projects'), icon: <Award className="w-5 h-5" /> },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={whymeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                >
                                    <div className="flex-shrink-0 w-6 h-6 text-primary mt-0.5">{item.icon}</div>
                                    <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="space-y-6 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, x: 50 }}
                        animate={whymeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <GraduationCap className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{ts('ourStudents')}</h3>
                        </div>
                        <motion.div
                            className="text-gray-700 dark:text-gray-300 space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={whymeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <p>{ts('newCourseOffer')}</p>
                            <p>{ts('earlyBirdInfo')}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <ScrollDownButton servicesInView={whymeInView} id="faq" />
            </section>

            <FAQ
                items={Array.isArray(t('faqCourses')) ? t('faqCourses') as Array<{ question: string; answer: string }> : []}
                title={typeof t('faqTitle') === 'string' ? t('faqTitle') as string : 'FAQ'}
                id={'faq'}
            />

            <Footer />
            <SlideUp />
            {
                !isMobile() && (
                    <ViewMap
                        items={[
                            {
                                id: 'home',
                                name: ts('itTraining')
                            },
                            {
                                id: 'pricing',
                                name: ts('trainingOffer')
                            },
                            {
                                id: 'whyme',
                                name: ts('whyme')
                            }
                        ]}
                    />
                )
            }
        </div>
    );
};

export default CoursesView;
