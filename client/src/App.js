import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Workout from "./pages/Workout";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import withAuth from './components/withAuth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Home"
    };
  }

  render() {
    // const isAuth = this.state.isAuth;
    return (
      <Router>
        <div className="App">
          <Nav />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/workout" component={withAuth(Workout)} />
              <Route path="/exercise" component={withAuth(Workout)} />
              <Route component={Error} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
