import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Checkbox from "../components/Checkbox";
import API from "../utils/API";


class ExerciseForm extends Component {

    targets = ["Chest", "Triceps", "Abs", "Shoulders", "Back", "Biceps", "Glutes", "Legs"];

    tags = ["Cardio", "Muscle Building", "Full-Body", "Hiit", "Flexibility & Stretching",
        "Dumbbells", "Resistance Bands", "Kettlebell", "Sliders", "Weighted Gloves", "Balance Ball",
        "Mat", "Medicine Ball", "Jumprope", "Foam Roller", "Yoga"];

    constructor(props) {
        super(props);
        this.state = {
            repsOrTime: "",
            tags: this.tags.sort().reduce(
                (tags, tag) => ({
                    ...tags,
                    [tag]: false
                }),
                {}
            ),
            targets: this.targets.sort().reduce(
                (targets, target) => ({
                    ...targets,
                    [target]: false
                }),
                {}
            )
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleTargetChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            targets: {
                ...prevState.targets,
                [name]: !prevState.targets[name]
            }
        }));
    };

    handleTagChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            tags: {
                ...prevState.tags,
                [name]: !prevState.tags[name]
            }
        }));
    };

    selectAllTags = isSelected => {
        Object.keys(this.state.tags).forEach(tag => {
            this.setState(prevState => ({
                tags: {
                    ...prevState.tags,
                    [tag]: isSelected
                }
            }));
        });
    };

    selectAllTargets = isSelected => {
        Object.keys(this.state.targets).forEach(target => {
            this.setState(prevState => ({
                targets: {
                    ...prevState.targets,
                    [target]: isSelected
                }
            }));
        });
    };

    createTag = tag => (
        <Checkbox
            inline
            label={tag}
            isSelected={this.state.tags[tag]}
            onCheckboxChange={this.handleTagChange}
            key={tag}
        />
    );

    createTags = () => this.tags.map(this.createTag);

    createTarget = option => (
        <Checkbox
            inline
            type="checkbox"
            name={option}
            label={option}
            isSelected={this.state.targets[option]}
            onCheckboxChange={this.handleTargetChange}
            key={option}
            custom
        />
    );

    createTargets = () => this.targets.map(this.createTarget);

    handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        this.newExercise();
    }

    newExercise = () => {

        API.saveExercise({
            title: this.state.title,
            createdBy: this.props.user[0].email,
            description: this.state.description,
            tutorial: this.state.tutorial,
            type: this.state.repsOrTime,
            length: this.state.length,
            target: Object.keys(this.state.targets)
                .filter(target => this.state.targets[target]),
            tags: Object.keys(this.state.tags)
                .filter(tag => this.state.tags[tag])
        }).then(() => {
            console.log("Saved new Exercise");
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="exercise-form" onChange={this.handleInputChange}>
                <Container>
                <Card bg="dark" text="white">
                <Card.Header variant = "dark" as="h2">Create an Exercise</Card.Header>
                <Card.Body>
                    <Form className="exercise-form-padding">
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control as="textarea" rows="1" name="title" />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="description" />
                        </Form.Group>
                        <Form.Group controlId="tutorial">
                            <Form.Label>Tutorial</Form.Label>
                            <Form.Control as="textarea" rows="3" name="tutorial" />
                        </Form.Group>
                        <Form.Group controlId="type">
                            <Form.Label>Type</Form.Label>
                            {['radio'].map(type => (
                                <div key={`custom-inline-${type}`} className="mb-3">
                                <div className="flex-form">
                                    <Form.Check
                                        custom
                                        inline
                                        label="Reps"
                                        value="Reps"
                                        name="repsOrTime"
                                        type={type}
                                        id={`custom-inline-${type}-1`}
                                        checked={this.state.repsOrTime === "Reps"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />                                    
                                    <Form.Check
                                        custom
                                        inline
                                        label="Time"
                                        value="Time"
                                        name="repsOrTime"
                                        type={type}
                                        id={`custom-inline-${type}-2`}
                                        checked={this.state.repsOrTime === "Time"}
                                        onChange={this.handleOptionChange}
                                        className="form-check-input"
                                    />
                                    </div>
                                </div>
                            ))}
                            <Form.Label>Length</Form.Label>
                            <Form.Control as="textarea" rows="1" name="length" />
                        </Form.Group>
                        <Form.Group controlId="target-area" name="target">
                            <Form.Label>Target Area</Form.Label>
                            <div className="flex-form">
                            {this.createTargets()}
                            </div>
                        </Form.Group>
                        <Form.Group controlId="tags" name="tags">
                            <Form.Label>Tags</Form.Label>
                            <div className="flex-form">
                            {this.createTags()}
                            </div>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Button type="submit" variant="warning" onClick={this.handleSubmit}>Save Exercise</Button>
                        </Form.Group>
                    </Form>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ExerciseForm;
