import React from 'react';
import Radium from 'radium';
import './Banner.css'
import logo1 from '../../../assets/logo-cite.png';
import logo2 from '../../../assets/logo-acermi.png';
import logo3 from '../../../assets/logo-conseils.png';
import logo4 from '../../../assets/logo-gdf-suez.png';
import logo5 from '../../../assets/logo-rge.png';

const banner = () => {
    return (
        <div className="banner" id="banner">
            <div className="alignImage">
                <img src={logo1} alt="logo-cite"/>
            </div>
            <div className="alignImage">
                <img src={logo2} alt="logo-acermi"/>
            </div>
            <div className="alignImage">
                <img src={logo3} alt="logo-conseils"/>
            </div>
            <div className="alignImage">
                <img src={logo4} alt="logo-gdf-suez"/>
            </div>
            <div className="alignImage">
                <img src={logo5} alt="logo-rge"/>
            </div>
        </div>
    )   
}

export default Radium(banner)