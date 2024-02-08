import "./Nav.css";
import menuSvg from "../assets/menu.svg";
const Nav = () => {
  return (
    <>
      <nav id="top-nav">
        <div id="menu-div">
          <img src={menuSvg} width={40} alt="Menu Icon" />
          <h1>Menu</h1>
        </div>
        <h1 id="logo-h1">The PokiMen Project</h1>
      </nav>
      <div id="side-nav">
        <h1>Pokemon List</h1>
        <h1>Move List</h1>
        <h1>Team Builder</h1>
        <h1>Berry List</h1>
      </div>
    </>
  );
};

export default Nav;
