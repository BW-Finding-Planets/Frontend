import React, { useState } from 'react';
import './App.css';

import 'semantic-ui-css/semantic.min.css'
import { Header, Card, Container, Grid } from 'semantic-ui-react'

import data from "./data";
import Cards from "./components/Card";

function App() {

  const [cards, setCards] = useState(data);

  return (
    <div className="App">
      <header className="App-header">
      <Header as='h1'>
          The Transit Light Curve
        </Header>
        <img src="https://www.cfa.harvard.edu/~avanderb/tutorial/hatp7.png" className="App-logo" alt="logo" />
        <Container text>
        <Card.Group>
          <Cards cardsList={cards} />
        </Card.Group>
      </Container> 

      </header>
    </div>
  );
}

export default App;
