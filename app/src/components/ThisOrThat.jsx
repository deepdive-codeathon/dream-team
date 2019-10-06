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

                <Row>
                    <Col>
                        <div as Container>
                            <ApiRandomizer />
                        </div>
                    </Col>
                    <Col></Col>
                    <Col>
                        <div className="">
                            <ApiRandomizer />
                        </div>
                    </Col>
                </Row>

            </>
        );
    }
}