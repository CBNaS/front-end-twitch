import React, { Component } from 'react'
import styled from 'styled-components'

const canalInfo = 
[
    {
        Nombre : "Canal 1",
        Juego : "DBD"
    },
    {
        Nombre : "Canal 2",
        Juego : "DBD"
    },
    {
        Nombre : "Canal 3",
        Juego : "DBD"
    },
    {
        Nombre : "Canal 4",
        Juego : "DBD"
    },
    {
        Nombre : "Canal 5",
        Juego : "DBD"
    }
];


export default class canalesInformacion extends Component {
    render() {
        return (
            <div>
                {canalInfo.map((item) => {
                    return (
                        <span style = {estilo.size}>{item.Nombre+" "+item.Juego}</span>
                    );
                })}
            </div>
        )
    }
}


const estilo = 
{
    size : {
        'display' : 'flex',
        'background-color' : 'red',
        'border-style' : 'solid'
    }
};