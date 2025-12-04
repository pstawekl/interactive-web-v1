import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface MapItem {
    id: string;
    name: string;
    onlyMobile?: boolean;
}

interface ViewMapProps {
    items: MapItem[];
}

export const ViewMap: React.FC<ViewMapProps> = ({ items }) => {
    const [activeId, setActiveId] = useState<string>('');

    const handleDotClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setActiveId(id);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            const tolerance = viewportHeight * 0.15; // 15% tolerancji

            for (const item of items) {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementCenter = rect.top + rect.height / 2;
                    const viewportCenter = viewportHeight / 2;

                    if (Math.abs(elementCenter - viewportCenter) < tolerance) {
                        setActiveId(item.id);
                        break;
                    }
                }
            }
        };

        // Sprawdź aktywny element przy pierwszym renderowaniu
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    return (
        <motion.div
            className={cn(
                // Mobile layout; desktop attached to left
                "fixed md:left-5 lg:left-0 z-50",
                "top-6 inset-x-0 mx-auto w-max md:inset-x-auto md:mx-0 md:w-auto md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 lg:top-1/2 md:left-5 lg:left-5 lg:translate-none",
                "flex flex-row md:flex-col gap-4"
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            {/* Connection line for desktop */}
            <motion.div
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                style={{ transform: 'translateX(-50%)' }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                {/* <motion.div
                    className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent"
                    animate={{ y: [0, items.length * 60, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                /> */}
            </motion.div>

            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0], y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button
                        onClick={() => handleDotClick(item.id)}
                        title={item.name}
                        aria-label={`Przejdź do sekcji ${item.name}`}
                        variant="ghost"
                        className={cn(
                            'relative w-3 h-3 md:w-4 md:h-4 p-0 min-w-0 rounded-full border-2 transition-all duration-300',
                            activeId === item.id
                                ? 'border-blue-500 bg-blue-500 shadow-lg shadow-blue-500/50'
                                : 'border-neutral-400 bg-transparent hover:border-blue-400 hover:bg-blue-400/20',
                            item.onlyMobile && 'lg:hidden'
                        )}
                    >
                        <AnimatePresence>
                            {activeId === item.id && (
                                <>
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-blue-500"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1.5, opacity: 0.3 }}
                                        exit={{ scale: 2, opacity: 0 }}
                                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-purple-500"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 2, opacity: 0.2 }}
                                        exit={{ scale: 2.5, opacity: 0 }}
                                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                                    />
                                </>
                            )}
                        </AnimatePresence>

                        {/* Tooltip */}
                        <motion.div
                            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                        >
                            {item.name}
                            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-800" />
                        </motion.div>
                    </Button>
                </motion.div>
            ))}
        </motion.div>
    );
};