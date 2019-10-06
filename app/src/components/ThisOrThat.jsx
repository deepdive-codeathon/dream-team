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

    handlClick = () => {
        console.log("WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    }

    render() {
        return (
            <>

                <Row>
                    <Col>
                        <div>
                            <ApiRandomizer />
                        </div>
                    </Col>
                    <Col></Col>
                    <Col>
                        <div>
                            <ApiRandomizer />
                        </div>
                    </Col>
                </Row>

            </>
        );
    }
}