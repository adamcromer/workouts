import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import API from "../utils/API";

class WorkoutSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            workouts: [],
            workoutId: ''
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            workouts: ''
        }, this.searchForTerm(this.state.searchTerm));
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchForTerm(this.state.searchTerm);
    }

    searchForTerm = (term) => {
        API.searchWorkouts(term)
            .then(res =>
                this.setState({
                    workouts: res.data
                }, console.log(this.state))
            )
            .catch(err => console.log(err));
    }

    addToUser = (workoutId) => {
        console.log('user', this.props.user[0]._id);
        console.log('workout', workoutId);
        API.addWorkoutToUser(this.props.user[0]._id, {
            id: workoutId
        })
        .then(() =>
            console.log('Added to User')
        )
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="workout-form" >
                <Container>
                    <Card bg="dark" text="white">
                        <Card.Header variant="dark" as="h2">Search for a Workout</Card.Header>
                        <Card.Body>
                            <Form inline
                                onChange={this.handleInputChange}
                                className="mb-2">
                                <Form.Control type="text" name="searchTerm" placeholder="Search" className="mr-sm-2" style={{ width: 'calc(75% - 0.5rem)' }} />
                                <Button variant="warning" onClick={this.handleSubmit} style={{ width: '25%' }}>Search</Button>
                            </Form>

                            <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Difficulty</th>
                                        <th>Save</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.workouts ? this.state.workouts.map(workout =>
                                        <tr key={workout._id}>
                                            <td>{workout.title}</td>
                                            <td>{workout.description}</td>
                                            <td>{workout.difficulty}</td>
                                            <td>
                                            <Button
                                                id={workout._id}
                                                onClick={e => this.setState({ modalShow: true, selectedWorkout: e.target.id }, this.addToUser(e.target.id))} variant="warning" size="lg">
                                                <i className="fas fa-plus"></i>
                                            </Button>
                                            </td>
                                        </tr>
                                    ) :
                                        (<tr><td colspan="4" style={{ textAlign: 'center' }}>
                                            <Spinner animation="border" variant="warning" />
                                        </td></tr>)}
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default WorkoutSearch;
