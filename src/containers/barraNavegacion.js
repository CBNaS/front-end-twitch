import React, { Component } from 'react'
import BotonRegistrar from '../components/botonRegistro'
import styles from '../assets/style/style.css'
import Link from 'react-router-dom'


export default class barraNavegacion extends Component {
    render() {
        return (
            <nav className = "barra-nav">
                <span className = "navegacion">

                </span>
                <span className = "busqueda">
                    <input type = "search" id = "txt"></input>
                    <button id = "buscar">Buscar</button>
                </span>
                <span className = "cuentas">
                    <button>Iniciar sesion</button> 
                    <BotonRegistrar />
                    <button>P</button>
                </span>
            </nav>
        )
    }
}