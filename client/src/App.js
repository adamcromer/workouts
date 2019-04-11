import React, { Component } from 'react';
import Nav from "./components/Nav";
import './App.css';

class App extends Component {
  state = {
    currentPage: "Home"
  };

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
