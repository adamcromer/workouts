import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "Username"
        }
    }

    render() {
        return ( 

            <div>
                <a href={`/${this.state.username}`}>
                    <strong>{this.state.username}</strong>
                </a>
                &nbsp;<Button href="/logout" variant="warning">Logout</Button>
            </div>

        )
    }
}

export default UserInfo;