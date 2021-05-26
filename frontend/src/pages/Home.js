import React, {useState} from 'react'
import { FormAnime } from '../components/FormAnime';
import { Anime } from '../components/Anime'
import { InputAnime } from '../components/InputAnime';

export const Home = () => {
    const [nombreAnimes, setNombreAnimes] = useState('')

    return (
        <>
            <h1>Animes flask</h1>
            <FormAnime />
            <InputAnime setNombreAnimes={setNombreAnimes} nombreAnimes={nombreAnimes} />
            <Anime nombreAnimes={nombreAnimes} />
        </>
    )
}
