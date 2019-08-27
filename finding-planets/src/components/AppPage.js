import React, { useState } from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Header, Button } from 'semantic-ui-react'

import data from "../data";
import Cards from "./Card";
import SomeForm from "./Form"

function AppPage() {

  const [cards, setCards] = useState(data);

  return (
    <div className="App">
      <header className="App-header">
      <Header as='h1'>
          The Transit Light Curve
        </Header>
        <img src="https://www.cfa.harvard.edu/~avanderb/tutorial/hatp7.png" className="App-logo" alt="logo" />
        
        <div className="Buttons">
        <Button.Group>
          <Button labelPosition='left' icon='left chevron' content='Previous' />
          <Button icon='close' content='Not a planet' />
          <Button icon='like' content='Planet' />
          <Button labelPosition='right' icon='right chevron' content='Forward' />
        </Button.Group>
        </div>

        <div><SomeForm /></div>
        <div className="Cards-listing">
          <Cards cardsList={cards} />
       </div> 

      </header>
    </div>
  );
}

export default AppPage;

