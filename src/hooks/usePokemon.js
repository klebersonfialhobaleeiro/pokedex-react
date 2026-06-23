import { useEffect, useState } from 'react';
import { getPokemonList } from '../services/api';

export default function usePokemon() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const result = await getPokemonList();
                setData(result);
            } catch {
                setError('Erro ao carregar');
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    return { data, loading, error };

}