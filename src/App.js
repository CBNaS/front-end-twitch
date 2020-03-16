import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Navegacion from './componentes/Navegacion'
import Inicio from './componentes/Inicio'
import inicioSesion from './componentes/inicioSesion'
import Registro from './componentes/Registro'

function App() {
  return (
    <Router>
      <Navegacion />
      <Route path = "/" exact component = {Inicio} />
      <Route path = "/registar" exact component = {Registro} />
      <Route path = "/iniciar-sesion" component = {inicioSesion} />
    </Router>
  );
}

export default App;
