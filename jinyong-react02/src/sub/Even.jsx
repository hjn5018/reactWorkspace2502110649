import { useEffect } from "react";

function Even() {
    useEffect(()=>{
        // console.log("마마운운트트!!");
        return () => {console.log("unmount!")}; // clean up function
    }, []); // unmount

    return (
        <>
        짝수
        </>
    )
}

export default Even;