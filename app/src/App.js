import React from 'react';
import ThisOrThat from './components/ThisOrThat.jsx';
import ApiRandomizer from './shared/ApiRandomizer.jsx';
import Splash from "./components/splash.jsx";


function App() {
  let thing = new ApiRandomizer();

  return (
    <>
      <ThisOrThat />
    </>
  );
}

export default App;
