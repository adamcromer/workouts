import React, { Component } from 'react';

class LoginButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return ( 

            <InputGroup>
                <FormControl
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    aria-label="Email Address"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button href="/login" variant="primary">Login</Button>
                    <Button href="/signup" variant="secondary">Sign Up</Button>
                </InputGroup.Append>
            </InputGroup>

        )
    }
}

export default LoginButtons;