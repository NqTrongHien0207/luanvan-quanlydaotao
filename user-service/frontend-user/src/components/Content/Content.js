import React from 'react';

const MyComponent = ({ children }) => {
  return (
    <div className='bg-white w-auto h-auto text-14  shadow-lg  lg:mx-[240px] lg:mt-6 lg:rounded-lg '>
      {children}
    </div>
  );
};

export default MyComponent;
