import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
      <h1 style = {{fontSize: 80, textAlign: 'center', fontFamily: 'times'}}>Timer</h1>
      <Timer/>
      </div>
    );
  }
}

export default App;
