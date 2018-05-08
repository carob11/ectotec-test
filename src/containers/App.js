import React, { Component } from 'react';
import Contacto from './../components/contacto';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 id="title">Green Leaves</h1>
        </header>
        <div className="container">
          <Contacto />
        </div>
      </div>
    );
  }
}

export default App;
