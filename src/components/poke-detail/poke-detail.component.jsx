import './poke-detail.styles.scss';

const PokeDetail = ({pokemon}) => {

    return (
        <div className="poke-detail">
            <img src={pokemon.sprites.other.dream_world.front_default} alt="poke-img"></img>
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
            <div className="detail">
                <p>Abilities:</p>
                <ul>
                    {
                        pokemon.abilities.map((ability, index) => <li key={index}>{ability.ability.name}</li>)
                    }
                </ul>
            </div>
            <div className="detail">
                <p>Moves:</p>
                <ul>
                    {
                        pokemon.moves.map((move, index) => <li key={index}>{move.move.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default PokeDetail;