import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThisOrThat from './components/ThisOrThat';
import ApiRandomizer from './shared/ApiRandomizer';

function App() {
  let thing = new ApiRandomizer();

  thing.pullRandomApi();

  console.log(thing.getApi());

  return (
    <div className="App">
      <ThisOrThat />
    </div>
  );
}

export default App;
