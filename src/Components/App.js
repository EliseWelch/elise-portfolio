import React, { Component } from 'react';
import './App.css';
import Header from '../Containers/Header';
import Intro from '../Containers/Intro';


class App extends Component {

  render() {
    return (
      <div className='app'>
      	<Header />
      	<Intro />
      </div>
    )
  }

};


export default App;
 