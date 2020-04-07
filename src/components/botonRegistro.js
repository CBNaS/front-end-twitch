import React, { Component } from 'react'
import styled from 'styled-components'

export default class botonRegistro extends Component {
    render() {
        return (
            <button style = {styles.primaryButton}>
                Registrarse
            </button>
        )
    }
}

const styles = 
{
    primaryButton : {
        background : 'rgb(115, 0, 230)',
        color : 'white',
        border : 'none',
        height : '40px',
        width : '100px',
    }
};