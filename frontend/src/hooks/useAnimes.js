import {useState, useEffect} from 'react';
import { getAnimes } from '../helpers/getAnimes';

export const useAnimes = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getAnimes().then(anime => {
            setTimeout(() => {
                setstate({
                    data: anime,
                    loading: false
                })
            }, 2000);
        })
    }, [])

    return state;
}
