import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class AllWorkouts extends Component {

    state = {
        workouts: []
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

    // addToUser = (id) => {
    //     console.log(id);
    // }

    render() {
        return (
            <div className="list">
                <h1>List of Workouts</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Difficulty</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.workouts.map(workout =>
                            <tr key={workout._id}>
                                <td>{workout.title}</td>
                                <td>{workout.description}</td>
                                <td>{workout.difficulty}</td>
                                <td>
                                    <Button href={`/workout/${workout._id}`} variant="warning" size="lg"><i className="fas fa-eye"></i></Button>
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