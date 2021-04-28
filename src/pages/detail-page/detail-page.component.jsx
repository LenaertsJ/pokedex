import { useParams } from 'react-router-dom'
import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import PokeDetail from '../../components/poke-detail/poke-detail.component'

function DetailPage() {
   
    const { name } = useParams()
    const [isLoading, setLoading] = useState(true)


    const fetcher = url => axios.get(url).then(response => response.data).finally(() => setLoading(false))
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}/`, fetcher)


    return (
      <div className="pokedex-app">
        <header>
          <h1>{name}</h1>
        </header>
        {isLoading && <p>LOADING...</p>}
        {error && <p>{error}</p>}
        {data && <PokeDetail pokemon={data}/>}
      </div>
    );
}

export default DetailPage
