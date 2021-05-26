import React, {useState} from 'react'
import { useAnimes } from '../hooks/useAnimes'
import { CardAnimes } from './CardAnimes';

export const Anime = ({nombreAnimes}) => {
    const [cambioAnime, setCambioAnime] = useState(false)
    const {data, loading} = useAnimes(nombreAnimes, cambioAnime);
    console.log(cambioAnime);

    return (
        <div>
            <h1>Bienvenido a Anime</h1>
            {loading && <p>Cargando</p>}
            <div>
                {data.map((e)=>
                    <CardAnimes 
                        key={e.id}
                        anime={e}
                        setCambioAnime={setCambioAnime}
                    />
                )}
            </div>
        </div>
    )
}
