import "./PokemonList.css";
import pokemonList from "../assets/pokemonDB.json";

const PokemonList = () => {
  return (
    <div id="pokemon-list-container">
      <div id="info-tab">
        <p style={{ marginRight: 15 }}>iD</p>
        <p style={{ marginRight: 90 }}>Name</p>
        <p style={{ marginRight: 80 }}>Sprite</p>
        <p>{"Type(s)"}</p>
        <p style={{ position: "absolute", right: 80, wordSpacing: 40 }}>
          HP Atk Def SpA SpD Total
        </p>
      </div>
      <div style={{ marginTop: 50 }} id="list-only">
        {pokemonList.map((pokemon) => {
          return (
            <div
              className="pokemon-item"
              key={pokemon.id}
              style={{ marginRight: 22 }}
            >
              <p style={{ width: 180 }}>
                {pokemon.id}.{" "}
                {pokemon.name &&
                  pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </p>
              {/* Front Sprite */}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt=""
              />

              {/* Types */}
              <span style={{ margin: 10 }} className={pokemon.types[0]}>
                {pokemon.types[0][0].toUpperCase() + pokemon.types[0].slice(1)}
              </span>
              {pokemon.types[1] && (
                <span className={pokemon.types[1]}>
                  {pokemon.types[1][0].toUpperCase() +
                    pokemon.types[1].slice(1)}
                </span>
              )}
              {/* Statsssssss */}
              <div
                className="stat-value"
                style={{
                  position: "absolute",
                  right: 102,
                  display: "flex",
                  backgroundColor: "black",
                  borderRadius: 20,
                }}
                >
                <span
                  style={{
                    backgroundColor: "black",
                    borderRadius: 20,
                    padding: 10,
                    fontFamily: "cursive",
                    textDecorationLine:"underline"
                  }}
                >
                  {pokemon.stats["special-defense"] +
                    pokemon.stats.attack +
                    pokemon.stats["special-attack"] +
                    pokemon.stats.defense +
                    pokemon.stats.hp}
                </span>
              </div>
              <div
                className="stat-value"
                style={{
                  position: "absolute",
                  right: 204,
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                {pokemon.stats["special-defense"]}
              </div>
              <div
                className="stat-value"
                style={{
                  position: "absolute",
                  right: 290,
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                {pokemon.stats["special-attack"]}
              </div>
              <div
                className="stat-value"
                style={{
                  position: "absolute",
                  right: 380,
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                {pokemon.stats.defense}
              </div>
              <div
                className="stat-value"
                style={{
                  position: "absolute",
                  right: 464,
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                {pokemon.stats.attack}
              </div>
              <div
                className="statvalue"
                style={{
                  position: "absolute",
                  right: 544,
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: 20,
                }}
              >
                {pokemon.stats.hp}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
