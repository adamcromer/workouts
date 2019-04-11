import React, { Component } from 'react';
import List from "../components/List";
import View from "../components/View";


class Workout extends React.Component {


    render() {
        return (

            <div className = "Workout">
                <h3>Create a Workout.</h3>
                <List />
                <View />
            </div>
        );
    }
}
export default Workout;