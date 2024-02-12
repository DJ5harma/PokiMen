import { Link } from "react-router-dom";
import bgMusicFile from "../assets/Littleroot Town.mp3";
import buttonSound from "../assets/click-sound.mp3";
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
      return;
    }
    bgM.pause();
  }
  function handleMouseEnter() {
    notiSound.play();
  }
  function handleMouseLeave() {
    notiSound.pause();
    notiSound.currentTime = 0;
  }
  function handleBtnClickSound() {
    btnSound.currentTime = 0;
    btnSound.play();
  }

  useEffect(() => {
    bgM.play();
  }, [bgM]);

  return (
    <nav id="nav">
      <p
        onClick={handlePause}
        className="nav-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Toggle Music
      </p>
      <Link
        to={"/pokemon-list"}
        onClick={handleBtnClickSound}
        className="nav-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Goto List
      </Link>
      <h1 id="logo">The PokiMen Project</h1>
      <p
        // to={"/about"}
        className="nav-btn"
        // onClick={handleBtnClickSound}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        style={{cursor: "not-allowed"}}
      >
        ToBeImplimented
      </p>
      <Link
        to={"/about"}
        className="nav-btn"
        onClick={handleBtnClickSound}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        AboutMe
      </Link>
    </nav>
  );
};

export default Nav;
