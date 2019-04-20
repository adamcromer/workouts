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
            email: ''
        }
    }

    componentDidUpdate() {
        console.log(this.props.user[0])
    }

    render() {
        return (
            <Card bg="dark" text="white" style={{ width: '100%' }}>
                <div className="sidebar">
                <Card.Header as="h5">USERNAME</Card.Header>
                <Card.Body>
                    <ButtonGroup vertical style={{ width: '100%' }}>
                        <Button href="/workout" variant="warning" size="lg">View Workouts</Button>
                        <Button href="/workout" variant="warning" size="lg"><i className="fas fa-plus fa-fw"></i>Workout</Button>
                        <Button href="/workout" variant="warning" size="lg">View Exercises</Button>
                        <Button href="/workout" variant="warning" size="lg"><i className="fas fa-plus fa-fw"></i>Exercise</Button>
                    </ButtonGroup>
                </Card.Body>
                </div>
                </Card>
    );
}
}
export default Sidebar;