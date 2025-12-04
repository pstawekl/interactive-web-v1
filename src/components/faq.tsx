import { useTranslation } from '@/hooks/useTranslation';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useRef, useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
    id?: string;
}

export function FAQ({ items, title, id }: FAQProps) {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section ref={ref} id={id} className="relative py-16 lg:py-24 overflow-hidden w-full">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <HelpCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {title || ts('faqTitle')}
                    </motion.h2>
                </motion.div>

                <div className="space-y-4">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className="group border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.01 }}
                            >
                                <button
                                    className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                        {item.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-6 h-6 text-primary" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

