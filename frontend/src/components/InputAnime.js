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
            className="search"
            name="nombre"
            placeholder="Anime"
            type="text" 
            onChange={handleInputChange}
            value={inputBusqueda}
            />
        </>
    )
}
