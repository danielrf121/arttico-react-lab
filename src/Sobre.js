import React, { Component } from 'react';
import logo from './logo.svg';
import './Sobre.scss';

class Sobre extends Component {
 render() {
 return (
    <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Página de Sobre</h1>
       </header>
       <p className="App-sobre">
            Exemplo de Página Sobre :)
       </p>
    </div>
 );
 }
}
export default Sobre;