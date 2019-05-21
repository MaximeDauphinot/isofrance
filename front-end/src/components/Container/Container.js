import React , { Component }from 'react';
import Radium from 'radium';
import './Container.css';
import Formulary from './Formulary/Formulary';
import HowItWork from './HowItWork/HowItWork';
import WayToDo from './WayToDo/WayToDo';
import Banner from './Banner/Banner';
import Number from './Number/Number';

class Container extends Component {
    render() {
        return (
            <div className="bigContainer">
                <div className="container" id="formulary">
                    <Formulary />
                </div>
                <Banner />
                <HowItWork />
                <Number />
                <WayToDo />
            </div>
        )
    }
  }

export default Radium(Container);