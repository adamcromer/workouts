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
                    variant="primary">
                    Login
                    </Button>
                &nbsp;
                    <Button
                    href="/signup"
                    variant="secondary">
                    Sign Up
                    </Button>
            </div>

        )
    }
}

export default LoginButtons;