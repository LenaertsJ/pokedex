import './poke-grid.styles.scss';
import { Link } from 'react-router-dom'
import slugify from 'slugify'
// import PokeCard from '../poke-card/poke-card.component'

const PokeGrid = ({pokedex}) => (
    <ul className='poke-grid'>
        {
            pokedex.map((variety, index) => <li key={index}><Link to={`/detail/${slugify(variety.pokemon.name, {
                lower: true,
                strict: true
            })}`}>{variety.pokemon.name}</Link></li>)
        }
    </ul>
)

export default PokeGrid;