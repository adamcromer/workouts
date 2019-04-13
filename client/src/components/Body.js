import React from 'react';

import Container from 'react-bootstrap/Container';

function Body(props) {
    return (

        <div>
            <Container>
                {props.children}
            </Container>
        </div>

    );
}

export default Body;