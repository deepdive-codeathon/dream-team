import React, { useEffect } from "react";
import img from "../shared/img/Logo.png";
import "../App.css";
import Container from "react-bootstrap/Container";


export const Splash = () => {
	return (
		<>
			<Container>
				<img src={img} className="img-fluid" id="logo" alt="logo" />
			</Container>
			<Container>
				<h2></h2>
			</Container>
		</>
	)
};
export default Splash