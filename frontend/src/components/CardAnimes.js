import React from 'react'

export const CardAnimes = ({ anime , setCambioAnime}) => {
    const eliminarAnime = async (id) => {
        const url = `http://localhost:5000/anime/${id}`;
        const resp = await fetch(url, { method: 'DELETE' });
        console.log(resp);
        setCambioAnime(true);
        setTimeout(() => {
            setCambioAnime(false);
        }, 1000);
    }
    return (
        <>
            <img src={anime.url_img} alt={anime.anime} />
            <h2>{anime.anime}</h2>
            <span>{anime.fecha_publicacion}</span>
            <span>{anime.fecha_termino}</span>
            <p>{anime.temporada}</p>
            <p>{anime.capitulos}</p>
            {anime.estado ? <p>Activo</p> : <p>Desactivado</p>}
            <button onClick={() => eliminarAnime(anime.id)}>Eliminar</button>
        </>
    )
}
