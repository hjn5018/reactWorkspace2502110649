import {useState} from "react";

export default function Tabs() {

    let [activeTab, setActiveTab] = useState("home");

    return (
        <>
            <button onClick={()=>{setActiveTab("home")}}>Home</button>
            <button onClick={()=>{setActiveTab("about")}}>Aome</button>
            { activeTab === "home" && <p>Welcome Home!</p> }
            { activeTab === "about" && <p>About Us!</p> }
        </>
    );
}