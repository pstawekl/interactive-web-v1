import React, { useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Calendar, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmailForm from '@/components/email';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide-up';
import { ViewMap } from '@/components/view-map';
import { PricingCardSkeleton } from '@/components/pricing-card-skeleton';
import { RealizedProject } from '@/components/realized-project';
import { useTranslation } from '@/hooks/useTranslation';

type CoursesType = 'frontend' | 'backend' | 'fullstack' | '';

const CoursesView: React.FC = () => {
    const { t } = useTranslation();
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
                setEmailFormDesc(t('frontendEmailDesc'));
                break;
            case 'backend':
                setIsEmailFormOpen(true);
                setEmailFormDesc(t('backendEmailDesc'));
                break;
            case 'fullstack':
                setIsEmailFormOpen(true);
                setEmailFormDesc(t('fullstackEmailDesc'));
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
            title: t('trainingServices.training'),
            description: t('trainingServices.trainingDesc')
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: t('trainingServices.materials'),
            description: t('trainingServices.materialsDesc')
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: t('trainingServices.smallGroups'),
            description: t('trainingServices.smallGroupsDesc')
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: t('trainingServices.flexibility'),
            description: t('trainingServices.flexibilityDesc')
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

    return (
        <div className="w-full flex justify-center items-center flex-col">
            <section id="home" className='px-20 lg:px-auto lg:pb-32 lg:max-w-7xl'>
                <div className="text-center mb-16 pt-16">
                    <h1 className="text-4xl font-bold mb-4">
                        {t('itTraining')}
                    </h1>
                    <p className="text-xl dark:text-white mb-2">
                        {t('trainingDescription')}
                    </p>
                    <p className="text-primary dark:text-white italic font-semibold">
                        {t('earlyBirdDiscount')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="border rounded-lg max-w-xl shadow-md h-full flex flex-col lg:hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800">
                            <div className="p-6 flex-grow flex flex-col items-center">
                                <div className="mb-4 text-primary">
                                    {service.icon}
                                </div>
                                <h2 className="text-xl font-semibold mb-2">
                                    {service.title}
                                </h2>
                                <p className="dark:text-white text-center">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="pricing" className="mt-24 px-20 lg:px-64">
                <h2 className="text-3xl font-bold text-center mb-12">{t('trainingOffer')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        (type == 'frontend' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + (type == 'frontend' ? " border-white" : "")}>
                                <h3 className="text-2xl font-bold text-center mb-4">Front-end</h3>
                                <div className="text-center mb-6 space-y-2">
                                    <span className="text-2xl font-bold line-through text-gray-400">1999 zł</span>
                                    <span className="text-4xl font-bold block text-primary">1799 zł</span>
                                    <span className="text-sm text-green-500">{t('discount')}</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('trainings.frontendBasics')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('trainings.reactBasics')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('trainings.fiveDays')}
                                    </li>
                                </ul>
                                <Button variant={'interactive'} onClick={() => handleTypeChange('frontend')}>
                                    {t('signUp')}
                                </Button>
                            </div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }
                    {
                        (type == 'backend' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + (type == 'backend' ? " border-white" : "")}>
                                <h3 className="text-2xl font-bold text-center mb-4">Back-end</h3>
                                <div className="text-center mb-6 space-y-2">
                                    <span className="text-2xl font-bold line-through text-gray-400">2499 zł</span>
                                    <span className="text-4xl font-bold block text-primary">2249 zł</span>
                                    <span className="text-sm text-green-500">{t('discount')}</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Node.js, Python
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Podstawy interfejsów Rest API
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        14 dni szkolenia
                                    </li>
                                </ul>
                                <Button variant={'interactive'} onClick={() => handleTypeChange('backend')}>
                                    {t('signUp')}
                                </Button>
                            </div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }
                    {
                        (type == 'fullstack' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + (type == 'fullstack' ? " border-white" : "")}>
                                <h3 className="text-2xl font-bold text-center mb-4">Full-stack</h3>
                                <div className="text-center mb-6 space-y-2">
                                    <span className="text-2xl font-bold line-through text-gray-400">6999 zł</span>
                                    <span className="text-4xl font-bold block text-primary">6299 zł</span>
                                    <span className="text-sm text-green-500">{t('discount')}</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Next.js, PostgreSQL
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        React zaawansowane
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        30 dni szkolenia
                                    </li>
                                </ul>
                                <Button variant={'interactive'} onClick={() => handleTypeChange('fullstack')}>
                                    {t('signUp')}
                                </Button>
                            </div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }
                </div>
                {
                    isEmailFormOpen && !isEmailSent &&
                    <div className='grid grid-cols-1 gap-8 mt-32 justify-items-center'>
                        <Button variant={'interactive'} className='w-min' onClick={() => handleTypeChange('')}>
                            <ArrowUp className='w-6 h-6' />
                        </Button>
                        <EmailForm description={emailFormDesc} onEmailSent={handleEmailSent} />
                    </div>
                }
                {
                    isEmailSent &&
                    <div className='text-center mt-32 text-green-500 font-bold'>
                        Dziękujemy za wiadomość! Odezwiemy się wkrótce.
                    </div>
                }
            </section>

            <section id="whyme" className="mt-24 px-20 lg:px-64 mb-20 lg:mb-32">
                <h2 className="text-3xl font-bold text-center mb-12">{t('whyme')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t('trainingProgram')}</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>{t('aboutProgram.reactTs')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>{t('aboutProgram.nodeExpress')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>{t('aboutProgram.projects')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t('ourStudents')}</h3>
                        {t('newCourseOffer')} <br />
                        {t('earlyBirdInfo')}
                    </div>
                </div>
            </section>

            <Footer />
            <SlideUp />
            <ViewMap
                items={[
                    {
                        id: 'home',
                        name: t('itTraining')
                    },
                    {
                        id: 'pricing',
                        name: t('trainingOffer')
                    },
                    {
                        id: 'whyme',
                        name: t('whyme')
                    }
                ]}
            />
        </div>
    );
};

export default CoursesView;
