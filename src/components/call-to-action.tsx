import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from '@tanstack/react-router';

const CallToAction: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="callToAction" className="bg-primary-900 text-white py-16 pb-32">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Rozpocznij swoją przygodę z nami już dziś
                    </h2>
                    <p className="text-lefttext-lg mb-8">
                        Masz pytania? Chcesz rozpocząć współpracę? Skontaktuj się z nami,
                        a my pomożemy Ci osiągnąć Twoje cele.
                    </p>
                    <Button onClick={() => navigate({ to: '/contact' })} variant="interactive">Skontaktuj się</Button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;