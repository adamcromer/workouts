import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import LoginButtons from '../components/LoginButtons';

class About extends Component {

  render() {
    return (
      <div className="about">

        <Card className="text-center" bg="dark" text="white" style={{ width: '100%' }}>
          <Container>
            <Card.Body className="about-description">
              <h1 className="about-heading">Workouts</h1>
              <hr />
              <h3>Workout at home with your favorite workouts.</h3>
              <LoginButtons />
            </Card.Body>
          </Container>
        </Card>
      </div>
    );
  }
}
export default About;



