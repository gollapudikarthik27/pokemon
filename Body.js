import { Pokecard } from "./SubComponents/PokeCards";
import pokeList from "./HardData/PokemonList";
import { useEffect, useState } from "react";
import { Shimmer } from "./SubComponents/Shimmer";

const Body = () => {
  const [PokemonsData, setPokemonsData] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [filterPokemonsData,setfilterPokemonsData] =useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch("https://www.pokemon.com/us/api/pokedex/kalos");
    const JSON = await Data.json();
    //console.log(JSON);
    setPokemonsData(JSON);
    setfilterPokemonsData(JSON)
  };

  //this is conditional rendering

  return PokemonsData == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="buttons">
        <button
          className="search-btn"
          onClick={() => {
            const FilteredPokemonsData = PokemonsData.filter(
              (pok) => pok?.id == inputValue
            );
            setfilterPokemonsData(FilteredPokemonsData);
          }}
        >
          searchById
        </button>

        <input
          type="number"
          className="inputValue"
          value={inputValue}
          onChange={(e) => {
            setinputValue(e.target.value);
          }}
        />
      </div>
      <div className="poke-container">
        {filterPokemonsData.map((pokemons) => (
          <Pokecard pokeData={pokemons} />
        ))}
      </div>
    </div>
  );
};

export default Body;
