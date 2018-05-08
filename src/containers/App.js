import React, { Component } from 'react';
import Contacto from './../components/contacto';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Green Leaves</h1>
        </header>
        <div className="App-container">
          <Contacto />
        </div>
      </div>
    );
  }
}

export default App;
