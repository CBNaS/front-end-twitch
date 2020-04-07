import Canales from '../components/canales'
import styles from '../assets/style/style.css'
import React, { Component } from 'react'
import BotonRegistro from '../components/botonRegistro'
import styled from 'styled-components'

export default class barraLateral extends Component {
    render() {
        return (
            <nav className = "barra-lat">
                <div>Canales recomendados</div>
                <Canales />
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <p>Parrafo</p>
                <div className = "unete">
                    <div style = {estilo.first}>
                        ¡Únete a la comunidad de 
                    </div>
                    <span style = {estilo.twitch}>Twitch!</span>
                    <div style = {estilo.second}>
                        Descubre las mejores transmisiones en directo allá donde estés.
                    </div>
                    <BotonRegistro />
                </div>
            </nav>
        )
    }
}

const estilo = 
{
    first : {
        'font-size' : '26px'
    },
    twitch : 
    {
        color : 'rgb(115, 0, 230)',
        'font-size' : '55px'
    },
    second  : 
    {
        color : 'white',
        'font-size' : '12px',
        'padding-bottom' : '10px'
    }
};
