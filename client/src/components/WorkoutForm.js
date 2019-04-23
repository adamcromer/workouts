import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import API from "../utils/API";

class WorkoutForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        this.setState({validated: true}, this.newWorkout());
    }

    newWorkout = () => {
        API.addWorkoutToCreator(this.props.user[0]._id, {
            title: this.state.title,
            createdBy: this.props.user[0].email,
            description: this.state.description,
            difficulty: this.state.difficulty
        }).then(() => {
            console.log("Saved new Workout");
        }).catch(err => console.log(err));
    }

    render() {
        const { validated } = this.state;

        return (
            <div className="workout-form" onChange={this.handleInputChange}>
                <Container>
                    <Card bg="dark" text="white">
                        <Card.Header variant="dark" as="h2">Create a Workout</Card.Header>
                        <Card.Body>
                            <Form noValidate
                                validated={validated}
                                onChange={this.handleInputChange}
                                onSubmit={e => this.handleSubmit(e)}className="workout-form-padding">
                                <Form.Group controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control as="textarea" rows="1" name="title" />
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="description" />
                                </Form.Group>
                                <Form.Group controlId="difficulty">
                                    <Form.Label>Difficulty</Form.Label>
                                    <Form.Control type="number" min="1" max="5" name="difficulty" />
                                    <Form.Text className="text-muted">
                                        Please enter a number between 1 to 5.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Button type="submit" variant="warning" onClick={this.handleSubmit}>Save Workout</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default WorkoutForm;
