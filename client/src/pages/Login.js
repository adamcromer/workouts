import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.findUser()
            .then(res =>
                this.setState({
                    email: res.email,
                    password: res.password
                })
            )
            .catch(() =>
                this.setState({
                    email: [],
                    message: "No email found"
                })
            );
    console.log(this.state.email, this.state.password);
    }

    render() {
        return (

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" email={this.state.email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" password={this.state.password} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                    Submit
                </Button>
            </Form>
        )
    }
}
export default Login;