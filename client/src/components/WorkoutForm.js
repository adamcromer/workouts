import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import API from "../utils/API";

class WorkoutForm extends Component {

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
        this.newWorkout();
    }

    newWorkout = () => {
        API.saveWorkout({
            title: this.state.title,
            createdBy: "user",
            description: this.state.description,
        }).then(() => {
            console.log("Saved new Workout");
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="workout-form" onChange={this.handleInputChange}>
                <Container>
                    <h2>Create a Workout</h2>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control as="textarea" rows="1" name="title" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="description" />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Button type="submit" variant="warning" onClick={this.handleSubmit}>Save Workout</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default WorkoutForm;
