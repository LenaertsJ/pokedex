

const PokeDetail = ({pokemon}) => {

    return (
        <div className="poke-detail">
            <div className="stats">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="poke-img"></img>
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
            </div>
            <div className="detail">
                <p>Abilities:</p>
                <ul className="list">
                    {
                        pokemon.abilities.map((ability, index) => <li key={index} className="list-item abilities">{ability.ability.name}</li>)
                    }
                </ul>
            </div>
            <div>
                <p>Moves:</p>
                <ul className="list">
                    {
                        pokemon.moves.map((move, index) => <li key={index} className="list-item moves">{move.move.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default PokeDetail;