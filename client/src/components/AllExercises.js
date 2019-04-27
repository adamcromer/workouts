import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class AllExercises extends Component {

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
                            {/* <th>View</th> */}
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
                                {/* <td>
                                    <Button href={`/exercise/${exercise._id}`} variant="warning" size="lg"><i className="fas fa-eye"></i></Button>
                                </td> */}
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default AllExercises;