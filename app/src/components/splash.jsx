import React, { useEffect } from "react";
import img from "../shared/img/Logo.png";
import "../App.css";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import uuid from 'uuid';

const getSesionId = () => {
	let idReq = axios.create({
		addr: "",
		user: "TheDreamTeam",
		pass: "MarkAnna420",
		fullname: "Mark Anna",
		email: "fleabass4@gmail.com",
		phone: "123-456-7890"
	});

	axios.post('https://test.devv.io', idReq).then(response => {
		console.log("Session Toke:", response);
	}).catch(error => {
		throw new Error("Can't connect to da blockchain.");
	})
}


export const Splash = () => {
	// Get s
	return (
		<>
			<Container>
				<img src={img} className="img-fluid" id="logo" alt="logo" />
			</Container>
			<Container>
			<ButtonToolbar>
				<Button className="btn"><a href="ThisOrThat.jsx"/>WaStE mY <br/><br/>tIMe</Button>
			</ButtonToolbar>
			</Container>
		</>
	)
};
export default Splash