import React from 'react';
import ScrollToTop from '../scrollToTop/scrollToTop';
import BackToHome from '../backToHome/backToHome';

const Toolip = () => {
  return (
    <div className='fixed  right-[15%]  xl:right-[5%] '  >
      <div className='fixed top-[59.5%] xl:top-[80.5%] lg:top-[80%] lg:right-[2%] md:top-[73%] md:right-[3%]  
                      xs:top-[63%] xs:right-[4%] ' >
        <ScrollToTop />
      </div>
      <div className='fixed top-[64.5%]  xl:top-[90%]  lg:top-[90%] lg:right-[2%] md:top-[85%] md:right-[3%]  
                      xs:top-[80%] xs:right-[4%]' >
        <BackToHome />
      </div>


    </div>
  );
};

export default Toolip;