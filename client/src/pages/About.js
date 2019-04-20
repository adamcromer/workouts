import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'



import Container from 'react-bootstrap/Container'

class About extends Component {


    render() {
        return (
          <div className="about">
            <Container>
              <Card className="text-center" bg="dark" text="white" style={{ width: '50rem' }}>
                <Card.Body className="about-description">
                  <h1 className="about-heading">Workouts</h1>
                  <hr />
                  <h3>Workout at home with your favorite workouts.</h3>
                </Card.Body>
               </Card>
              </Container>
          </div>
        );
    }
}
export default About;



