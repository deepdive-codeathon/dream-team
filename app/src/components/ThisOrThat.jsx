import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ApiRandomizer from '../shared/ApiRandomizer';

export default class ThisOrThat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let candidateOne = new ApiRandomizer();
        let candidateTwo = new ApiRandomizer();

        console.log(candidateOne.getCandidate());

        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <p>Hello{candidateOne.getCandidate()}</p>
                        </Col>
                        <Col>
                            <p>{candidateTwo.candidate}</p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}