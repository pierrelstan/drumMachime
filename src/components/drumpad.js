import React, { Component } from "react";
import Drum, { drumData }from "./drum";

class DrumPad extends Component {
  
    render(){
       
        return (
            <div>
               
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