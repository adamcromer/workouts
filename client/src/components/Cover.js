import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import LoginButtons from '../components/LoginButtons';

class Cover extends Component {

    
    render() {
        return (
            <Jumbotron fluid> 
            <h1 className= "cover-heading cover-left">Exercise the way you want.</h1>
            <div className="cover-left"><LoginButtons /></div>
            </Jumbotron>
        )
    }
    }
    export default Cover;

