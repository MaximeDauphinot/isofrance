import React from 'react';
import Radium from 'radium';
import './Number.css';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';

const number = () => {
    return (
        <div className="number" id="number">
            <div className="numberContainer">
                <div className="TitleNumbers">
                    <p>LES CHIFFRES NATIONAUX DE LA SOLIDARITÉ ÉNERGÉTIQUE</p>
                </div>
                <div className="Numbers">
                    <div className="numberDesign">
                        <div className="chiffres">
                            <ScrollAnimation 
                                duration={0.75}
                                animateIn='fadeIn'
                                animateOut='fadeOut'
                                className='DotNumber'>
                                <CountUp start={0} end={10258} duration={6} delay={0} separator=" ">
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                            </ScrollAnimation>
                        </div>
                        <p>FAMILLES BÉNÉFICIAIRES</p>
                    </div>
                    <div className="numberDesign">
                        <div className="chiffres">
                            <ScrollAnimation 
                                duration={0.75}
                                animateIn='fadeIn'
                                animateOut='fadeOut'
                                className='DotNumber'>
                                <CountUp start={0} end={21} duration={6} delay={0} separator=" ">
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                            </ScrollAnimation>
                        </div>
                        <p>AGENCES EN FRANCE</p>
                    </div>
                    <div className="numberDesign">
                        <div className="chiffres">
                            <ScrollAnimation 
                                    duration={0.75}
                                    animateIn='fadeIn'
                                    animateOut='fadeOut'
                                    className='DotNumber'>
                                <CountUp start={0} end={750} duration={6} delay={0} separator=" ">
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                            </ScrollAnimation>
                        </div>
                        <p>ÉCONOMIE MOYENNE/AN</p>
                    </div>
                    <div className="numberDesign">
                        <div className="chiffres">
                            <ScrollAnimation 
                                    duration={0.75}
                                    animateIn='fadeIn'
                                    animateOut='fadeOut'
                                    className='DotNumber'>
                                <CountUp start={0} end={8659473} duration={6} delay={0} separator=" ">
                                {({ countUpRef }) => (
                                    <div>
                                        <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                            </ScrollAnimation>
                        </div>
                        <p>PERSONNES ELIGIBLES</p>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Radium(number)