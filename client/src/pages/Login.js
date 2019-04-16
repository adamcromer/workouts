import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import API from "../utils/API";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            // user: [],
            email: "",
            password: "",
            // isAuth: false
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        this.setState({ validated: true }, this.onSubmit(event));
    }

    onSubmit = event => {
        event.preventDefault();
        // alert('Authentication underway!');

        fetch('/api/user/auth', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/workout');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Login error. Please try again later.');
            });
    }

    // validateUser = () => {

    //     API.findUser(this.state.email)
    //         .then(res =>
    //             this.setState({
    //                 user: res.data
    //             })
    //         )
    //         .then(() => {
    //             console.log(this.state.user[0].password, this.state.password)
    //             if (this.state.user[0].password === this.state.password) {
    //                 console.log("Password Match");
    //                 this.setState({
    //                     isAuth: true
    //                 });
    //             } else {
    //                 console.log("Password Incorrect")
    //             }
    //         })
    //         .catch(() =>
    //             this.setState({
    //                 user: [],
    //                 message: "No user found"
    //             })
    //         );
    // }

    render() {

        const { validated } = this.state;

        return (
            <div className="login">
                <Container>
                    <h2>Log In to Workouts</h2>
                    <Form 
                        noValidate
                        validated={validated}
                        onChange={this.handleInputChange}
                        onSubmit={e => this.handleSubmit(e)}>

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

                        <Button variant="dark" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default Login;