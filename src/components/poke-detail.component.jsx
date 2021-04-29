

const PokeDetail = ({pokemon}) => {

    return (
        <div className="poke-detail">
            <div className="stats">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="This one is shy..." className="poke-img"></img>
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
            </div>
            <div className="detail">
                <h4>Abilities:</h4>
                <ul className="list">
                    {
                        pokemon.abilities.map((ability, index) => <li key={index} className="list-item abilities">{ability.ability.name}</li>)
                    }
                </ul>
            </div>
            <div>
                <h4>Moves:</h4>
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