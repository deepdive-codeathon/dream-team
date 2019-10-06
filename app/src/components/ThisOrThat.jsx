import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ApiRandomizer from '../shared/ApiRandomizer.jsx';

/**
 * This is that main component that makes up ThisOrThat.
 */
export default class ThisOrThat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col className="col-lg-4">
                            <ApiRandomizer />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-lg-4">
                            <ApiRandomizer />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}