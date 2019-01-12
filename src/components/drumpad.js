import React, { Component } from "react";
import Drum, { drumData }from "./drum";

class DrumPad extends Component {

    
    
    render(){
       const {display }= this.props;
        return (
            <div>
            <h2>{display}</h2>
               {
                drumData.map((data)=> (
                    <Drum
                    Name={data.name}
                        dataid={data.id}
                        key={data.id}
                    sound={data.url}
                    buttonClickByid={this.buttonClickByid}
                     />
                ))
               }
            </div>
        )
    }
}
export default DrumPad;