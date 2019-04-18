import React, { Component } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';


class View extends React.Component {


    render() {
        return (
            <Container>
            <div className = "view-exercise">
                <h1>View Exercise</h1>
                      <Row>
                          <Col>
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
                      <Button type="submit" variant="warning" onClick={this.handleSubmit}>Edit Exercise</Button>
              </div>
              <div className = "view-workout">
                <h1>View Workout</h1>
                      <Row>
                          <Col>
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
              <Button type="submit" variant="warning" onClick={this.handleSubmit}>Start Timer</Button>
              <Button type="submit" variant="warning" onClick={this.handleSubmit}>Edit Workout</Button>
              </Container>
        );
    }
}
export default View;