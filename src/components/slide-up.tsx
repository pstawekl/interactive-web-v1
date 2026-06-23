'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const SlideUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const shouldBeVisible = scrollY > 300
        setIsVisible(shouldBeVisible)
    };

    useEffect(() => {
        // Sprawdź przy załadowaniu
        toggleVisibility()

        window.addEventListener('scroll', toggleVisibility, { passive: true })
        document.addEventListener('scroll', toggleVisibility, { passive: true })

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
            document.removeEventListener('scroll', toggleVisibility)
        };
    }, [isVisible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)] transition-all duration-300"
                    aria-label="Przewiń do góry"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowUp className="h-6 w-6" />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default SlideUp;
