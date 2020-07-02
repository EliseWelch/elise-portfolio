import React, { Component } from 'react';
import './App.css';
import Header from '../Containers/Header';
import Intro from '../Containers/Intro';
import Languages from '../Containers/Languages';
import Websites from '../Containers/Websites';
import websites from '../websites';


class App extends Component {
  constructor() {
    super();
    this.state = {
      websites: websites
     };
  };

  render() {
    return (
      <div className='app'>
      	<Header />
      	<Intro />
      	<Languages />
      	<Websites websites={this.state.websites}/>
      </div>
    )
  }

};


export default App; 
 