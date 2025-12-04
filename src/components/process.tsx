import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, Code2, MessageSquare, Palette, Rocket } from 'lucide-react';
import { useRef } from 'react';
import ScrollDownButton from './ui/scroll-down-button';

export function Process() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stepsRaw = t('processSteps');
    const steps = Array.isArray(stepsRaw) ? stepsRaw as Array<{
        number: number;
        title: string;
        description: string;
        icon: string;
    }> : [];

    const iconMap: Record<string, any> = {
        'message': MessageSquare,
        'palette': Palette,
        'code': Code2,
        'rocket': Rocket
    };

    return (
        <section ref={ref} id="process" className="relative py-16 lg:py-24 overflow-hidden w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl h-full sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {ts('processTitle')}
                    </motion.h2>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {ts('processDescription')}
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {steps.map((step, index) => {
                            const Icon = iconMap[step.icon] || CheckCircle;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        {/* Step number circle */}
                                        <motion.div
                                            className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <span className="text-2xl font-bold text-white">{step.number}</span>
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </motion.div>

                                        {/* Icon */}
                                        <motion.div
                                            className="mb-4"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Icon className="w-8 h-8 text-primary" />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <ScrollDownButton servicesInView={isInView} id="caseStudies" />
        </section>
    );
}

