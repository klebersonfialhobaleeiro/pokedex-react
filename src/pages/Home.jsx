import usePokemon from '../hooks/usePokemon';

import PokemonCard
    from '../components/PokemonCard';

export default function Home() {

    const {data, loading, error } = usePokemon();

    if (loading)
        return <h1>Carregando...</h1>;

    if (error)
        return <h1>{error}</h1>;

    return (

        <div className="grid">
            {
                data.map(
                    p => (
                        <PokemonCard key={p.id}pokemon={p}/>
                    )
            )}
        </div>

    )

}