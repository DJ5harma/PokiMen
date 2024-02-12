import { Link } from "react-router-dom";
import bgMusicFile from "../assets/Littleroot Town.mp3";
import buttonSound from "../assets/button-sound.mp3";
import notificationSound from "../assets/notification-sound.mp3";
import { useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const bgM = new Audio(bgMusicFile);
  const btnSound = new Audio(buttonSound);
  const notiSound = new Audio(notificationSound);
  function handlePause() {
    if (bgM.paused) {
      bgM.play();
    } else {
      bgM.pause();
    }
  }
  useEffect(() => {
    // bgM.play();
  }, []);

  return (
    <nav id="nav">
      <p
        onClick={handlePause}
        className="nav-btn"
        onMouseEnter={() => notiSound.play()}
        onMouseLeave={() => {
          notiSound.pause();
          notiSound.currentTime = 0;
        }}
      >
        Toggle Music
      </p>
      <Link
        to={"/pokemon-list"}
        className="nav-btn"
        onMouseEnter={() => notiSound.play()}
        onMouseLeave={() => {
          notiSound.pause();
          notiSound.currentTime = 0;
        }}
      >
        Goto List
      </Link>
      <h1 id="logo">The PokiMen Project</h1>
      <Link
        to={"/about"}
        className="nav-btn"
        onMouseEnter={() => notiSound.play()}
        onMouseLeave={() => {
          notiSound.pause();
          notiSound.currentTime = 0;
        }}
      >
        toBeImplimented
      </Link>
      <Link
        to={"/about"}
        className="nav-btn"
        onMouseEnter={() => notiSound.play()}
        onMouseLeave={() => {
          notiSound.pause();
          notiSound.currentTime = 0;
        }}
      >
        AboutMe
      </Link>
    </nav>
  );
};

export default Nav;
