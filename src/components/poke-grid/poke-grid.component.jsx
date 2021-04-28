import './poke-grid.styles.scss';
// import PokeCard from '../poke-card/poke-card.component'

const PokeGrid = ({pokedex}) => (
    <ul className='poke-grid'>
        {
            pokedex.map((variety, index) => <li key={index}><a href="">{variety.pokemon.name}</a></li>)
        }
    </ul>
)

export default PokeGrid;