import React from 'react';
import ThisOrThat from './components/ThisOrThat.jsx';
import ApiRandomizer from './shared/ApiRandomizer.jsx';
import Splash from "./components/splash.jsx";
import {Switch, BrowserRouter, Route, Link} from "react-router-dom";
import './App.css';
import {Container} from 'react-bootstrap';

function App() {
<<<<<<< HEAD
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Splash}/>
					<Route exact path='/' component={ThisOrThat}/>
				</Switch>
			</BrowserRouter>
		</>
);
=======
  return (
    <>
      <Container>
        <Splash />
      </Container>
    </>
  );
>>>>>>> Added results page to show poll results.
}

export default App;
