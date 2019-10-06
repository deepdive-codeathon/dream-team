import React from 'react';
// import "App.css";
import ThisOrThat from './components/ThisOrThat.jsx';
import ApiRandomizer from './shared/ApiRandomizer.jsx';
import Splash from "./components/splash.jsx";


function App() {
  let thing = new ApiRandomizer();

  return (
    <div className="App">
      <ThisOrThat />
    </div>
  );
}

export default App;
