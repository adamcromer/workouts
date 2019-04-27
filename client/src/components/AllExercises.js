import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import API from "../utils/API";

class AllExercises extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            selectedExercise: '',
            modalShow: false
        };
    }

    componentDidMount = () => {
        this.loadExercises();
    }

    loadExercises = () => {
        API.getAllExercises()
            .then(res =>
                this.setState({
                    exercises: res.data
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div className="list">
                <h1>Exercises</h1>
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Tutorial</th>
                            <th>Time</th>
                            {/* <th>Length</th> */}
                            <th>Target</th>
                            <th>Tags</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises.map(exercise =>
                            <tr key={exercise._id}>
                                <td>{exercise.title}</td>
                                <td>{exercise.description}</td>
                                <td>
                                    {exercise.tutorial ? 
                                        <Button href={exercise.tutorial} target="_blank" variant="warning">Tutorial</Button> : 
                                        <Button variant="secondary" disabled>Tutorial</Button> 
                                    }
                                </td>
                                <td>{exercise.time} seconds</td>
                                {/* <td>{exercise.length}</td> */}
                                <td>{(exercise.target).join(", ")}</td>
                                <td>{(exercise.tags).join(", ")}</td>
                                <td>
                                    <Button 
                                    id={exercise._id} 
                                    onClick={e => this.setState({ modalShow: true, selectedExercise: e.target.id }, console.log(e.target.id))} variant="warning" size="lg">
                                        <i className="fas fa-eye"></i>
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.modalShow}
                    onHide={modalClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add to Workout
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Difficulty</th>
                                    <th>Add</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.workouts.map(workout =>
                                    <tr key={workout._id}>
                                        <td>{workout.title}</td>
                                        <td>{workout.description}</td>
                                        <td>{workout.difficulty}</td>
                                        <td>
                                            <Button href={`/workout/${workout._id}`} variant="warning" size="lg"><i className="fas fa-plus"></i></Button>
                                        </td>
                                    </tr>
                                )} */}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        );
    }
}
export default AllExercises;