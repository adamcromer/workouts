import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


class ExerciseForm extends Component {


    render() {
        return ( 
            <div className="exercise-form">
                <Container>
                <h2>Create an Exercise</h2>
                    <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control as="textarea" rows="1" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="tutorial">
                        <Form.Label>Tutorial</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="type">
                        <Form.Label>Type</Form.Label>
                            {['radio'].map(type => (
                                <div key={`custom-inline-${type}`} className="mb-3">
                                    <Form.Check
                                    custom
                                    inline
                                    label="Reps"
                                    name="radio"
                                    type={type}
                                    id={`custom-inline-${type}-1`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Time"
                                    name="radio"
                                    type={type}
                                    id={`custom-inline-${type}-2`}
                                />
                                </div>
                            ))}
                              <Form.Label>Length</Form.Label>
                                    <Form.Control as="textarea" rows="1" />
                            </Form.Group>
                        <Form.Group controlId="target-area">
                            <Form.Label>Target Area</Form.Label>
                            {['checkbox'].map(type => (
                                <div key={`custom-inline-${type}`} className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    label="Chest"
                                    type={type}
                                    id={`custom-inline-${type}-1`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Triceps"
                                    type={type}
                                    id={`custom-inline-${type}-2`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Abs"
                                    type={type}
                                    id={`custom-inline-${type}-3`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Shoulders"
                                    type={type}
                                    id={`custom-inline-${type}-4`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Back"
                                    type={type}
                                    id={`custom-inline-${type}-5`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Biceps"
                                    type={type}
                                    id={`custom-inline-${type}-6`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Glutes"
                                    type={type}
                                    id={`custom-inline-${type}-7`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Legs"
                                    type={type}
                                    id={`custom-inline-${type}-8`}
                                />
                                </div>
                            ))}
                        </Form.Group>

                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            {['checkbox'].map(type => (
                                <div key={`custom-inline-${type}`} className="mb-3">
                                <Form.Check
                                    custom
                                    inline
                                    label="Cardio"
                                    type={type}
                                    id={`custom-inline-${type}-9`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Muscle Building"
                                    type={type}
                                    id={`custom-inline-${type}-10`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Full-Body"
                                    type={type}
                                    id={`custom-inline-${type}-11`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Hiit"
                                    type={type}
                                    id={`custom-inline-${type}-12`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Flexibility & Stretching"
                                    type={type}
                                    id={`custom-inline-${type}-13`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Dumbbells"
                                    type={type}
                                    id={`custom-inline-${type}-14`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Resistance Bands"
                                    type={type}
                                    id={`custom-inline-${type}-15`}
                                />
                                 <Form.Check
                                    custom
                                    inline
                                    label="Kettlebell"
                                    type={type}
                                    id={`custom-inline-${type}-16`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Sliders"
                                    type={type}
                                    id={`custom-inline-${type}-17`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Weighted Gloves"
                                    type={type}
                                    id={`custom-inline-${type}-18`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Balance Ball"
                                    type={type}
                                    id={`custom-inline-${type}-19`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Mat"
                                    type={type}
                                    id={`custom-inline-${type}-20`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Medicine Ball"
                                    type={type}
                                    id={`custom-inline-${type}-21`}
                                />
                                 <Form.Check
                                    custom
                                    inline
                                    label="Jumprope"
                                    type={type}
                                    id={`custom-inline-${type}-22`}
                                />
                                 <Form.Check
                                    custom
                                    inline
                                    label="Foam Roller"
                                    type={type}
                                    id={`custom-inline-${type}-23`}
                                />
                                </div>
                            ))}
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Button type="submit" variant="warning">Save Workout</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default ExerciseForm;
