import React from 'react';
import Radium from 'radium';
import './HowItWork.css'
import DisplayPres from './DisplayPres/DisplayPres';
import DisplayLogo from './DisplayLogo/DisplayLogo';

const howItWork = () => {
    return (
        <div className="HowItWork" id="presentation">
            <DisplayPres />
            <DisplayLogo />
        </div>
    )   
}

export default Radium(howItWork)