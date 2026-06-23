import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

interface RealizedProjectProps {
    name: string;
    description: string;
    link?: string;
    results?: Array<{
        label: string;
        value: string;
        icon?: 'trending' | 'users' | 'clock' | 'check';
    }>;
}

export const RealizedProject = ({ name, description, link, results }: RealizedProjectProps) => {
    const iconMap = {
        trending: TrendingUp,
        users: Users,
        clock: Clock,
        check: CheckCircle
    };

    const content = (
        <motion.div 
            className="border-l-4 border-primary pl-4 relative overflow-hidden group hover:rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02, x: 5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5 transition-transform duration-300 -translate-x-full group-hover:translate-x-0 -z-10"></div>
            <h4 className="font-semibold text-zinc-100 mb-2">{name}</h4>
            <p className="text-zinc-400 mb-3">{description}</p>
            
            {results && results.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-3">
                    {results.map((result, index) => {
                        const Icon = result.icon ? iconMap[result.icon] : TrendingUp;
                        return (
                            <motion.div
                                key={index}
                                className="flex items-center gap-1.5 px-2 py-1 bg-zinc-800/80 rounded-md text-xs font-medium text-zinc-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.2 }}
                            >
                                <Icon className="w-3 h-3 text-primary" />
                                <span className="font-semibold text-primary">{result.value}</span>
                                <span>{result.label}</span>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }
    
    return content;
}