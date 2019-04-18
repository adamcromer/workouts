import React, { Component } from 'react';
import Sidebar from "../components/Sidebar";
import List from "../components/List";
import View from "../components/View";
import Container from 'react-bootstrap/Container';
import ExerciseForm from '../components/ExerciseForm';
import WorkoutForm from '../components/WorkoutForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Workout extends Component {

    render() {
        return (
            <Container>
              <div className="Workout">
                <h3>Create a Workout</h3>
                
                <Row>
                    <Col md={4}>
                        <Sidebar/>
                    </Col>
                    <Col md={8}>
                        <ExerciseForm />
                        <WorkoutForm />
                        <List />
                        <View />   
                    </Col>
                </Row>
              </div>
            </Container>
        );
    }
}
export default Workout;