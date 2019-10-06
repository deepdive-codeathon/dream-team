import React from 'react';
import ThisOrThat from './components/ThisOrThat.jsx';
import ApiRandomizer from './shared/ApiRandomizer.jsx';
import Splash from "./components/splash.jsx";
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <ThisOrThat />
      </Container>
    </>
  );
}

export default App;
