import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: true,
            username: '',
            email: '',
            userLoaded: false
        }
    }

    logout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.user[0])
        if (prevProps.user[0] !== this.props.user[0]) {
            this.setState({ userLoaded: true });
        }
    }

    render() {
        return (
            <Card bg="dark" text="white" style={{ width: '100%' }}>
                <div className="sidebar">
                <Card.Header as="h5">{
                    this.state.userLoaded ? `@${this.props.user[0].username}` : null
                }</Card.Header>
                <Card.Body>
                    <ButtonGroup vertical style={{ width: '100%' }}>
                        <Button href="/workout/all" variant="warning" size="lg">View Workouts</Button>
                        <Button href="/workout/new" variant="warning" size="lg"><i className="fas fa-plus fa-fw"></i> New Workout</Button>
                        <Button href="/exercise/all" variant="warning" size="lg">View Exercises</Button>
                        <Button href="/exercise/new" variant="warning" size="lg"><i className="fas fa-plus fa-fw"></i> New Exercise</Button>
                        <Button href="/" variant="danger" size="lg" onClick={this.logout}>Log Out</Button>
                    </ButtonGroup>
                </Card.Body>
                </div>
                </Card>
    );
}
}
export default Sidebar;