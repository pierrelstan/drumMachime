import React from 'react';

const Drum =()=> 
{
    let drum = drumData.map((data) => {
        return <button scr={data.url} >{data.name}</button>
    })
    return (
        <div>
            {drum}
        </div>
    )

}
   
export default Drum;


export let drumData = [
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