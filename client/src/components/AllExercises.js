import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
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

    render() {
        return (
            <div className="list">
                <h1>List</h1>
                List of All Exercises or Workouts
                        <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Tutorial</th>
                            <th>Type</th>
                            <th>Length</th>
                            <th>Target</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exercises.map(exercise =>
                            <tr>
                                <td>{exercise.title}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.tutorial}</td>
                                <td>{exercise.type}</td>
                                <td>{exercise.length}</td>
                                <td>{(exercise.target).join(", ")}</td>
                                <td>{(exercise.tags).join(", ")}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default List;