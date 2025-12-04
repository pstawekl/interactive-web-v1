import { useTranslation } from '@/hooks/useTranslation';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Calendar, Clock, Code, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import ScrollDownButton from './ui/scroll-down-button';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
    const { t, ts } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        {
            icon: Calendar,
            value: 7,
            suffix: '+',
            label: t('statsYears'),
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Code,
            value: 45,
            suffix: '+',
            label: t('statsProjects'),
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Users,
            value: 98,
            suffix: '%',
            label: t('statsClients'),
            color: 'from-pink-500 to-red-500'
        },
        {
            icon: Clock,
            value: 4,
            suffix: '-6',
            label: t('statsTime'),
            color: 'from-cyan-500 to-blue-500'
        }
    ];

    return (
        <section ref={ref} id="stats" className="relative py-16 lg:py-24 overflow-hidden w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {ts('statsTitle')}
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                                <div className="relative z-10 text-center">
                                    <motion.div
                                        className={`inline-flex p-4 rounded-full bg-gradient-to-br ${stat.color} mb-4`}
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    <div className={`text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                        {index === 3 ? (
                                            <span>4-6</span>
                                        ) : (
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        )}
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                                        {stat.label.toString()}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <ScrollDownButton servicesInView={isInView} id="offer" />
        </section>
    );
}

