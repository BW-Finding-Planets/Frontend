import React, { useState } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css'
import { Header, Card, Container, Grid } from 'semantic-ui-react'

import data from "./data";
import Cards from "./components/Card";
import SomeForm from "./components/Form"

function App() {

  const [cards, setCards] = useState(data);

  return (
    <div className="App">
      <header className="App-header">
      <Header as='h1'>
          The Transit Light Curve
        </Header>
        <img src="https://www.cfa.harvard.edu/~avanderb/tutorial/hatp7.png" className="App-logo" alt="logo" />
        
        <div><SomeForm /></div>


        <div className="Cards-listing">
          <Cards cardsList={cards} />
       </div> 

      </header>
    </div>
  );
}

export default App;
