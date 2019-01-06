import React, { Component } from 'react';
import './App.css';
import DrumPad from "./components/drumpad";


class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        
        <DrumPad 
        />
      </div>
    );
  }
}

export default App;
