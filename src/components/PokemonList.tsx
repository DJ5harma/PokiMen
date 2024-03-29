import "./PokemonList.css";
import pokemonList from "../assets/pokemonDB.json";
import { Link } from "react-router-dom";
import cartoonJumpMp3 from "../assets/cartoon-jump.mp3";

const PokemonList = () => {
  const wooshSound = new Audio(cartoonJumpMp3);
  return (
    <div id="list-div">
      <div id="stat-ref-tab">
        <p style={{ color: "pink" }}>HP</p>
        <p style={{ color: "orange" }}>Atk</p>
        <p style={{ color: "chartreuse" }}>Def</p>
        <p style={{ color: "hotpink" }}>SpA</p>
        <p style={{ color: "cyan" }}>SpD</p>
        <p style={{ color: "yellow" }}>Speed</p>
        <p style={{ paddingLeft: 10, borderRadius: 20, color: "white" }}>Sum</p>
      </div>
      {pokemonList.map((obj) => {
        return (
          <Link
            to={`/pokemon/${obj.id}`}
            className={`list-item ${obj.types[0]}`}
            // style={{boxShadow: "0 0 20px"}}
            onMouseEnter={() => wooshSound.play()}
            onMouseLeave={() => {
              wooshSound.pause();
              wooshSound.currentTime = 0;
            }}
          >
            <p className="name-id">{obj.id + "." + obj.name}</p>
            <img
              className="item-img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${obj.id}.png`}
              alt=""
            />
            <p
              style={{
                padding: 15,
                marginLeft: 20,
                borderRadius: 15,
                color: "white",
                // border: "solid black"
              }}
              className={obj.types[0]}
            >
              {obj.types[0]}
            </p>
            {obj.types[1] && (
              <p
              style={{
                padding: 15,
                marginLeft: 20,
                borderRadius: 15,
                color: "white",
                // border: "solid black"
                }}
                className={obj.types[1]}
              >
                {obj.types[1]}
              </p>
            )}

            <div className="stats-div">
              <p style={{ color: "pink" }}>{obj.stats.hp}</p>
              <p style={{ color: "orange" }}>{obj.stats.attack}</p>
              <p style={{ color: "chartreuse" }}>{obj.stats.defense}</p>
              <p style={{ color: "hotpink" }}>{obj.stats["special-attack"]}</p>
              <p style={{ color: "cyan" }}>{obj.stats["special-defense"]}</p>
              <p style={{ color: "yellow" }}>{obj.stats.speed}</p>
              <p style={{ color: "white" }}>
                {obj.stats.total}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
