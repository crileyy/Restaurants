import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/Business/BusinessList/BusinessList.js';
import SearchBar from './components/Business/SearchBar/SearchBar.js';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
  searchYelp(term, location, sortBy) {
    console.log("Searching yelp for " + term + " " + location + " " + sortBy);
  }

  render() {
    return (
      <div className="App">
        <h1>Restaurant Finder</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
