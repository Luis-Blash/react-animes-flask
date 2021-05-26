import React, {useState} from 'react'
import { postAnime } from '../helpers/postAnime';
import { useForm } from '../hooks/useForm'


export const FormAnime = ({controlador, setControlador}) => {

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
            capitulos,estado, url_img } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        postAnime(formState).then(({mensaje}) => {
            setMensaje(mensaje);
        });
        setControlador({
            ...controlador,
            cambio:true
        })
        setTimeout(() => {
            setControlador({
                ...controlador,
                cambio: false
            })
        }, 1000);
    }
    return (
        <>
            <h1>Agregar nuevo anime</h1>
            <p>{mensaje}</p>
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
                        name="fecha_publicacion"
                        placeholder="DD/MM/YYYY"
                        value={fecha_publicacion}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label>Fecha de termino:</label>
                    <input
                        type="text"
                        name="fecha_termino"
                        placeholder="DD/MM/YYYY"
                        value={fecha_termino}
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
                        name="url_img"
                        placeholder="url de la url_img"
                        value={url_img}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
