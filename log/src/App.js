import React, { Component } from 'react';
import logo from './apple.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Monthly Reading Log</h2>
          <h3>HACK3D</h3>
        </div>
      </div>
    );
  }
}

export default App;
