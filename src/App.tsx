import Nav from "./components/Nav"
import PokemonList from "./components/PokemonList"
// import bgImg from "./assets/bgImg.jpg"
function App() {

  return (
    <>
      {/* <img src={bgImg} alt="" style={{position: "fixed", width: "100vw", zIndex: 1, opacity: 0.1}} /> */}
      <Nav/>
      <PokemonList/>
    </>
  )
}

export default App
