import React, { Component } from 'react'
import { Link } from "react-router-dom"
import style from './style/style.css'
import logo from './img/logo.png'

export default class Navegacion extends Component {
    render() {
        return (
            <div>
                <nav className = "barra-nav">
                <span className = "navegacion">
                    <Link to = "/"><img src={logo} alt='twitch' /></Link>
                    <Link to = "/registar">DDDDD</Link>
                    <Link to = "/iniciar-sesion">Explorar</Link>
                    <Link to = "/iniciar-sesion">Probar Prime</Link>
                </span>
                <span className = "busqueda">
                    <input type = "textbox" placeholder = "Buscar"/>
                    <img src = "" width = "20px" height = "20px" alt = "Buscar"/>
                </span>
                <span className = "cuentas">
                    <Link to = "/"><img src = "" width = "20px" height = "20px" alt = "Notificaciones"/></Link>
                    <input type = "button" value="Iniciar sesion"></input>
                    <input type = "button" value="Crear cuenta"></input>
                    <Link to = "/"><img src = "" width = "20px" height = "20px" alt = "Perfil"/></Link>
                </span>
            </nav>
                <div className = "barra-lateral">
                    <p>Únete a la comunidad de <span>Twitch</span>!</p>
                </div>
            </div>
        )
    }
}

