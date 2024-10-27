import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsHovered(false); // Reset trạng thái hover sau khi bấm
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) { // Hiển thị nút khi cuộn xuống
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`relative w-9 h-9 xl:w-12 xl:h-12  lg:w-10 lg:h-10 md:w-8 md:h-8   mb-3 ${isVisible ? 'block' : 'hidden'}`}>
            <span
                onClick={handleScrollToTop}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`absolute cursor-pointer scroll-to-top-button h-full w-full rounded-[5px] transition-opacity duration-200 
        ${isHovered ? 'bg-indigo-600' : 'bg-gray-500'} 
        opacity-70 md:opacity-100 flex justify-center items-center text-[18px] xl:text-26 lg:text-20 md:text-16   text-indigo-100`}
            >
                <FaArrowCircleUp />
            </span>



            {/* Tooltip for desktop only */}
            {isHovered && (
                <div
                    className='hidden md:block absolute text-center text-[17px]  w-[150px] top-1/2 right-[125%]
                    transform -translate-y-1/2 text-white text-sm bg-gray-700 p-[12px] rounded-md before:absolute
                    before:right-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:border-8
                    before:border-transparent before:border-l-gray-700'>
                    Trở về đầu trang
                </div>
            )}

            {/* Tooltip for mobile */}
            {isHovered && (
                <div
                    className='md:hidden absolute text-center text-[14px] w-[120px] top-1/2 right-[125%]
                    transform -translate-y-1/2 text-white text-xs bg-gray-700 p-[8px] rounded-md before:absolute
                    before:right-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:border-6
                    before:border-transparent before:border-l-gray-700'>
                    Trở về đầu trang
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
