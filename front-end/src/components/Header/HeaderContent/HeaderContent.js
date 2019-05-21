import React from 'react';
import Radium from 'radium';
import './HeaderContent.css';

const HeaderContent = () => {
    return (
        <div className="HeaderContent">
            <div className="headeralign">
                <div className="HeaderContainer">
                    <div className="headertitle">
                        <h1>ISOFRANCE</h1>
                    </div>
                    <div className="headerlink">
                        <div className="column">
                            <a href="#formulary"><h2>Faire le test</h2></a>
                        </div>
                        <div className="column">
                            <a href="#banner"><h2>Présentation</h2></a>
                        </div>
                        <div className="column">
                            <a href="#Demarche"><h2>Demarche</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radium(HeaderContent);