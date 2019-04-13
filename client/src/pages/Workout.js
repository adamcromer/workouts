import React, { Component } from 'react';
import List from "../components/List";
import View from "../components/View";
import Table from "../components/Table";
import { Col, Row, Container } from "../components/Grid";


class Workout extends React.Component {


    render() {
        return (
            <Container fluid>
            <Row>
            <Col size="md-12">
            <div className = "Workout">
                <h3>Create a Workout.</h3>
                <List />
                <View />
                <Table />
            </div>
            </Col>
            </Row>
            </Container>
        );
    }
}
export default Workout;