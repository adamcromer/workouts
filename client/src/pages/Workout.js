import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import List from "../components/List";
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
            .then(res => this.setState({ user: res.data }))
    }

    componentDidUpdate() {
        // console.log(this.state);
    }

    render() {
        return (
            <Router>
                <Container>
                    <div className="Workout">
                        <Row>
                            <Col md={4}>
                                <Sidebar user={this.state.user} />
                            </Col>
                            <Col md={8}>
                                <Switch>
                                    <Route exact path="/exercise/new" 
                                    render={(props) => <ExerciseForm {...props} 
                                    user={this.state.user} />} />
                                    <Route exact path="/workout/new" 
                                    render={(props) => <WorkoutForm {...props} 
                                    user={this.state.user} />} />
                                    <Route exact path="/exercise/view" 
                                    render={(props) => <SingleExercise {...props} 
                                    user={this.state.user} />} />
                                    <Route exact path="/exercise/all" 
                                    render={(props) => <AllExercises {...props} 
                                    user={this.state.user} />} />
                                </Switch>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Router>
        );
    }
}
export default Workout;