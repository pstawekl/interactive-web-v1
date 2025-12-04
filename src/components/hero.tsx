import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from '../assets/logo-horizontal.png';

export function Hero() {
    const { t, ts } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id="banner"
            className="relative hero overflow-hidden text-white flex flex-col lg:flex-row gap-8 items-center justify-center min-h-[70vh] lg:min-h-screen p-5 w-full"
        >
            {/* Static gradient background */}
            <div className="absolute inset-0 opacity-30 dark:opacity-40" />
            {/* bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600  */}

            {/* Secondary gradient with subtle mouse movement */}
            <motion.div
                className="absolute inset-0opacity-20 dark:opacity-30 pointer-events-none" // bg-gradient-to-tl from-black-500 via-gray-500 to-black-600 
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />

            {/* Simple animated orbs */}
            {[
                { size: 250, x: 10, y: 20, color: 'black' },
                { size: 300, x: 80, y: 10, color: 'black' },
                { size: 200, x: 20, y: 70, color: 'black' },
            ].map((orb, i) => (
                <motion.div
                    key={`orb-${i}`}
                    className="absolute rounded-full blur-3xl opacity-15 pointer-events-none"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        background: 'black'
                        // orb.color === 'black'
                        //     ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)'
                        //     : 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent)',
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Simple particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => {
                    const positions = [
                        { x: 10, y: 20 }, { x: 80, y: 10 }, { x: 20, y: 70 },
                        { x: 70, y: 60 }, { x: 50, y: 30 }, { x: 90, y: 80 },
                        { x: 30, y: 50 }, { x: 60, y: 40 }, { x: 15, y: 90 },
                        { x: 85, y: 25 }
                    ];
                    const pos = positions[i] || { x: 50, y: 50 };
                    return (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                            }}
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                            }}
                        />
                    );
                })}
            </div>

            {/* Static grid pattern */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    background: 'black',
                    // backgroundImage: `
                    // linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    // linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    // `,
                    backgroundSize: '50px 50px',
                }}
            />

            <div className='relative select-none text-center w-full max-w-[90vw] sm:max-w-[500px] lg:max-w-[1000px] flex flex-col justify-center items-center gap-5 z-10 px-4'>
                <motion.img
                    src={Logo}
                    draggable="false"
                    className='mb-5 w-full max-w-[300px] lg:max-w-[500px] h-auto drop-shadow-2xl'
                    alt="Interactive Logo horizontal"
                    width={500}
                    height={150}
                    loading="eager"
                    fetchPriority="high"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                />

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black dark:text-white font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent break-words drop-shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    {ts('indexBannerTitle')}
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-black dark:text-white font-light break-words drop-shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    {ts('indexBannerSubtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        variant={'interactive'}
                        className="mt-6 relative overflow-hidden group"
                        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: 'start' })}
                        aria-label={ts('learnMore')}
                    >
                        <span className="relative z-10">{ts('learnMore')}</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                        />
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
