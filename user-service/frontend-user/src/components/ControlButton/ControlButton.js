import React from 'react';
import BackToHome from '../../components/backToHome/backToHome';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';

const ControlButton = () => {
    return (
        <div className='fixed bottom-10 right-10'>
            <div className='' ><ScrollToTop /></div>
            <div className='' ><BackToHome /></div>
        </div>

                
    );
};

export default ControlButton;