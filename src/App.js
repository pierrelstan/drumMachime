import React, { Component } from 'react';
import './App.css';
import DrumPad from "./components/drumpad";



class App extends Component {
 constructor(){
   super()
   this.state={
     power: true
   }
 }
  //fix arrow biding
  handleClickPower = () => {

    this.setState((prevState) => ({
      power: !prevState.power,
    }))
  }
  render() {
    const {power} = this.state;
    return (
      <div id="drum-machine"> 
        <h1>Drum Machine</h1>
       
        <button onClick={this.handleClickPower}>
          {this.state.power ? "ON": "OFF"}
        </button>
        <DrumPad 
        power={power}
        />
      </div>
    );
  }
}

export default App;
