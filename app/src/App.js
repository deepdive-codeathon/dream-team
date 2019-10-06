import React from 'react';
import ThisOrThat from './components/ThisOrThat.jsx';
import ApiRandomizer from './shared/ApiRandomizer.jsx';
import Splash from "./components/splash.jsx";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import Results from './components/Results';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route exact path='/this_or_that' component={ThisOrThat} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
