import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'


class View extends React.Component {


    render() {
        return (
            <Container>
            <div className = "view">
                <h1>View</h1>
                      <Row>
                          <Col>
                          View of Single Exercise or Workout
                          < ReactCountdownClock />
                          <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Length</th>
                            <th>Full Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
                          </Col>
                      </Row>
              </div>
              </Container>
        );
    }
}
export default View;