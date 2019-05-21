import React from 'react';
import Radium from 'radium';
import './Header.css';
import { StickyContainer, Sticky } from 'react-sticky';
import Container from '../Container/Container';
import HeaderContent from './HeaderContent/HeaderContent';


const index = {
    zIndex: 1,
}
 
let returnedTarget

const header = (props) => {
    const style = {
        content: {
            flexDirection: 'column',
            paddingBottom: 0,
            width: 'auto'
        }
    }
    return (
        <StickyContainer style={style.content}>
            <Sticky disableCompensation={true}>{({ style, distanceFromTop }) => (
                <div style={returnedTarget ? returnedTarget = Object.assign(style, index) : returnedTarget = Object.assign(style, index) }>
                    <HeaderContent />
                </div>
                )}
            </Sticky>
            <Container />
        </StickyContainer>
    )
}

export default Radium(header);