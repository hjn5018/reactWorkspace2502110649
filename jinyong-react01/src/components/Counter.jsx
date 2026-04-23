import {useState} from "react";

export default function Counter() {

    let [count, setCount] = useState(0);

    var btnClick = () => {
        setCount(++count);
        // setCount(count++);
    }

    return (
        <>
        <h1>{count}</h1>
        <button onClick={btnClick}>증가</button>
        </>
    );
}