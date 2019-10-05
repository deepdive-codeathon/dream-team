import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ApiRandomizer from '../shared/ApiRandomizer';

export default class ThisOrThat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <ApiRandomizer />
                        </Col>
                        <Col>
                            <ApiRandomizer />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}