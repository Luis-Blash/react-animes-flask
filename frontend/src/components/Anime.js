import React from 'react'
import { useAnimes } from '../hooks/useAnimes'

export const Anime = () => {
    const {data, loading} = useAnimes();
    console.log(data, loading);
    
    return (
        <div>
            <h1>Bienvenido a Anime</h1>
            {loading && <h1>Cargando</h1>}
            <div>
                {data.map((e)=>(
                    <div key={e.id}>
                        <img src={e.url_img} alt={e.anime} />
                        <h2>{e.anime}</h2>
                        <span>{e.fecha_publicacion}</span>
                        <span>{e.fecha_termino}</span>
                        <p>{e.temporada}</p>
                        <p>{e.capitulos}</p>
                        {e.estado ? <p>Activo</p> : <p>Desactivado</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}
