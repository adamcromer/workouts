import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'




class Sidebar extends React.Component {


    render() {
        return (
            <Card bg="dark" text="white" style={{ width: '13.5rem' }}>
                <div className = "sidebar">
                <Card.Header as="h5">User Name</Card.Header>
                <Card.Body>
                    <ButtonGroup vertical center>
                        <Button href="/workout" variant="warning" size="lg">Your Workouts</Button>
                        <Button href="/workout" variant="warning" size="lg">Create Exercise</Button>
                        <Button href="/workout" variant="warning" size="lg">Create Workout</Button>
                        <Button href="/workout" variant="warning" size="lg">Edit</Button>
                        <Button vhref="/workout" variant="warning" size="lg">Save</Button>
                    </ButtonGroup>
                </Card.Body>
                </div>
                </Card>
    );
}
}
export default Sidebar;