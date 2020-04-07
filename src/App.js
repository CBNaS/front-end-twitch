import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import BarraNavegacion from './containers/barraNavegacion'
import BarraLateral from './containers/barraLateral'
import Principal from './containers/inicio'

function App() {
  return (
    <Router>
      <BarraNavegacion />
      <BarraLateral />
      <Principal />
    </Router>
  );
}


export default App;
