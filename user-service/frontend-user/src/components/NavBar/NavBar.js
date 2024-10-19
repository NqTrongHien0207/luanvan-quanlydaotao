import React from 'react';
import './../../App.css';
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='bg-indigo-600 h-[70px] md:h-[88px] w-full flex items-center '>
      <div className='w-full max-w-7xl lg:mx-60 md:mx-auto  sm:mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <img className='h-10 md:h-14' src="/htql-ctu.png" alt="Logo CTU" />
        </div>
        <div className='flex flex-col items-end'>
          <div className='mb-1'>
            <span className='text-gray-100 text-xs sm:text-sm md:text-base'>Nguyễn Trọng Hiền(B2012206)</span>
          </div>
          <div>
            <button className='bg-blue-200 py-1 px-3 flex items-center rounded-md text-xs sm:text-sm md:text-base'>
              <span className='mr-2 text-sm sm:text-base md:text-lg'>
                <FiLogOut />
              </span>
              <span className='text-blue-950'>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
