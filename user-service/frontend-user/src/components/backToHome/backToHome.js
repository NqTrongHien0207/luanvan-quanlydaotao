import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate từ react-router-dom

const BackToHome = () => {
    const navigate = useNavigate();  // Khởi tạo hook useNavigate

    const handleClick = () => {
        navigate('/');  // Điều hướng về trang chính khi nhấp vào biểu tượng
    };

    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='relative w-9 h-9  xl:w-12 xl:h-12  lg:w-10 lg:h-10'>
            <span
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`absolute hover:bg-indigo-600 cursor-pointer scroll-to-top-button h-full w-full rounded-[5px] 
        bg-gray-500 opacity-70 md:opacity-100 transition-opacity duration-200 flex justify-center items-center text-[18px] xl:text-26 lg:text-20 text-indigo-100`}
            >
                <FaHome />
            </span>

            {isHovered && (
                <div
                    className='absolute text-center text-[17px] w-[150px] top-1/2 right-[125%] transform -translate-y-1/2 text-white text-sm bg-gray-700 p-[12px] rounded-md before:absolute before:right-[-10px] before:top-1/2 before:transform before:-translate-y-1/2 before:border-8 before:border-transparent before:border-l-gray-700'>
                    Trở về trang chủ
                </div>
            )}
        </div>
    );
};

export default BackToHome;
