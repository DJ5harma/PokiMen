const Stats = ({ dbCurr }) => {
  return (
    <div id="stat-div">
      <div className="stat">
        <p>HP</p>
        <p>{dbCurr.stats.hp}</p>
      </div>
      <div className="stat">
        <p>Atk</p>
        <p>{dbCurr.stats.attack}</p>
      </div>
      <div className="stat">
        <p>Def</p>
        <p>{dbCurr.stats.defense}</p>
      </div>
      <div className="stat">
        <p>SpA</p>
        <p>{dbCurr.stats["special-attack"]}</p>
      </div>
      <div className="stat">
        <p>SpD</p>
        <p>{dbCurr.stats["special-defense"]}</p>
      </div>
      <div className="stat">
        <p>Speed</p>
        <p>{dbCurr.stats.speed}</p>
      </div>
      <div className="stat">
        <b>Total</b>
        <b>
          {dbCurr.stats.hp +
            dbCurr.stats.attack +
            dbCurr.stats.defense +
            dbCurr.stats["special-attack"] +
            dbCurr.stats["special-defense"]}
        </b>
      </div>
    </div>
  );
};

export default Stats;
