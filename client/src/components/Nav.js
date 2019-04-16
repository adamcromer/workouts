import React, { Component } from 'react';

import LoginButtons from './LoginButtons';
import UserInfo from './UserInfo';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  componentDidMount() {
    console.log(window.location.pathname);
    let thisPath = window.location.pathname;
    if (thisPath.includes('workout')) {
      this.setState({
        isAuth: true
      })
    } 
  }

  render() {
    return (

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Workouts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div className="mr-auto">
              {this.state.isAuth ?
                <UserInfo /> : <LoginButtons />}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
  }
}

export default Nav;