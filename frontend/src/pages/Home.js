import React, {useState} from 'react'
import { FormAnime } from '../components/FormAnime';
import { Anime } from '../components/Anime'
import { InputAnime } from '../components/InputAnime';

export const Home = () => {
    const [controlador, setControlador] = useState({
        nombreAnimes: '',
        cambio: false
    })
    return (
        <>
            <h1>Animes flask</h1>
            <FormAnime />
            <InputAnime setControlador={setControlador} controlador={controlador} />
            <Anime controlador={controlador} setControlador={setControlador}/>
        </>
    )
}
