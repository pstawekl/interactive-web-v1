'use client';

import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const SlideUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {

            
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded shadow-lg bg-white text-blue-500 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-xl"
                    aria-label="Scroll to top"
                >
                    <IoIosArrowUp className="h-6 w-6" />
                </button>
            )}
        </>
    );
};

export default SlideUp;