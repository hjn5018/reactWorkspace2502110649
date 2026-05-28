import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import SimpleCounter from "./pages/SimpleCounter"
import UserList from "./pages/UserList"

function App() {
  return (
    <>
    <Link to="/">[홈]</Link>
    <Link to="/counter">[간단 카운터]</Link>
    <Link to="user">[사용자 목록]</Link>
    <hr />

    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/counter"} element={<SimpleCounter/>} />
      <Route path={"/user"} element={<UserList/>} />
    </Routes>
    
    {/* a태그는 새로고침된다. */}
    <a href="/">[홈]</a> 
    <a href="/counter">[간단 카운터]</a>
    <a href="/user">[사용장 목록]</a>
    </>
  )
}

export default App
