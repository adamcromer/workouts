import React, { Component } from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";
import './App.css';

class App extends Component {
  state = {
    currentPage: "Home"
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Body
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default App;
