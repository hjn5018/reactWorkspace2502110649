import {useState} from "react";

export default function Light() {

    let [power, setPower] = useState("OFF")

    let lightOnOff = () => {
        // setPower("ON")
        setPower(power === "ON" ? "OFF" : "ON")
    }

    return (
        <>
        {power === "ON" 
        ? 
        <h1 style={ {backgroundColor:"orange"} }>{power}</h1>
        :
        <h1 style={ {backgroundColor:"gray"} }>{power}</h1>}
        
        <button onClick={lightOnOff}>{power === "ON" ? "끄기" : "켜기"}</button>
        
        </>
    );
}