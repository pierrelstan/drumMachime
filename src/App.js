import React, { Component } from 'react';
import './App.css';
import DrumPad from "./components/drumpad";


class App extends Component {
  constructor(){
    super();
    this.state={
      power:true,
      display: "Click on the buttons"
    }
  }
  //fix arrow biding
  handleClickPower=()=> {
    this.setState((prevState) => ({
      power: !prevState.power
    }))
  }
  handleDisplayClick =(e)=> {
  console.log("e")
  }
  render() {
    const { display } = this.state;
    return (
      <div id="drum-machine"> 
        <h1>Drum Machine</h1>
        <button onClick={this.handleClickPower}>
          {this.state.power ? "ON": "OFF"}
        </button>
        <h3 id="display">{ display }</h3>
        <DrumPad 
          onClick={this.handleDisplayClick}
        />
      </div>
    );
  }
}

export default App;
