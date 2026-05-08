import {useState} from "react";

export default function Tabs() {

    let [activeTab, setActiveTab] = useState("home");

    return (
        <>
            <button onClick={()=>{setActiveTab("home")}}>Home</button>
            <button onClick={()=>{setActiveTab("about")}}>Aome</button>
            { activeTab === "home" && <p>Welcome Home!</p> }
            { activeTab === "about" && <p>About Us!</p> }

            {/* false, null, undefined, true는 렌저링하지 않는다. 하지만 -, '', NaN은 falsy임에도 렌더링된다. */}
            {false}
            {0}
        </>
    );
}