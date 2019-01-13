import React, { Component } from 'react';
import './App.css';
import DrumPad, {drumData} from "./components/drumpad";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 30,
      drum: '',
      display: "Press Keys or Button"
    }
  }


  // fix Arrow binding 
  handleDisplay = (display) => {
    this.setState({ display })
  }
  // fix Arrow biding 
  ToggleSwitch = () => {
    this.setState(state => ({
      power: !state.power
    }));
  }


  render() {
    const { display, power } = this.state;
    return (
      <div className="drum-container">

        <div id="drum-machine">
          <h1 className="title-drum-machine">Drum Machine</h1>
          <div id="display"><h1>{display}</h1></div>
          <button onClick={this.ToggleSwitch}>
            {this.state.power ? 'ON' : 'OFF'}
          </button>


          <div className="drum">
            {
              drumData.map((drumpad) =>
                <DrumPad
                  drumpad={drumpad.url}
                  key={drumpad.id}
                  Id={drumpad.id}
                  name={drumpad.name}
                  handledisplay={this.handleDisplay}
                  onClick={this.handleDrumPadClickPlay}
                  power={power}
                />
              )

            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
