import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2>Aduze Test</h2>
        <Form />
        </div>
      </div>
    );
  }
}

export default App;
