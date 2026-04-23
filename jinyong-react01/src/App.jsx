import Button from './components/Button'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Button text="메" img={"a.jpg"}/>
      <Button text={"카페"}/>
      <Button>
        <Header/>
      </Button>
      <Button>
        <h1>children props!!</h1>
      </Button>

      <hr />
      
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
