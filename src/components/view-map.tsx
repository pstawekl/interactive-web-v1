import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
        <div className={cn(
            // Mobile layout
            "fixed md:left-5 z-50",
            "top-6 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2",
            "flex flex-row md:flex-col gap-4"
        )}>
            {items.map((item) => (
                <Button
                    key={item.id}
                    onClick={() => handleDotClick(item.id)}
                    title={item.name}
                    variant="ghost"
                    className={cn(
                        'w-2 h-2 md:w-3 md:h-3 p-0 min-w-0 rounded-full border-2 border-neutral-400 transition-colors',
                        activeId === item.id ? 'bg-neutral-400' : 'bg-transparent hover:bg-neutral-300', 
                        item.onlyMobile && 'lg:hidden'
                    )}
                />
            ))}
        </div>
    );
};