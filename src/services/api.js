const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemonList() {
    const response = await fetch(
        `${BASE_URL}pokemon?limit=20`
    );

    if (!response.ok)
        throw new Error('Erro ao buscar');

    const data = await response.json();

    const pokemonData =
        await Promise.all(
            data.results.map(
                async (pokemon) => {
                    const res =
                        await fetch(
                            pokemon.url
                        );

                    return res.json();
                }
            )
        );

    return pokemonData;
}

export async function getPokemon(id) {
    const response =
        await fetch(
            `${BASE_URL}pokemon/${id}`
        );

    if (!response.ok)
        throw new Error('Pokémon não encontrado');

    return response.json();
}