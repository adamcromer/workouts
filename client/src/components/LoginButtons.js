import React, { Component } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class LoginButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <ButtonGroup aria-label="Basic example">
                <Button href="/login" variant="warning">Log In</Button>
                <Button href="/signup" variant="secondary">Sign Up</Button>
            </ButtonGroup>

        )
    }
}

export default LoginButtons;