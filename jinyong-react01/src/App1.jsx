import Counter from "./components/Counter";
import Light from "./components/Light";
import Tabs from "./components/Tabs"
import Register1 from "./components/Register1"
import Register2 from "./components/Register2"
import Register3 from "./components/Register3"
function App() {

  return (
    <>
    <h1>useState 예제들</h1>

    <Counter />
    <hr />

    <Light/>
    <hr />

    <Tabs/>
    <hr />

    <Register1 />
    <hr />
    
    <Register2 />
    <hr />

    <Register3 />
    <hr />
    </>
  );
}

export default App
