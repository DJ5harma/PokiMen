import { Link } from "react-router-dom";
import bgMusicFile from "../assets/Littleroot Town.mp3";
import { useEffect } from "react";
const Nav = () => {
  const bgM = new Audio(bgMusicFile);
  function handlePause() {
    if (bgM.paused) {
      bgM.play();
    } else {
      bgM.pause();
    }
  }
  useEffect(() => {
    bgM.play();
  }, []);

  return (
    <div id="nav">
      <nav
        id="top-nav"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          // border: "solid",
        }}
      >
        <h1
          style={{
            fontFamily: "monospace",
            fontSize: "35px",
            position: "fixed",
            backgroundColor: "white",
            zIndex: 2,
            padding: "33px 30vw",
            borderBottom: "solid",
          }}
        >
          The PokiMen Project
        </h1>
      </nav>

      <button
        onClick={handlePause}
        style={{
          right: -10,
          top: -10,

          borderRadius: "0 0 0 80px",
        }}
        className="nav-btn"
      >
        Toggle Bg Music
      </button>
      <Link to={"/pokemon-list"}>
        <button
          style={{
            left: -10,
            top: -10,
            borderRadius: "0 0 80px 0",
          }}
          className="nav-btn"
        >
          Goto List-View
        </button>
      </Link>
      <button
        style={{
          left: -10,
          bottom: -10,
          borderRadius: "0 80px 0 0",
          cursor: "not-allowed"
        }}
        className="nav-btn"
      >
        toBeImplimented
      </button>
      <Link to={"/about"}>
        <button
          style={{
            right: -10,
            bottom: -10,
            borderRadius: "80px 0 0 0",
          }}
          className="nav-btn"
        >
          About
        </button>
      </Link>
    </div>
  );
};

export default Nav;
