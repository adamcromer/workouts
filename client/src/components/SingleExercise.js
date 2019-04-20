import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import API from "../utils/API";

class SingleExercise extends Component {

    state = {
        exercise: {}
    };

    componentDidMount = () => {
        // this.loadExercise("5cb551ff71fef32900974d24");
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
                            {/* <h2>{(this.state.exercise.target).join(", ")}</h2>
                            <h2>{(this.state.exercise.tags).join(", ")}</h2> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
export default SingleExercise;