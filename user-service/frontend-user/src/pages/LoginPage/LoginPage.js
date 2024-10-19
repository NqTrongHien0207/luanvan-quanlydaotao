import React from 'react';
// import LogoLogin from "./../../assets/desktop/images/logo-login.jpg"
import Cards from "./../../assets/desktop/images/logo-login.svg";

import { IoIosWarning } from "react-icons/io";



// import Toastify from 'toastify-js';
// import "toastify-js/src/toastify.css"; 


const LoginPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 text-gray-900 flex justify-center  ">
      <div className="max-w-screen-xl  m-0 sm:m-10 bg-white shadow sm:rounded-lg  flex justify-center flex-1">
        <div className="relative flex h-fit 2xl:h-auto xl:h-auto  flex-col justify-center items-center lg:w-1/2  xl:w-5/12 p-6 sm:p-12">

          {/* <div className='bg-white h-[70px] w-full absolute top-0 pl-2 pointer-events-none lg:w-full lg:pl-2 sm:w-1/2 sm:pl-0 xs:w-1/2 xs:pl-0  xxs:w-1/2 xxs:pl-0  2xs:w-1/2 2xs:pl-0 '  >
            <img className=' h-16' src="/logo-ctu-login.png" alt="Logo CTU" />
          </div>

          <div className='bg-white w-full h-[60px] mb-6 mt-[-48.5px]' >

          </div> */}

          {/* Logo khi màn hình nhỏ (xs) */}
          <div className='bg-white h-[70px] w-full absolute top-0 pl-2 block lg:hidden pointer-events-none sm:w-1/2 sm:pl-0 sm:mr-4 xs:w-1/2 xs:pl-0 xs:mr-[26px] 2xs:mt-3  xxs:w-1/2 xxs:pl-0  2xs:w-1/2 2xs:pl-0 2xs:mr-[26px]'>
            <img className=' h-16 w-full ' src="/logo-ctu-login.png" alt="Logo CTU" />
          </div>
          <div className='bg-white w-full h-[60px] lg:mb-0 xl:mb-0 sm:mb-12 xs:mb-24 xxs:mb-24 2xs:mb-24 mt-[-48px]'>

          </div>



          <div className="-mt-4  flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl  font-extrabold">
              Đăng nhập
            </h1>
            <div className="w-full flex-1 mt-6">
              <hr className="mb-12 mt-6 border-b text-center" ></hr>
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Mã số đăng nhập"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Mật khẩu"
                />
                <div className="w-full  flex justify-center" >
                  <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100  w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                      Đăng nhập
                    </span>
                  </button>
                </div>
                <div className='mt-12 text-16 text-gray-600' >
                  <p className='flex mb-2 items-center' >
                    <IoIosWarning className='mr-2' />
                    Chú ý:
                  </p>
                  <ol className='ml-4 list-decimal'>
                    <li>Mã số và mật khẩu được cấp bởi phòng quản lý đào tạo.</li>
                    <li>Liên hệ với phòng quản lý đào tạo nếu quên mật khẩu.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative  pointer-events-none flex-1 bg-indigo-100 text-center pt-12 hidden lg:flex items-center justify-center">


          <div className='bg-blue-150  pointer-events-none h-[70px] w-full absolute top-2 pl-2  flex justify-center'  >
            <img className=' h-20' src="/logo-ctu-login.png" alt="Logo CTU" />
          </div>




          <div className=" xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img className="mt-0" src={Cards} alt="Logo-Login" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;