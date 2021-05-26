import React, {useState} from 'react'

export const InputAnime = ({setNombreAnimes}) => {
    const [inputBusqueda, setInputBusqueda] = useState('');

    const handleInputChange = ({target})=>{
        setInputBusqueda(target.value);
        setNombreAnimes(inputBusqueda)
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
