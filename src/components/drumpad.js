import React, { Component } from "react";
import Drum, { drumData }from "./drum";

class DrumPad extends Component {
   state={
       display:"play sound",
       id: []
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
                        />
                     )
                }
               
            </div>
        )
    }
}
export default DrumPad;