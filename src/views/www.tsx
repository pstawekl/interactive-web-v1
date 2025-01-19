import React, { useEffect } from 'react';
import { Globe, Gauge, Smartphone, Paintbrush, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmailForm, { EmailFormProps } from '@/components/email';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide-up';
import { ViewMap } from '@/components/view-map';

const WebServicesView: React.FC = () => {
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

    const [type, setType] = React.useState<"basic" | "standard" | "premium" | "">('');
    const [emailFormDesc, setEmailFormDesc] = React.useState<string>('');
    const [isEmailFormOpen, setIsEmailFormOpen] = React.useState<boolean>(false);
    const [isUserInteraction, setIsUserInteraction] = React.useState(false);
    const [isEmailSent, setIsEmailSent] = React.useState(false);

    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: 'Strony WWW',
            description: 'Profesjonalne strony internetowe dostosowane do potrzeb Twojej firmy.'
        },
        {
            icon: <Gauge className="w-8 h-8" />,
            title: 'Optymalizacja',
            description: 'Szybkie ładowanie i optymalizacja pod kątem wyszukiwarek (SEO).'
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: 'RWD',
            description: 'Responsywne strony działające na wszystkich urządzeniach.'
        },
        {
            icon: <Paintbrush className="w-8 h-8" />,
            title: 'Nowoczesny Design',
            description: 'Atrakcyjny wygląd zgodny z najnowszymi trendami.'
        }
    ];

    useEffect(() => {
        switch (type) {
            case 'basic':
                setIsEmailFormOpen(true);
                setEmailFormDesc('Witam. Jestem zainteresowany/a stroną Basic. Proszę o kontakt.');
                break;
            case 'standard':
                setIsEmailFormOpen(true);
                setEmailFormDesc('Witam. Jestem zainteresowany/a stroną Standard. Proszę o kontakt.');
                break;
            case 'premium':
                setIsEmailFormOpen(true);
                setEmailFormDesc('Witam. Jestem zainteresowany/a stroną Premium. Proszę o kontakt.');
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
    }, [type])

    const handleTypeChange = (newType: "basic" | "standard" | "premium" | "") => {
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

    useEffect(() => {
        if (isEmailFormOpen) {
            document.getElementById('emailForm')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (isUserInteraction) {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isEmailFormOpen, type, isUserInteraction]);

    return (
        <div className="w-full flex justify-center items-center flex-col">
            <section id="home" className='px-20 lg:px-auto lg:pb-32 lg:max-w-7xl'>
                <div className="text-center mb-16 pt-16">
                    <h1 className="text-4xl font-bold mb-4">
                        Strony Internetowe
                    </h1>
                    <p className="text-xl text-gray-600">
                        Tworzymy profesjonalne strony WWW dla Twojego biznesu
                    </p>
                </div>

                <div>
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
                                    <p className="text-gray-600 text-center">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="mt-24 px-20 lg:px-64">
                <h2 className="text-3xl font-bold text-center mb-12">Cennik</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        (type == 'basic' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + (type == 'basic' ? " border-white" : "")}>
                                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold">999 zł</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Strona One Page
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Responsywny Design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Podstawowe SEO
                                    </li>
                                </ul>
                                <Button
                                    variant={'interactive'}
                                    onClick={() => handleTypeChange('basic')}>
                                    Wybierz pakiet
                                </Button>
                            </div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }

                    {
                        (type == 'standard' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-lg flex flex-col bg-primary text-white hover:border-white " + (type == 'standard' ? 'border-white' : '')}>
                                <h3 className="text-2xl font-bold text-center mb-4">Standard</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold">1999 zł</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        Do 5 podstron
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        Responsywny Design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        Zaawansowane SEO
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        Formularz kontaktowy
                                    </li>
                                </ul>
                                <Button
                                    variant={'interactive'}
                                    onClick={() => handleTypeChange('standard')}
                                >
                                    Wybierz pakiet
                                </Button>
                            </div> :
                            <PricingCardSkeleton className='hidden lg:block' />
                    }

                    {
                        (type == 'premium' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + (type == 'premium' ? 'border-white' : '')}>
                                <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold">4999 zł</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Nielimitowane podstrony
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Panel administracyjny
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Integracja z systemami
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        Pełne wsparcie
                                    </li>
                                </ul>
                                <Button
                                    onClick={() => handleTypeChange('premium')}
                                    variant={'interactive'}
                                >
                                    Wybierz pakiet
                                </Button>
                            </div> :
                            <PricingCardSkeleton className='hidden lg:block' />
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
                <h2 className="text-3xl font-bold text-center mb-12">Dlaczego my?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Nowoczesne technologie</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>React - szybkie i interaktywne aplikacje webowe</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>TypeScript - bezpieczny i skalowalny kod</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>Tailwind CSS - nowoczesny i responsywny design</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Zrealizowane projekty</h3>
                        <div className="flex flex-col gap-4">
                            <RealizedProject name="Rbiuro.pl" description="Strona internetowa dla biura rachunkowego" link='https://rbiuro.pl' />
                            <RealizedProject name="Softlab ERP" description="Jeden z najpopularniejszych systemów ERP w Europie" link='https://assecobs.pl/softlab' />
                            <RealizedProject name="Apartament Danusia" description="Strona internetowa pozwalająca na wynajem apartamentu w Zakopanem" link='https://apartamentdanusia.pl/' />
                            <RealizedProject name="Oj Lala" description="Strona internetowa pozwalająca na rezerwację terminu w salonie kosmetycznym" />
                            <RealizedProject name="T4RP" description="Forum internetowe dla graczy serwera GTA - Time 4 Roleplay" />
                        </div>
                    </div>

                </div>
            </section >
            <Footer />
            <SlideUp />
            <ViewMap
                items={
                    [
                        {
                            id: 'home',
                            name: 'Strony Internetowe'
                        },
                        {
                            id: 'pricing',
                            name: 'Cennik'
                        },
                        {
                            id: 'whyme',
                            name: 'Dlaczego my?'
                        }
                    ]
                }
            />
        </div >
    );
};

export default WebServicesView;

const RealizedProject = ({ name, description, link }: { name: string, description: string, link?: string }) => {
    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="border-l-4 border-primary pl-4 relative overflow-hidden group hover:rounded">
                    <div className="absolute inset-0 bg-gray-800 transition-transform duration-300 -translate-x-full group-hover:translate-x-0 -z-10"></div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-gray-600 group-hover:text-white">{description}</p>
                </div>
            </a>
        );
    } else {
        return (
            <div className="border-l-4 border-primary pl-4 relative overflow-hidden group hover:rounded">
                <div className="absolute inset-0 bg-gray-800 transition-transform duration-300 -translate-x-full group-hover:translate-x-0 -z-10"></div>
                <h4 className="font-semibold">{name}</h4>
                <p className="text-gray-600 group-hover:text-white">{description}</p>
            </div>
        )
    }
}

const PricingCardSkeleton = ({className}:{className?: string}) => {
    return <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-white " + className}></div>;
}