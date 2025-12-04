import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Shield, Target, Zap } from 'lucide-react';
import { useRef } from 'react';
import ScrollDownButton from './ui/scroll-down-button';

export function About() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const valuesRaw = t('aboutValues');
    const values = Array.isArray(valuesRaw) ? valuesRaw as Array<{ title: string; description: string; icon: string }> : [];
    const achievementsRaw = t('aboutAchievements');
    const achievements = Array.isArray(achievementsRaw) ? achievementsRaw as Array<string> : [];

    return (
        <section ref={ref} id="about" className="relative py-16 lg:py-16 overflow-hidden w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="container pt-24 mx-auto px-4 max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {ts('aboutTitle')}
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {ts('aboutDescription')}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {values.map((value, index) => {
                        const iconMap: Record<string, any> = {
                            'award': Award,
                            'shield': Shield,
                            'zap': Zap,
                            'target': Target
                        };
                        const Icon = iconMap[value.icon] || Award;

                        return (
                            <motion.div
                                key={index}
                                className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div
                                    className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {achievements && achievements.length > 0 && (
                    <motion.div
                        className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-blue-200 dark:border-gray-600"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                            {ts('aboutAchievementsTitle')}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
            <ScrollDownButton servicesInView={isInView} id="stats" />
        </section>
    );
}

