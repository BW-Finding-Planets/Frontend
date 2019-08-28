import React, { useState, useEffect} from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Header, Button } from 'semantic-ui-react'
import axios from "axios";

import data from "../data";
import Cards from "./Card";
import SomeForm from "./Form"

function AppPage() {

  const [cards, setCards] = useState(data);
  const [starobj, setStarobj] = useState([]);
  const [mainID, setMainID] = useState(1);

  const nextID = () => {
    setMainID(mainID => mainID + 1);
  };
  const previousID = () => {
    setMainID(mainID => mainID - 1);
  };


    useEffect(() => {
      // console.log("testes")
      const token = localStorage.getItem('token');
      // console.log(token)

    axios
      .get(`https://finding-planets.herokuapp.com/stars/`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        const starData = response;
        console.log("Star data is here", starData);
        setStarobj(starData);
        console.log(token)
      })
      .catch(function (error) {
          console.log("Oh-oh, something wrong", error);
      });
  }, []);
  console.log("ID counter value: ", mainID)

  return (
    <div className="App">
      <header className="App-header">
      <Header as='h1'>
          The Transit Light Curve
        </Header>
        <img src={require(`../pics/${mainID}.png`)} className="Curve-Graph" alt="Light Curve Graph" />
        
        <div className="Buttons">
        <Button.Group>
          <Button 
            labelPosition='left' 
            icon='left chevron' 
            content='Previous' 
            onClick={() => previousID(mainID)}
          />
          <Button icon='close' content='Not a planet' />
          <Button icon='like' content='Planet' />
          <Button
            labelPosition='right' 
            icon='right chevron' 
            content='Forward' 
            onClick={() => nextID(mainID)}
            />
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

