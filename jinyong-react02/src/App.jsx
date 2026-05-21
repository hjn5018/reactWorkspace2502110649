import { useState, useEffect, useRef } from 'react'
import Controller from './sub/Controller'
import Viewer from './sub/Viewer'
import Even from './sub/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  let refObj = useRef(false);

  useEffect(()=>{
    console.log("mount!");
  }, []); 
  
  useEffect(()=>{
    if (!refObj.current) {
      refObj.current = true;
      return;
    }
    console.log(`count값: ${count}`);
  }, [count]); 

  const onClickBtn = (num) => {
    setCount(count + num);
  };

  return (
    <>
    <h1>Simple Counter</h1>

    <section>
      <input value={input} onChange={(e)=>{setInput(e.target.value);}}/>{input}
    </section>

    {/* <section style={{backgroundColor: "#eeeeee", width: 600, height: 150, margin: 10, padding: 20}}> */}
    <section >
      <Viewer count={count}/>
      {count%2===0 ? <Even/> : null}
    </section>

    {/* <section style={{backgroundColor: "#eeeeee", width: 600, height: 150, margin: 10, padding: 20}}> */}
    <section>
      <Controller onClickBtn={onClickBtn}/>
    </section>
    </>
  )
}

export default App
