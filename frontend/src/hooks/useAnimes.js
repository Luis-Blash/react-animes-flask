import {useState, useEffect} from 'react';
import { getAnimes } from '../helpers/getAnimes';

export const useAnimes = (nombre='') => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getAnimes(nombre).then(anime => {
            setTimeout(() => {
                setstate({
                    data: anime,
                    loading: false
                })
            }, 2000);
        })
    }, [nombre])

    return state;
}
