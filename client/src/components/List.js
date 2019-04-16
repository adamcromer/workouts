import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class List extends React.Component {


    render() {
        return (
            <div className = "list">
                <h1>List</h1>
                        List of All Exercises or Workouts
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
            </div>
        );
    }
}
export default List;