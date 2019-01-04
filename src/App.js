import React, { Component } from 'react';
import './App.css';
import Drum from "./components/drum";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Drum Machine</h1>
        <Drum />
      </div>
    );
  }
}

export default App;
