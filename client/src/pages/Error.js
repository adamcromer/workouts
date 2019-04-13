import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";

class Error extends React.Component {


    render() {
        return (
            <Container fluid>
            <Row>
            <Col size="md-12">
            <div className = "Error">
                <h3>No workouts here.</h3>
            </div>
            </Col>
            </Row>
            </Container>
        );
    }
}
export default Error;