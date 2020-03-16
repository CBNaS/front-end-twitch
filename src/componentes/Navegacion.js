import React, { Component } from 'react'
import { Link } from "react-router-dom"
import style from './style/style.css'

export default class Navegacion extends Component {
    render() {
        return (
            <div>

<nav className = "barra-nav">
                <span className = "navegacion">
                    <Link to = "/"><img src = "" width = "20px" height = "20px"/></Link>
                    <Link to = "/registar">Descubrir</Link>
                    <Link to = "/iniciar-sesion">Explorar</Link>
                    <Link to = "/iniciar-sesion">Probar Prime</Link>
                    <Link to = "/iniciar-sesion">...</Link>
                </span>
                <span className = "busqueda">
                    <input type = "textbox" />
                    <img src = "" width = "20px" height = "20px"/>
                </span>
                <span className = "cuentas">
                    <Link to = "/"><img src = "" width = "20px" height = "20px"/></Link>
                    <input type = "button" value="Iniciar sesion"></input>
                    <input type = "button" value="Crear cuenta"></input>
                    <Link to = "/"><img src = "" width = "20px" height = "20px"/></Link>
                </span>
            </nav>
            <div className = "barra-lateral">
                Canales recomendados<p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p><p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p><p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p><p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p><p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>

                <p>
                    Parrafo
                </p>
            </div>
            </div>
        )
    }
}

