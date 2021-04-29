import { Link } from 'react-router-dom'
import slugify from 'slugify'


const PokeGrid = ({pokedex, pokemon}) => {
    if(pokemon){
        return (
            <ul className='poke-grid'>
        {
            pokemon.map((variety, index) => 
            <li className="list-item" key={index}>
                {/* <img src={}></img> */}
                <Link className="link" to={`/detail/${slugify(variety.pokemon.name, {lower: true,strict: true})}`}>{variety.pokemon.name}</Link>
            </li>)
        }
            </ul>
        )
    } else {
        return  (
        <ul className='poke-grid'>
        {
            pokedex.map((variety, index) => 
            <li className="list-item" key={index}>
                {/* <img src={}></img> */}
                <Link className="link" to={`/detail/${slugify(variety.name, {lower: true,strict: true})}`}>{variety.name}</Link>
            </li>)
        }
        </ul>)
    }
}


export default PokeGrid;