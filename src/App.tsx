import { Navigate, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Pkmn from "./components/Pkmn";
import Nav from "./components/Nav";
import About from "./components/About";
// import bgImg from "./assets/bgImg.jpg"
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/pokemon/25" replace />} />
          <Route path="/pokemon/:id" element={<Pkmn />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
