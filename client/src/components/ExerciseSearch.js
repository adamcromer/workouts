import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
import API from "../utils/API";

class ExerciseSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            exercises: []
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            exercises: ''
        }, this.searchForTerm(this.state.searchTerm));
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchForTerm(this.state.searchTerm);
    }

    searchForTerm = (term) => {
        API.searchExercises(term)  
            .then(res =>
                this.setState({
                    exercises: res.data
                }, console.log(this.state))
            )
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="workout-form" >
                <Container>
                    <Card bg="dark" text="white">
                        <Card.Header variant="dark" as="h2">Search for an Exercise</Card.Header>
                        <Card.Body>
                            <Form inline
                                onChange={this.handleInputChange}
                                className="mb-2">
                                <Form.Control type="text" name="searchTerm" placeholder="Search" className="mr-sm-2" style={{ width: 'calc(75% - 0.5rem)' }}/>
                                <Button variant="warning" onClick={this.handleSubmit} style={{ width: '25%' }}>Search</Button>
                            </Form>

                            <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Tutorial</th>
                                        <th>Target</th>
                                        <th>Tags</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.exercises ? this.state.exercises.map(exercise =>
                                        <tr key={exercise._id}>
                                            <td>{exercise.title}</td>
                                            <td>{exercise.description}</td>
                                            <td>
                                                {exercise.tutorial ?
                                                    <Button href={exercise.tutorial} target="_blank" variant="warning">Tutorial</Button> :
                                                    <Button variant="secondary" disabled>Tutorial</Button>
                                                }
                                            </td>
                                            <td>{(exercise.target).join(", ")}</td>
                                            <td>{(exercise.tags).join(", ")}</td>
                                        </tr>
                                    ) : (<tr><td>No results!</td></tr>)}
                                </tbody>
                            </Table>

                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ExerciseSearch;
