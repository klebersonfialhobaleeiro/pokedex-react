import { Link } from 'react-router-dom';
import '../styles/cards.css'

const colors = {
    grass: '#74CB48',
    fire: '#F57D31',
    water: '#6493EB',
    electric: '#F9CF30',
    bug: '#A7B723',
    poison: '#A43E9E'
};

export default function PokemonCard({
    pokemon
}) {
    const type =
        pokemon.types[0].type.name;
    return (
        <Link
            to={`/pokemon/${pokemon.id}`}
            className="card"
            style={{
                background:
                    colors[type] || '#ddd'
            }}
        >
            <p>#{pokemon.id}</p>
            <img src={pokemon.sprites.front_default} />
            <h3>{pokemon.name}</h3>
            <div>
                {
                    pokemon.types.map(
                        t => (
                            <span key={t.type.name}>{t.type.name}</span>
                        )
                    )
                }
            </div>
        </Link>
    )
}