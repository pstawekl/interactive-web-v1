import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

type Language = 'pl' | 'en';

export default function LanguagePicker() {
    const { currentLanguage, setLanguage } = useLanguage();
    const { ts } = useTranslation();
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage as Language);
        document.documentElement.lang = newLanguage;
    };

    return (
        <div className="h-auto relative group">
            <TooltipProvider>
                <Tooltip open={isSelectOpen ? false : undefined}>
                    <TooltipTrigger asChild>
                        <div>
                            <Select
                                value={currentLanguage}
                                onValueChange={handleLanguageChange}
                                onOpenChange={setIsSelectOpen}
                            >
                                <SelectTrigger className="w-min h-min bg-white/10 text-black-900 border-white/20">
                                    <SelectValue placeholder="Select a language" />
                                </SelectTrigger>
                                <SelectContent className='z-50 bg-black/10 border-white/20 curosor-pointer w-min'>
                                    <SelectItem className='cursor-pointer hover:bg-white/30 text-black-900' value="pl">PL</SelectItem>
                                    <SelectItem className='cursor-pointer hover:bg-white/30 text-black-900' value="en">ENG</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{ts('pickLanguage')}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
