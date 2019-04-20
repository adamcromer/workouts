import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';

class LoginButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div>
                <Button
                    href="/login"
                    variant="light">
                    Login
                    </Button>
                &nbsp;
                    <Button
                    href="/signup"
                    variant="warning">
                    Sign Up
                    </Button>
            </div>

        )
    }
}

export default LoginButtons;