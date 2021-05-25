import React from 'react'
import { useForm } from '../hooks/useForm'


export const FormAnime = () => {

    const [formState, handleInputChange] = useForm({
        anime: '',
        f_publicacion: '',
        f_termino: '',
        temporada: 0,
        capitulos: 0,
        estado: true,
        imagen: ''
    });

    const { anime, f_publicacion,
            f_termino, temporada,
            capitulos,estado, imagen } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h1>Agregar nuevo anime</h1>
            <form id="form" onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="anime"
                        placeholder="Nombre del anime"
                        value={anime}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Fecha de publicacion:</label>
                    <input
                        type="text"
                        name="f_publicacion"
                        placeholder="DD/MM/YYYY"
                        value={f_publicacion}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Fecha de termino:</label>
                    <input
                        type="text"
                        name="f_termino"
                        placeholder="DD/MM/YYYY"
                        value={f_termino}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Temporada</label>
                    <input
                        type="number"
                        name="temporada"
                        placeholder="Temporada"
                        value={temporada}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Capitulos:</label>
                    <input
                        type="number"
                        name="capitulos"
                        placeholder="Capitulos"
                        value={capitulos}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Estado:</label>
                    <input
                        type="checkbox"
                        name="estado"
                        value={estado}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="text"
                        name="imagen"
                        placeholder="url de la imagen"
                        value={imagen}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
