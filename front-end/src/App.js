import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Header from './components/Header/Header';
// import Container from './components/Container/Container';


class App extends Component {
  render() {
    return (        
      <StyleRoot>
        <div className="App">
          <Header />
          {/* <Container /> */}
        </div>
      </StyleRoot>  
    );
  }
}

export default Radium(App);
