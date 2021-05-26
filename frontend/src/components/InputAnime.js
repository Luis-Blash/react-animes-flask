import React, {useState} from 'react'

export const InputAnime = ({controlador ,setControlador}) => {
    const [inputBusqueda, setInputBusqueda] = useState('');

    const handleInputChange = ({target})=>{
        setInputBusqueda(target.value);
        setControlador({
            ...controlador,
            nombreAnimes: inputBusqueda
        })
    }
    return (
        <>
            <input 
            type="text" 
            placeholder="Anime"
            name="nombre"
            value={inputBusqueda}
            onChange={handleInputChange}
            />
        </>
    )
}
