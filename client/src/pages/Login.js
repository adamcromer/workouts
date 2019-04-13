import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class Login extends React.Component {
    state = {
        validated: false,
        user: [],
        email: "",
        password: "",
        isAuth: false
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
        this.setState({ validated: true }, this.validateUser());
    }

    validateUser = () => {

        API.findUser(this.state.email)
            .then(res =>
                this.setState({
                    user: res.data
                })
            )
            .then(() => {
                console.log(this.state.user[0].password, this.state.password)
                if (this.state.user[0].password === this.state.password) {
                    console.log("Password Match");
                    this.setState({
                        isAuth: true
                    });
                } else {
                    console.log("Password Incorrect")
                }
            })
            .catch(() =>
                this.setState({
                    user: [],
                    message: "No user found"
                })
            );
    }

    render() {
        return (

            <Form onChange={this.handleInputChange}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        )
    }
}
export default Login;