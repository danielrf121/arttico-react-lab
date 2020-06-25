import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. AAAh!
        </p>
        <p>
          Env: {process.env.REACT_APP_ENV}
        </p>
        <p>
          v{process.env.REACT_APP_VERSION}
        </p>
        <Link to="/sobre">
          <div className="batata">Ir para a página sobre \o/</div>
        </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={saveStorage}>
          Teste storage
        </button>
        <Button color="primary">Hello World</Button>
      </header>
    </div>
  );
}

function saveStorage() {
  localStorage.setItem('@react-app/username', 'testando123');
  console.log('......', localStorage.getItem('@react-app/username'));
}

export default App;
