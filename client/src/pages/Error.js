import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidebar from "../components/Sidebar";


class Error extends Component {


    render() {
        return (
            <Container>
                <div className="Error">
                    <Row>
                        <Col md={4}>
                            <Sidebar />
                        </Col>
                        <Col md={8}>
                        <h3>No workouts here.</h3>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}
export default Error;