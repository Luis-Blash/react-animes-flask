import React from 'react'
import { useAnimes } from '../hooks/useAnimes'
import { CardAnimes } from './CardAnimes';

export const Anime = () => {
    const {data, loading} = useAnimes("");
    
    return (
        <div>
            <h1>Bienvenido a Anime</h1>
            {loading && <h1>Cargando</h1>}
            <div>
                {data.map((e)=>
                    <CardAnimes 
                        key={e.id}
                        anime={e}
                        useAnime={useAnimes}
                    />
                )}
            </div>
        </div>
    )
}
