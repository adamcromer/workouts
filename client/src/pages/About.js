import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'



class About extends React.Component {


    render() {
        return (
            <Container>
                <div className = "about">
                <Card className="text-center" bg="dark" text="white" style={{ width: '50rem' }}>
                <Card.Body className = "about-description">
                <span className="about-heading"><h1>Workouts</h1></span>
                <hr />
                <h3>Workout at home with your favorite workouts.</h3>
            </Card.Body>
            </Card>
            </div>
            </Container>
        );
    }
}
export default About;



