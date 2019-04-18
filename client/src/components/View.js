import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';

import API from "../utils/API";

class View extends React.Component {

    state = {
        exercise: {}
    };

    componentDidMount = () => {
        this.loadExercise("5cb551ff71fef32900974d24");
    }

    loadExercise = (id) => {
        console.log("loadExercise loaded");
        API.getOneExercise(id)
            .then(res =>
                // console.log(res.data.title),
                this.setState({
                    exercise: res.data
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
            <div className = "view-exercise">
                <h1>View Exercise</h1>
                      <Row>
                          <Col>
                          <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Length</th>
                            <th>Full Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
                          </Col>
                      </Row>
                      <Button type="submit" variant="warning" onClick={this.handleSubmit}>Edit Exercise</Button>
              </div>
              <div className = "view-workout">
                <h1>View Workout</h1>
                      <Row>
                          <Col>
                          < ReactCountdownClock />
                          <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Length</th>
                            <th>Full Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
                          </Col>
                      </Row>
              </div>
              <Button type="submit" variant="warning" onClick={this.handleSubmit}>Start Timer</Button>
              <Button type="submit" variant="warning" onClick={this.handleSubmit}>Edit Workout</Button>
              </Container>
                <div className="view">
                    <h1>View</h1>
                    <Row>
                        <Col>
                            View of Single Exercise or Workout
                            <ReactCountdownClock />
                            <h1>{this.state.exercise.title}</h1>
                            <h2>{this.state.exercise.author}</h2>
                            <p>{this.state.exercise.description}</p>
                            <p>{this.state.exercise.tutorial}</p>
                            <h2>{this.state.exercise.type}</h2>
                            <h2>{this.state.exercise.length}</h2>
                            <h2>{this.state.exercise.target}</h2>
                            <h2>{this.state.exercise.tags}</h2>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
export default View;