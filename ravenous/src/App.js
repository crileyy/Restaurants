import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/Business/BusinessList/BusinessList.js';
import SearchBar from './components/Business/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Restaurant Finder</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
