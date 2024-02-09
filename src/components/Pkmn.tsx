import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DB from "../assets/pokemonDB.json";

import cartoonJumpMp3 from "../assets/cartoon-jump.mp3";
import speakerIconImg from "../assets/speaker-icon.png";
import Stats from "./Stats";

const Pkmn = () => {
  const id = parseInt(useLocation().pathname.slice(9));
  const audioCry = new Audio(
    `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`
  );

  
  const imgSample = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  const img = `${imgSample + id}.png`;
  const imgNext = `${imgSample + (id + 1)}.png`;
  const imgPrev = `${imgSample + (id - 1)}.png`;

  const dbNext = DB[id];
  const dbCurr = DB[id - 1];
  const dbPrev = DB[id - 2];

  useEffect(() => {
    audioCry.play();
  }, [audioCry]);

  return (
    <div id="pokemon-view">
      {id > 1 && (
        <Link
          to={`/pokemon/${id - 1}`}
          id="prev-div"
          className={dbPrev.types[0]+"-s"}
          onMouseEnter={() => {
            new Audio(cartoonJumpMp3).play();
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>{dbPrev.name[0].toUpperCase() + dbPrev.name.slice(1)}</p>
          <img src={imgPrev} id="prev-img" alt="" />
          <h1>{"<<"}</h1>
        </Link>
      )}

      <div id="main-div">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ fontFamily: "monospace" }}>
            {dbCurr.id +
              "." +
              dbCurr.name[0].toUpperCase() +
              dbCurr.name.slice(1)}
          </h1>
          <img
            id="speaker-icon"
            src={speakerIconImg}
            alt=""
            onClick={() => audioCry.play()}
          />
        </div>
        <img src={img} alt="" />

        <div style={{ display: "flex" }} id="type-div">
          <button className={dbCurr.types[0]}>
            {dbCurr.types[0].toUpperCase()}
          </button>
          {dbCurr.types[1] && (
            <button className={dbCurr.types[1]}>
              {dbCurr.types[1].toUpperCase()}
            </button>
          )}
        </div>
        <Stats dbCurr={dbCurr}/>
      </div>
      {id < 1302 && (
        <Link
          to={`/pokemon/${id + 1}`}
          id="next-div"
          className={dbNext.types[0]+"-s"}
          onMouseEnter={() => {
            new Audio(cartoonJumpMp3).play();
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h1>{">>"}</h1>
          <img src={imgNext} id="next-img" alt="" />
          <p>{dbNext.name[0].toUpperCase() + dbNext.name.slice(1)}</p>
        </Link>
      )}
    </div>
  );
};

export default Pkmn;