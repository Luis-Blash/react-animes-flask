import React from 'react'
import { FormAnime } from '../components/FormAnime';
// import { Anime } from '../components/Anime'

export const Home = () => {
    // const [nombreAnime, setNombreAnime] = useState('');

    return (
        <div>
            <h1>Animes flask</h1>
            <FormAnime />
            {/* <Anime /> */}
        </div>
    )
}
