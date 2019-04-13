import React, { Component } from 'react';
import List from "../components/List";
import View from "../components/View";

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

class Workout extends Component {

    render() {
        return (

            <div className="Workout">
                <h3>Create a Workout.</h3>
                <List />
                <View />

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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
export default Workout;