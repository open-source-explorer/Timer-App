import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
      <h1 style = {{fontSize: 50, textAlign: 'center', fontFamily: 'times'}}>Time you had spend here:</h1>
      <Timer/>
      </div>
    );
  }
}

export default App;
