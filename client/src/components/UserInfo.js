import React, { Component } from 'react';

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username
        }
    }

    render() {
        return ( 

            <div>
                <Link to={`/${this.state.username}`}>
                    <h2>{this.state.username}</h2>
                </Link>
                <Button href="/logout" variant="danger">Logout</Button>
            </div>

        )
    }
}

export default UserInfo;