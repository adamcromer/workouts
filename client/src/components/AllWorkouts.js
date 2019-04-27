import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class AllWorkouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        }
    };

    componentDidMount = () => {
        this.loadWorkouts();
    }

    loadWorkouts = () => {
        API.getAllWorkouts()
            .then(res =>
                this.setState({
                    workouts: res.data
                })
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
            <div className="list">
                <h1>List of Workouts</h1>
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
                        {this.state.workouts.map(workout =>
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
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default AllWorkouts;