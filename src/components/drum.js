import React , { Component }from 'react';

class  Drum extends Component {
    state={
        active: false
    }
    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handkleKeyPress)
    }

    handleKeyPress = e => {
        console.log(e.keyCode + " " + this.props.dataid)
        
        if (e.keyCode === this.props.dataid) {

                this.setState(() => ({
                    active: true
                }))
                this.props.buttonClickByid();
                

            }

        
    }
render(){
    return (
        <div className="drum-pad" onClick={() => this.props.onClick(this.props.name, this.props.sound, this.props.dataid, this.props.onClick)} id={this.props.dataid} onKeyPress={this.handkleKeyPress}>
            <audio className="clip" src={this.props.sound} id={this.props.dataid}>

            </audio>
            <span>{this.props.dataid}</span>

        </div>
    )
}
}
   
export default Drum;


export let drumData = [
    { id: "Q", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543518593/Audio/Kick_09.mp3", name: "Kick" },
    { id: "W", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543518918/Audio/Clap_07.mp3", name: "Clap" },
    { id: "E", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543519191/Audio/Cymbal_04.mp3",name: "Cymbal" },
    { id: "A", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543695082/Audio/Bass_Drop_10_hr24ur.mp3", name: "Bass" },
    { id: "S", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546536047/Audio/Lex_Luger_-_Choir_c.mp3", name: "Choir" },
    { id: "D", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546536943/Audio/Crash_01.mp3", name: "Crash" },
    { id: "Z", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546539980/Audio/Conga_Damp.mp3", name: "Conngo_Damp" },
    { id: "X", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546540110/Audio/Lex_Hi-Hat_1.mp3", name: "Lex_Hi-Hat" },
    { id: "C", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546541304/Audio/CardiakClap.mp3", name: "CardiakClap" },

];