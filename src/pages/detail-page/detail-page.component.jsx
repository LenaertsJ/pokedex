import { useParams } from 'react-router-dom'
import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PokeDetail from '../../components/poke-detail.component'

import './detail-page.styles.scss'

function DetailPage() {
   
    const { name } = useParams()
    const [isLoading, setLoading] = useState(true)


    const fetcher = url => axios.get(url).then(response => response.data).finally(() => setLoading(false))
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}/`, fetcher)


    return (
      <div className="pokedex-app">
        <Link className="link" to="/">-- HOME --</Link>
        <h1 className="subtitle">{name}</h1>
        {isLoading && <p>LOADING...</p>}
        {error && <p className="error">{error}</p>}
        {data && <PokeDetail pokemon={data}/>}
      </div>
    );
}

export default DetailPage
