import React from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react'

import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header as='h1'>
          The Transit Light Curve
        </Header>
        <img src="https://www.cfa.harvard.edu/~avanderb/tutorial/hatp7.png" className="App-logo" alt="logo" />
        

      </header>
    </div>
  );
}

export default App;
