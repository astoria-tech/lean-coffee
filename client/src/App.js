import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardsContainer from './components/CardsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        < CardsContainer />
      </div>
    );
  }
}

export default App;
