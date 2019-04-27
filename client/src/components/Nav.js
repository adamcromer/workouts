import React, { Component } from 'react';

// import LoginButtons from './LoginButtons';
// import UserInfo from './UserInfo';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="sticky">
        <Container className="justify-content-center">
          <Navbar.Brand className = "brand-name">
          <a className = "navbar-brand" href="/">Workins
          <img className="nav-logo" alt="Workout Logo" src="/images/Workout-Favicon-Light.png" style={{width:55, marginTop: -5}} />
          </a>
          </Navbar.Brand>
          {/* <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="mr-auto">
                {this.state.isAuth ?
                  <UserInfo /> : <LoginButtons />}
              </div>
            </Navbar.Collapse>
          </div> */}
        </Container>
      </Navbar>
    )
  }
}

export default Nav;

