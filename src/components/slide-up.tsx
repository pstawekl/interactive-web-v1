'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

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
                    className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white transition-all duration-300 hover:shadow-blue-500/50"
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <IoIosArrowUp className="h-7 w-7" />
                    </motion.div>

                    {/* Glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default SlideUp;