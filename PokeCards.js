

const Pokecard = (props) => {
  const { pokeData } = props;

  return (
    <div className="poke-card">
      <img className="img" src={pokeData?.ThumbnailImage} />
      <h3>{pokeData?.name}</h3>
      <h2>{pokeData?.number}</h2>
     
      <button className="ability-btn" onClick={() => window.open("google.com")}>
        {pokeData?.abilities[0]}
      </button>

      <button
        className="weak-btn"
        onClick={() => window.open("youtube.com")}
      >
        {pokeData?.weakness[0]}
      </button>
    </div>
  );
};

export { Pokecard };
