import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Code2, Shield, Target, Users, Zap } from 'lucide-react';
import { useRef } from 'react';

export function Standards() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const standardsRaw = t('standards');
    const standards = Array.isArray(standardsRaw) ? standardsRaw as Array<{
        title: string;
        description: string;
        icon: string;
    }> : [];

    const iconMap: Record<string, any> = {
        'code': Code2,
        'shield': Shield,
        'zap': Zap,
        'target': Target,
        'users': Users,
        'check': CheckCircle2
    };

    return (
        <section ref={ref} className="relative py-16 lg:py-24 overflow-hidden w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 max-w-7xl">
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
                        {ts('standardsTitle')}
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {ts('standardsDescription')}
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {standards.map((standard, index) => {
                        const Icon = iconMap[standard.icon] || CheckCircle2;
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

                                <div className="relative z-10">
                                    <motion.div
                                        className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </motion.div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {standard.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {standard.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

