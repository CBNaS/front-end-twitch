import CanalesImagen from './canalesImagen'
import CanalesInformacion from './canalesInformacion'
import React from 'react'
import styles from '../assets/style/style.css'

export default function canales() {
    return (
        <div>
            <div>
                <CanalesImagen />
            </div>
            <div>
                <CanalesInformacion />
            </div>
        </div>
    )
}