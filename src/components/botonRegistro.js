import React, { Component } from 'react'
import styled from 'styled-components'

export default class botonRegistro extends Component {
    render() {
        return (
            <button style = {styles.button}>
                Registrar
            </button>
        )
    }
}

const styles = 
{
    button : {
        background : 'rgb(115, 0, 230)',
        color : 'white'
    }
};