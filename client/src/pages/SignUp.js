import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import API from '../utils/API';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            username: '',
            email: '',
            password: ''
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        this.setState({ validated: true }, this.registerUser());
    }

    registerUser = () => {
        API.saveUser({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then(
            this.props.history.replace('/login')
        )
    }

    render() {

        const { validated } = this.state;

        return (
            <div className="signup">
                <Container>
                    <h2>Sign Up for Workouts</h2>
                    <Form
                        noValidate
                        validated={validated}
                        onChange={this.handleInputChange}
                        onSubmit={e => this.handleSubmit(e)}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                defaultValue={this.state.email}
                                required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Enter username"
                                required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default SignUp;