import React from 'react'
import { useAnimes } from '../hooks/useAnimes'
import { CardAnimes } from './CardAnimes';

export const Anime = ({controlador, setControlador}) => {
    const {nombreAnimes, cambio} = controlador;
    const {data, loading} = useAnimes(nombreAnimes, cambio);
    return (
        <div className="anime">
            <h1>Bienvenido a Anime</h1>
            {loading && <p>Cargando</p>}
            <div className="grid-animes">
                {data.map((e)=>
                    <CardAnimes 
                        key={e.id}
                        anime={e}
                        controlador={controlador}
                        setControlador={setControlador}
                    />
                )}
            </div>
        </div>
    )
}
