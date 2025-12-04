import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useRef } from 'react';
import ScrollDownButton from './ui/scroll-down-button';

export function Testimonials() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const testimonialsRaw = t('testimonials');
    const testimonials = Array.isArray(testimonialsRaw) ? testimonialsRaw as Array<{
        name: string;
        role: string;
        rating: number;
        text: string;
    }> : [];

    return (
        <section id="testimonials" ref={ref} className="relative py-16 lg:py-24 overflow-hidden w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
                        {ts('testimonialsTitle')}
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-12 h-12 text-primary" />
                            </div>

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                                "{testimonial.text}"
                            </p>

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ScrollDownButton servicesInView={isInView} id="callToAction" />
        </section>
    );
}

