import React, { useState } from 'react'
import { FormAnime } from '../components/FormAnime';
import { Anime } from '../components/Anime'
import { InputAnime } from '../components/InputAnime';

import './Home.css'

export const Home = () => {
    const [controlador, setControlador] = useState({
        nombreAnimes: '',
        cambio: false
    })

    const showPost = () => {
        const menu = document.querySelector("#menu");
        menu.classList.toggle("margin-left");
        const hamburger = document.querySelector(".hamburger");
        hamburger.classList.toggle("open");
    }

    return (
        <>
            <h1>Animes flask</h1>
            <div className="bar"></div>
            <div className="fix">
                <div className="menu-div">
                    <div className="hamburger" onClick={showPost}>
                        <p></p>
                    </div>
                    <FormAnime setControlador={setControlador} controlador={controlador} />
                </div>
            </div>
            <InputAnime setControlador={setControlador} controlador={controlador} />
            <Anime controlador={controlador} setControlador={setControlador} />
        </>
    )
}
