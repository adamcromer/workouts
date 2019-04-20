import React, { Component } from 'react';
import Sidebar from "../components/Sidebar";
import List from "../components/List";
import SingleExercise from "../components/SingleExercise";
import AllExercises from "../components/AllExercises";
import Container from 'react-bootstrap/Container';
import ExerciseForm from '../components/ExerciseForm';
import WorkoutForm from '../components/WorkoutForm';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import API from '../utils/API';

class Workout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: true,
            user: []
        }
    }

    componentDidMount() {
        API.findUser(this.props.email)
            .then(res => this.setState({ user: res.data }) )
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <Container>
                <div className="Workout">
                    <Row>
                        <Col md={4}>
                            <Sidebar />
                        </Col>
                        <Col md={8}>
                            <ExerciseForm user={this.state.user}/>
                            <WorkoutForm user={this.state.user}/>
                            <List />
                            <SingleExercise user={this.state.user}/>
                            <AllExercises user={this.state.user}/>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
export default Workout;