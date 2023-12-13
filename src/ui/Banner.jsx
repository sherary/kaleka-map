import React from 'react';
import banner from './assets/kaleka-copyright-banner.png';

const Banner = () => {
    return (
        <div className='w-full mx-auto'>
            <img src={banner} alt="kaleka banner" className='w-full h-auto'/>
        </div>
    )
}

export default Banner;