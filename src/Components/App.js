import React, { Component } from 'react';
import './App.css';
import Header from '../Containers/Header';
import Intro from '../Containers/Intro';
import Languages from '../Containers/Languages';
import Websites from '../Containers/Websites';


class App extends Component {

  render() {
    return (
      <div className='app'>
      	<Header />
      	<Intro />
      	<Languages />
      	<Websites />
      </div>
    )
  }

};


export default App;
 