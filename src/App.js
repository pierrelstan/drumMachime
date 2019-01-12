import React, { Component } from 'react';
import './App.css';
import DrumPad from "./components/drumpad";



class App extends Component {
  constructor(){
    super();
    this.state={
      power:true,
      display: "Click on the buttons",
      idClick:"",

    }
  }
  //fix arrow biding
  handleClickPower=()=> {
   
    this.setState((prevState) => ({
      power: !prevState.power,
    }))
  }
  //fix arrow biding
  buttonClickByid=(e, Name)=> {
this.setState({ idClick: e,
display: Name
})

  }

  render() {
    const  { display,idClick} = this.state;
    return (
      <div id="drum-machine"> 
        <h1>Drum Machine</h1>
        <button onClick={this.handleClickPower}>
          {this.state.power ? "ON": "OFF"}
        </button>
       

        <DrumPad 
         display={display}
         idClick={idClick}
         buttonClickByid= {this.buttonClickByid}
        />
      </div>
    );
  }
}

export default App;
