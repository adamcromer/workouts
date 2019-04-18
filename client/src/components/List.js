import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class List extends React.Component {


    render() {
        return (
            <Container>
            <div className = "exercise-list">
                <h1>Exercise List</h1>
                        List of All Exercises
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
                 </div>
                <Button type="submit" variant="warning" onClick={this.handleSubmit}>Edit Exercises</Button>
          
                     <div className = "workout-list">
                         <h1>Workout List</h1>
                                 List of All Workouts
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
                          </div>
                         <Button type="submit" variant="warning" onClick={this.handleSubmit}>Edit Workouts</Button>
                     </Container>
        );
    }
}
export default List;