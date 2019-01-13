import React, { Component } from "react";
import Drum, { drumData }from "./drum";

class DrumPad extends Component {
    constructor() {
        super();
        this.state = {
            display: "Click on the buttons",
            idClick: "",

        }
    }
   
    
    //fix arrow biding
    buttonClickByid = (name, sound, dataid) => {
        const { power}= this.props;
        const { idClick}= this.state;
        console.log(dataid + idClick)
        if(power){
            let audioPlay = document.getElementById(dataid)
               audioPlay = new Audio(sound)
               audioPlay.play()
            console.log("click" + name)
            this.setState({
                idClick: dataid,
                display: name
            })
        }
       

    }
    
    
    render(){
        const { display, idClick } = this.state;
        return (
            <div>

                <h2 id="display">{display}</h2>
                <h1>{idClick}</h1>
           
            <div>
               {
                drumData.map((data)=> (
                    <Drum
                    name={data.name}
                        dataid={data.id}

                        key={data.id}
                    sound={data.url}
                    buttonClickByid={this.buttonClickByid}
                        onClick={this.buttonClickByid}
                        display={display}
                        onKeyPress={this.handleKeyPress}
                     />
                ))
               }
            </div>
            </div>
        )
    }
}
export default DrumPad;