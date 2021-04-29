import { Link } from 'react-router-dom'
import slugify from 'slugify'


const PokeGrid = ({pokedex}) => (
    <ul className='poke-grid'>
        {
            pokedex.map((variety, index) => <li className="list-item" key={index}><Link className="link" to={`/detail/${slugify(variety.pokemon.name, {
                lower: true,
                strict: true
            })}`}>{variety.pokemon.name}</Link></li>)
        }
    </ul>
)

export default PokeGrid;