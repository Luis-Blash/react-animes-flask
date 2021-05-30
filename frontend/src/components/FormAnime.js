import React, { useState } from 'react'
import { postAnime } from '../helpers/postAnime';
import { useForm } from '../hooks/useForm'


export const FormAnime = ({ controlador, setControlador }) => {

    const [mensaje, setMensaje] = useState('')

    const [formState, handleInputChange] = useForm({
        anime: '',
        fecha_publicacion: '',
        fecha_termino: '',
        temporada: 0,
        capitulos: 0,
        estado: true,
        url_img: ''
    });

    const { anime, fecha_publicacion,
        fecha_termino, temporada,
        capitulos, estado, url_img } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        postAnime(formState).then(({ mensaje }) => {
            setMensaje(mensaje);
        });
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

    console.log(mensaje);
    
    return (
        <div id="menu" className="form">
            <h1>Agregar nuevo anime</h1>
            <form id="form" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="anime"
                    placeholder="Nombre del anime"
                    value={anime}
                    onChange={handleInputChange}
                />

                <label>Fecha de publicacion:</label>
                <input
                    type="text"
                    name="fecha_publicacion"
                    placeholder="DD/MM/YYYY"
                    value={fecha_publicacion}
                    onChange={handleInputChange}
                />

                <label>Fecha de termino:</label>
                <input
                    type="text"
                    name="fecha_termino"
                    placeholder="DD/MM/YYYY"
                    value={fecha_termino}
                    onChange={handleInputChange}
                />

                <label>Temporada</label>
                <input
                    type="number"
                    name="temporada"
                    placeholder="Temporada"
                    value={temporada}
                    onChange={handleInputChange}
                />

                <label>Capitulos:</label>
                <input
                    type="number"
                    name="capitulos"
                    placeholder="Capitulos"
                    value={capitulos}
                    onChange={handleInputChange}
                />

                <div className="status">
                    <label>Estado:</label>
                    <input
                        type="checkbox"
                        name="estado"
                        value={estado}
                        onChange={handleInputChange}
                    />
                </div>

                <label>Imagen:</label>
                <input
                    type="text"
                    name="url_img"
                    placeholder="url de la url_img"
                    value={url_img}
                    onChange={handleInputChange}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
