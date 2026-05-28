import { useEffect } from "react";

function Even() {
    useEffect(()=>{
        console.log("Even mount");
        return () => {console.log("Even unmount")}; // clean up function
    }, []); // unmount

    return (
        <>
        짝수
        </>
    )
}

export default Even;