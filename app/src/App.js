import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThisOrThat from './components/ThisOrThat';
import ApiRandomizer from './shared/ApiRandomizer';

function App() {
  let thing = new ApiRandomizer();

  return (
    <div className="App">
      <ThisOrThat />
    </div>
  );
}

export default App;
