import { useTranslation } from '@/hooks/useTranslation';
import { useNavigate } from '@tanstack/react-router';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Button } from './ui/button';

const CallToAction: React.FC = () => {
    const navigate = useNavigate();
    const { ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px" });

    return (
        <section id="callToAction" className="relative py-24 lg:py-32 overflow-hidden w-full">
            {/* Animated gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animated-gradient"
            />

            {/* Animated overlay pattern */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
                animate={{
                    x: [0, 40, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => {
                const getRandomX = () => typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000;
                const getRandomY = () => typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800;
                const randomX = getRandomX();
                const randomY = getRandomY();
                const targetX = getRandomX();
                const targetY = getRandomY();
                return (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                        initial={{
                            x: randomX,
                            y: randomY,
                            opacity: 0.3,
                        }}
                        animate={{
                            x: targetX,
                            y: targetY,
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: Math.random() * 2,
                        }}
                    />
                );
            })}

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                    >
                        {ts('indexCallToActionTitle')}
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-white/90 mb-10 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {ts('indexCallToActionDescription')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            onClick={() => navigate({ to: '/contact' })}
                            variant="interactive"
                            className="relative overflow-hidden group text-lg px-8 py-6 bg-white hover:bg-gray-100 dark:bg-gray-900 text-white hover:bg-gray-800"
                            aria-label={ts('contactUs')}
                        >
                            <span className="relative z-10 font-semibold">{ts('contactUs')}</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={false}
                            />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;