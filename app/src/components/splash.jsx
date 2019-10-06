import React, { useEffect } from "react";
import img from "../shared/img/Logo.png";
import "../App.css";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import uuid from 'uuid';

export const Splash = () => {
	// Get s
	return (
		<>
			<Container>
				<img src={img} className="img-fluid" id="logo" alt="logo" />
			</Container>
			<Container>
			<ButtonToolbar>
				<Button className="btn" href="/this_or_that">WaStE mY <br/><br/>tIMe</Button>
			</ButtonToolbar>
			</Container>
		</>
	)
};
export default Splash