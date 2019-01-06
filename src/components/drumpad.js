import React, { Component } from "react";
import Drum, { drumData }from "./drum";

class DrumPad extends Component {
   state={
       display:"play sound",
       id: []
   }
  
//fix Arrow biding
PlaySound=(Sound,Name,id)=>{
    this.audio = new Audio(Sound);
    this.audio.currentTime = 0;
    this.audio.play();
    console.log(Name)
console.log("i want to plays")
this.setState({
    display: Name,
    id:id
})
}
    
    render(){
       const {display}= this.state;
        return (
            <div>
                <h3 id="display">{display}</h3>
                {
                    drumData.map((data)=> 
                        <Drum
                        Name={data.name}
                        Sound={data.url}
                        key={data.id}
                        id={data.id}
                        onClick={this.PlaySound}
                        />
                     )
                }
               
            </div>
        )
    }
}
export default DrumPad;