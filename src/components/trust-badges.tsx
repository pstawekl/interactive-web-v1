import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Headphones, Lock, Shield, Zap } from 'lucide-react';
import { useRef } from 'react';
import ScrollDownButton from './ui/scroll-down-button';

export function TrustBadges() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const badgesRaw = t('trustBadges');
    const badges = Array.isArray(badgesRaw) ? badgesRaw as Array<{
        title: string;
        description: string;
        icon: string;
    }> : [];

    const iconMap: Record<string, any> = {
        'shield': Shield,
        'award': Award,
        'headphones': Headphones,
        'lock': Lock,
        'check': CheckCircle,
        'zap': Zap
    };

    return (
        <section ref={ref} id="trust" className="relative py-16 lg:py-24 overflow-hidden w-full">
            {/* Gradient background matching CallToAction */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-60 pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
            }} />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {ts('trustTitle')}
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {badges.map((badge, index) => {
                        const Icon = iconMap[badge.icon] || Shield;
                        return (
                            <motion.div
                                key={index}
                                className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                                <div className="relative z-10 text-center">
                                    <motion.div
                                        className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {badge.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {badge.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <ScrollDownButton servicesInView={isInView} id="process" />
        </section>
    );
}

