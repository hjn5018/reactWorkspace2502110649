import { useState, useEffect } from "react";

function Timer() {
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        const interVar = setInterval(() => {setTimer((prev)=>{return prev + 1})}, 1000)
        return () => {clearInterval(interVar)}
    }, [])

    return (
        <>
        <h1>{timer} 초</h1>
        </>
    )
};

export default Timer;