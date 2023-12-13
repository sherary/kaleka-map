import React from 'react';
import logo from './assets/logo_kuning_kaleka.png';

const Logo = () => {
    return (
        <div className="relative">
            <img src={logo} alt="logo kaleka" className="absolute w-logo h-logo p-1"/>
        </div>
    )
}

export default Logo;