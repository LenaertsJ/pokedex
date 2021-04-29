import axios from 'axios'
import { useEffect, useState } from 'react'

import PokeGrid from '../../components/poke-grid.component'
import pokeball from '../../images/pokeball.png'

import './homepage.styles.scss';

function Homepage() {
    const [searchInput, setSearchInput] = useState("");
    const [toSearch, setSearch] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [pokedex, setPokeDex] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    const handleInputChange = (e) => {
      setSearchInput(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const inputLowerCase = searchInput.toLowerCase()
      setSearch(inputLowerCase);
    };
  
    useEffect(() => {
      if (toSearch) {
        setLoading(true);
        axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/${toSearch}/`)
          .then((response) => {
            setPokemon(response.data.varieties);
            setSearchInput("");
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }
    }, [toSearch]);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=100`)
          .then((response) => {
            console.log(response.data.results)
            setPokeDex(response.data.results);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
    }, []);

    const handleClickEvent = () => {

    }
  
    return (
      <div className="pokedex-app">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input onChange={handleInputChange} value={searchInput} type="text" placeholder="Find a pokéfriend..."/>
          </div>
          <button type="submit">search</button>
        </form>
        <img src={pokeball} alt="pokeball" className="pokeball"></img>
        {isLoading && <p>LOADING...</p>}
        {pokedex && <PokeGrid pokedex={pokedex} pokemon={pokemon} />}
      </div>
    );
}

export default Homepage
