import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPokemon } from '../services/api'
import '../styles/detail.css'

export default function Detail() {

    const { id } = useParams()
    const [pk, setPk] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function load() {
            const data = await getPokemon(id)
            setPk(data)
            setLoading(false)
        }
        load()
    }, [id])

    if (loading)
        return <h1>Carregando...</h1>

    return (

        <div className="detail">
            <Link className="back" to="/">← Voltar </Link>
            <div className="hero">
                <img className="pokemon-image" src={pk.sprites.other['official-artwork'].front_default} alt={pk.name} />
                <div>
                    <h1>#{pk.id}</h1>
                    <h2>{pk.name}</h2>
                    <div className="types">
                        {
                            pk.types.map(
                                t => (
                                    <span key={t.type.name}>{t.type.name}</span>
                                )
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="info">

                <div>
                    <b>Espécie</b>
                    <p>{pk.species.name}</p>
                </div>

                <div>
                    <b>Altura</b>
                    <p>{pk.height}</p>
                </div>

                <div>
                    <b>Peso</b>
                    <p>{pk.weight}</p>
                </div>
            </div>

            <h2>Habilidades</h2>

            <div className="skills">
                {
                    pk.abilities.map(
                        a => (
                            <span key={a.ability.name}>{a.ability.name}</span>
                        )
                    )
                }
            </div>

            <h2>Stats</h2>

            <div className="stats">
                {
                    pk.stats.map(
                        s => (

                            <div key={s.stat.name}>

                                <p>{s.stat.name}</p>

                                <div className="bar">
                                    <div className="fill" style={{ width: `${Math.min(s.base_stat, 100)}%` }} > </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}