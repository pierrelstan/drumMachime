import React, { Component } from 'react';
import './App.css';
import DrumPad from "./components/drumpad";


class App extends Component {
  state = {
    display: "Play the sound"
  }
  render() {
   const {display }= this.state;
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <h2>{display}</h2>
        <DrumPad 
      
        />
      </div>
    );
  }
}

export default App;
