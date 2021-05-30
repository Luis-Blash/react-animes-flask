import React from 'react'
import chapter from '../assets/chapter.png'
import video from '../assets/video.png'

export const CardAnimes = ({ anime, controlador, setControlador }) => {
    const eliminarAnime = async (id) => {
        const url = `http://localhost:5000/anime/${id}`;
        const resp = await fetch(url, { method: 'DELETE' });
        console.log(resp)
        setControlador({
            ...controlador,
            cambio: true
        })
        setTimeout(() => {
            setControlador({
                ...controlador,
                cambio: false
            })
        }, 1000);
    }
    return (
        <div className="card-anime">
            <div className="img-anime">
                <img src={anime.url_img} alt={anime.anime} />
            </div>
            <div className="datos-anime">
                <h2>{anime.anime}</h2>
                <div className="fechas-anime">
                    <span>{anime.fecha_publicacion} --- </span>
                    <span>{anime.fecha_termino}</span>
                </div>
                <div className="info-anime">
                    <div>
                        <div>
                            <p>{anime.temporada}</p>
                        </div>
                        <img src={video} alt="Temporada" />
                    </div>
                    <div>
                        <div>
                            <p>{anime.capitulos}</p>
                        </div>
                        <img src={chapter} alt="Capitulos" />
                    </div>
                </div>
                {anime.estado ? <p>Activo</p> : <p>Desactivado</p>}
                <button className="btn-eliminar" onClick={() => eliminarAnime(anime.id)}>Eliminar</button>
            </div>
        </div>
    )
}
