import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class List extends Component {

    state = {
        exercises: []
    };

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

    addToWorkouts = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className="list">
                <h1>List</h1>
                List of Workouts
                        <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Length</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises.map(exercise =>
                            <tr key={exercise._id}>
                                <td>{exercise.title}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.type}</td>
                                <td>{exercise.length}</td>
                                <td>
                                    <Button href={`/workouts/views/${exercise._id}`} variant="warning" size="lg"><i className="fas fa-eye"></i></Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default List;