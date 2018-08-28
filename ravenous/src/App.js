import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Business from './components/Business/Business.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Restaurant Finder!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Business />
      </div>
    );
  }
}

export default App;
