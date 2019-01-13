import React  from "react";
import './drumpad.css';


class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
        window.focus();
    }
    componentWillMount() {
        document.removeEventListener("keydown", this.handleKeyDown)
    }
    //Arrow fix binding 
    handleKeyDown = (event) => {
        const { name, handledisplay, Id } = this.props;
        if (event.keyCode === name.charCodeAt()) {
            this.audio.play();
            this.audio.currentTime = 0;
            handledisplay(Id)
        }
    }
    //Arrow fix binding
    handleDrumPadClickPlay = () => {

        const { handledisplay, Id, power } = this.props;
        //console.log(this.audio)
        if (power) {
            this.audio.play();
            this.audio.currentTime = 0;
            this.setState(() => ({
                active: true
            }));
            handledisplay(Id)
        }

    }

    render() {
        const { name, Id, drumpad } = this.props;

        return (
            <div className={`${this.state.active}` ? "drum-pad" : "drum-pad"} id={Id} onClick={this.handleDrumPadClickPlay} >
                <p className="title-name-audio">{name}</p>
                <audio
                    className="clip" id={name} src={`${drumpad}`}
                    ref={ref => this.audio = ref}
                >
                </audio>

            </div>
        )
    }
}
export default DrumPad;

// Sound Drumpad

export const drumData = [
    { name: "Q", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543518593/Audio/Kick_09.mp3", id: "Kick" },
    { name: "W", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543518918/Audio/Clap_07.mp3", id: "Clap" },
    { name: "E", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543519191/Audio/Cymbal_04.mp3", id: "Cymbal" },
    { name: "A", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1543695082/Audio/Bass_Drop_10_hr24ur.mp3", id: "Bass" },
    { name: "S", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546536047/Audio/Lex_Luger_-_Choir_c.mp3", id: "Choir" },
    { name: "D", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546536943/Audio/Crash_01.mp3", id: "Crash" },
    { name: "Z", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546539980/Audio/Conga_Damp.mp3", id: "Conngo_Damp" },
    { name: "X", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546540110/Audio/Lex_Hi-Hat_1.mp3", id: "Lex_Hi-Hat" },
    { name: "C", url: "https://res.cloudinary.com/dteuk7cbl/video/upload/v1546541304/Audio/CardiakClap.mp3", id: "CardiakClap" },

];