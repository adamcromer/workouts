import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Cover from '../components/Cover';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



class About extends Component {

  render() {
    return (
    <div className="about">
            <Col md-12>
                <Row>
                    <Cover />
                </Row>
                <Row>
                    <div className="about-description">
                        <h1 className="about-heading">Workouts</h1>
                        <hr />
                        <h5>Workouts helps you organize exercises saved through Pinterest, fitness Coaches, or trainings you’ve created that you enjoy and work well for your body.</h5>
                        <br />
                        <h5>Minimal equipment is used with Workouts allowing you to easily squeeze exercise into your daily schedule and reach your overall fitness goals.</h5> 
                        <br />
                        <h5>Enjoy exercising the way you like with Workouts!</h5>
                        </div>
                </Row>
                <div className="cards">
                <Row>
                <CardDeck>
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Img className="card-one" variant="top" src="/images/Save.png" thumbnail/>
                        <Card.Body>
                        <Card.Title>Save Your Exercises</Card.Title>
                        <Card.Text>
                            Keep your favorite exercises all in one place.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Img className="card-two" variant="top" src="/images/Checkmark.png" thumbnail/>
                        <Card.Body> 
                        <Card.Title>Never Miss a Workout</Card.Title>
                        <Card.Text>
                            These workouts are yours. You created them. Get it done.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" text="white" style={{ width: '18rem' }}>
                        <Card.Img className="card-three" variant="top" src="/images/Countdown.png" thumbnail/>
                        <Card.Body>
                        <Card.Title>Track Your Time</Card.Title>
                        <Card.Text>
                            Use our countdown timer to help with intervals.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardDeck>
                </Row>
                </div>
                <Row>
                    <Card className="bg-dark text-white">
                        <Card.Img className="image-footer" src="/images/workoutrun.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title><h1>Join Workouts and Get Moving</h1></Card.Title>
                            <Button href="/SignUp" variant="warning">Sign Up Now</Button>
                        </Card.ImgOverlay>
                        </Card>
                </Row>
            </Col>
     </div>
    );
  }
}
export default About;




