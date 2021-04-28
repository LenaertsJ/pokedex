import axios from 'axios'
import { useEffect, useState } from 'react'

import PokeGrid from '../../components/poke-grid.component'

import './homepage.styles.scss';

function Homepage() {
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
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input onChange={handleInputChange} value={searchInput} type="text" placeholder="Find a pokéfriend..."/>
          </div>
          <button type="submit">search</button>
        </form>
        {/* <h1 className="subtitle">Poké species</h1> */}
        {isLoading && <p>LOADING...</p>}
        {pokedex && <PokeGrid pokedex={pokedex} />}
      </div>
    );
}

export default Homepage
