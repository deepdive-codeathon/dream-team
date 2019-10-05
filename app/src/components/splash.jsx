import React, {useEffect} from "react";
import img from "/src/shared/img/Logo";
import "./App.css";


export const Splash = () => {
	return (
		<>
			<img src={img} className="img-fluid" id="logo" alt="logo"/>
		</>
	)
};