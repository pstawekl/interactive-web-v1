import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from '@/hooks/useTranslation';

const CallToAction: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    return (
        <section id="callToAction" className="bg-primary-900 py-16 pb-32">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl dark:text-white font-bold mb-4">
                        {t('indexCallToActionTitle')}
                    </h2>
                    <p className="text-lefttext-lg dark:text-white mb-8">
                        {t('indexCallToActionDescription')}
                    </p>
                    <Button onClick={() => navigate({ to: '/contact' })} variant="interactive">{t('contactUs')}</Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;