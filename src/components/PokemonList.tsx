import "./PokemonList.css";
import pokemonList from "../assets/pokemonDB.json";
import { Link } from "react-router-dom";
import cartoonJumpMp3 from "../assets/cartoon-jump.mp3";

const PokemonList = () => {
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
            className="list-item"
            onMouseEnter={() => new Audio(cartoonJumpMp3).play()}
          >
            <p className="name-id">
              {obj.id + "." + obj.name[0].toUpperCase() + obj.name.slice(1)}
            </p>
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
              }}
              className={obj.types[0]}
            >
              {obj.types[0][0].toUpperCase() + obj.types[0].slice(1)}
            </p>
            {obj.types[1] && (
              <p
                style={{
                  padding: 15,
                  marginLeft: 20,
                  borderRadius: 15,
                  color: "white",
                }}
                className={obj.types[1]}
              >
                {obj.types[1][0].toUpperCase() + obj.types[1].slice(1)}
              </p>
            )}

            <div className="stats-div">
              <p style={{ color: "pink" }}>{obj.stats.hp}</p>
              <p style={{ color: "orange" }}>{obj.stats.attack}</p>
              <p style={{ color: "chartreuse" }}>{obj.stats.defense}</p>
              <p style={{ color: "hotpink" }}>{obj.stats["special-attack"]}</p>
              <p style={{ color: "cyan" }}>{obj.stats["special-defense"]}</p>
              <p style={{ color: "yellow" }}>{obj.stats.speed}</p>
              <p style={{ paddingLeft: 10, borderRadius: 20, color: "white" }}>
                {obj.stats.speed +
                  obj.stats.hp +
                  obj.stats.defense +
                  obj.stats.attack +
                  obj.stats["special-attack"] +
                  obj.stats["special-defense"]}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
