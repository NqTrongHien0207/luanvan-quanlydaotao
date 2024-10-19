import React from 'react';
import ScrollToTop from '../scrollToTop/scrollToTop';
import BackToHome from '../backToHome/backToHome';

const Toolip = () => {
  return (
    <div className='fixed  right-[15%]  xl:right-[5%] '  >
      <div className='fixed top-[59.5%] xl:top-[80.5%] ' >
        <ScrollToTop />
      </div>
      <div className='fixed top-[64.5%]  xl:top-[90%] ' >
        <BackToHome />
      </div>


    </div>
  );
};

export default Toolip;