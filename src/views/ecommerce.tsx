import React, { useEffect } from 'react';
import { ShoppingCart, Gauge, Shield, CreditCard, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmailForm from '@/components/email';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide-up';
import { ViewMap } from '@/components/view-map';
import { PricingCardSkeleton } from '@/components/pricing-card-skeleton';
import { RealizedProject } from '@/components/realized-project';
import { useTranslation } from '@/hooks/useTranslation';

const EcommerceView: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
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
            icon: <ShoppingCart className="w-8 h-8" />,
            title: t('onlineStores'),
            description: t('ecommerceService1')
        },
        {
            icon: <Gauge className="w-8 h-8" />,
            title: t('performance'),
            description: t('ecommerceService2')
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: t('security'),
            description: t('ecommerceService3')
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: t('payments'),
            description: t('ecommerceService4')
        }
    ];

    useEffect(() => {
        switch (type) {
            case 'basic':
                setIsEmailFormOpen(true);
                setEmailFormDesc(t('basicStoreEmailDesc'));
                break;
            case 'standard':
                setIsEmailFormOpen(true);
                setEmailFormDesc(t('standardStoreEmailDesc'));
                break;
            case 'premium':
                setIsEmailFormOpen(true);
                setEmailFormDesc(t('premiumStoreEmailDesc'));
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
                        {t('onlineStores')}
                    </h1>
                    <p className="text-xl dark:text-white">
                        {t('ecommerceDescription')}
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
                <h2 className="text-3xl font-bold text-center mb-12">{t('priceList')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        (type == 'basic' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-black hover:dark:border-white " + (type == 'basic' ? " border-white" : "")}>
                                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold">2999 zł</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('upTo100Products')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('adminPanel')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('basicSEO')}
                                    </li>
                                </ul>
                                <Button
                                    variant={'interactive'}
                                    onClick={() => handleTypeChange('basic')}>
                                    {t('pickPackage')}
                                </Button>
                            </div> :
                            <PricingCardSkeleton className="hidden lg:block" />
                    }

                    {
                        (type == 'standard' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-lg flex flex-col bg-primary dark:text-white hover:border-black hover:dark:border-white " + (type == 'standard' ? 'border-white' : '')}>
                                <h3 className="text-2xl font-bold text-center mb-4">Standard</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold">4999 zł</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        {t('upTo1000Products')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        {t('paymentIntegration')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        {t('advancedSEO')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        {t('notificationSystem')}
                                    </li>
                                </ul>
                                <Button
                                    variant={'interactive'}
                                    onClick={() => handleTypeChange('standard')}
                                >
                                    {t('pickPackage')}
                                </Button>
                            </div> :
                            <PricingCardSkeleton className='hidden lg:block' />
                    }

                    {
                        (type == 'premium' || type == '') ?
                            <div className={"border rounded-lg p-6 shadow-md flex flex-col bg-white dark:bg-gray-800 hover:border-black hover:dark:border-white " + (type == 'premium' ? 'border-white' : '')}>
                                <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
                                <div className="text-center mb-6">
                                    <span className="text-4xl font-bold">9999 zł</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('unlimitedProducts')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('loyaltySystem')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('erpIntegration')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-primary mr-2">✓</span>
                                        {t('fullSupport')}
                                    </li>
                                </ul>
                                <Button
                                    onClick={() => handleTypeChange('premium')}
                                    variant={'interactive'}
                                >
                                    {t('pickPackage')}
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
                {isEmailFormOpen && !isEmailSent && (
                    <div className='grid grid-cols-1 gap-8 mt-32 justify-items-center'>
                        <EmailForm description={emailFormDesc} onEmailSent={handleEmailSent} />
                    </div>
                )}
                {isEmailSent && (
                    <div className='text-center mt-32 text-green-500 font-bold'>
                        {t('thankForTheMessage')}
                    </div>
                )}
            </section>

            <section id="whyme" className="mt-24 px-20 lg:px-64 mb-20 lg:mb-32">
                <h2 className="text-3xl font-bold text-center mb-12">{t('whyme')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t('ecommerceTechnologies')}</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>{t('aboutWooCommerce')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>{t('aboutPrestaShop')}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 text-primary">✓</div>
                                <p>{t('aboutShopify')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">{t('realizedProjects')}</h3>
                        <div className="flex flex-col gap-4">
                            <RealizedProject
                                name="K9 Wear" 
                                description={t('k9wearDescription')} 
                                link="https://k9wear.pl"
                            />
                            <RealizedProject
                                name="E-butik" 
                                description={t('ebutikDescription')} 
                            />
                            <RealizedProject
                                name="Kosmetyki naturalne" 
                                description={t('naturalCosmeticsDescription')} 
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <SlideUp />
            <ViewMap
                items={[
                    {
                        id: 'home',
                        name: t('onlineStores')
                    },
                    {
                        id: 'pricing',
                        name: t('priceList')
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

export default EcommerceView;