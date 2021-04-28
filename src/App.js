import { useState, useEffect } from "react";
import axios from "axios";
// import useSWR from "swr";

//STYLE IMPORT
import "./App.css";
import PokeGrid from "./components/poke-grid/poke-grid.component";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [pokedex, setPokeDex] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(searchInput);
  };

  useEffect(() => {
    if (pokemon) {
      setLoading(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
        .then((response) => {
          setPokeDex(response.data.varieties);
          setSearchInput("");
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [pokemon]);

  return (
    <div className="pokedex-app">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={searchInput} type="text" />
        <button>Search</button>
      </form>
      {isLoading && <p>LOADING...</p>}
      {pokedex && <PokeGrid pokedex={pokedex} />}
    </div>
  );
}

export default App;
