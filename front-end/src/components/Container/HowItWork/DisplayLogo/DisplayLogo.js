import React from 'react';
import Radium from 'radium';
import './DisplayLogo.css';
import Logo from '../../../../assets/logo.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const displayLogo = () => {
    return (
        <div className="DisplayLogo">
            <ScrollAnimation 
                duration={3}
                animateIn='fadeIn'
                animateOut='fadeOut'>
                <img src={Logo} alt="logo" id="logo" className="logo"/>
            </ScrollAnimation>
        </div>
    )   
}

export default Radium(displayLogo)