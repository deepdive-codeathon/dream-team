import React from "react";
import { Container, Row, Col } from 'react-bootstrap/';
import ApiRandomizer from '../shared/ApiRandomizer.jsx';
import img from "../shared/img/Logo.png";
import image from "../shared/img/question.png"

/**
 * This is that main component that makes up ThisOrThat.
 */
export const ThisOrThat = () => {
<<<<<<< HEAD

        return (
           <>
               <img src={img} className="img-fluid" id="logo" alt="logo" />
=======
    
    return (
        <>
            <img src={img} className="img-fluid" id="logo" alt="logo" />
>>>>>>> Added results page to show poll results.
            <Container className="this-or-that">
                <Row>
<<<<<<< HEAD
                    <Col lg={4} md={12} className="randomizer">
                            <ApiRandomizer />
                    </Col>
                    <Col lg={2} id="mark">
                        <img src={image} className="img-fluid" id="question" alt="question"/>
                    </Col>
                    <Col lg={4} md={12} className="randomizer">
                            <ApiRandomizer />
=======
                    <Col lg={4} className="randomizer">
                        <ApiRandomizer />
                    </Col>
                    <Col lg={2}>
                        <img src={image} className="img-fluid" id="question" alt="question" />
                    </Col>
                    <Col lg={4} className="randomizer">
                        <ApiRandomizer />
>>>>>>> Added results page to show poll results.
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default ThisOrThat;