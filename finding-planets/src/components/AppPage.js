import React, { useState, useEffect} from 'react';

import 'semantic-ui-css/semantic.min.css'
import { Header, Button } from 'semantic-ui-react'
import axios from "axios";

import SomeForm from "./Form";
import Infocard from "./InfoCard";

function AppPage() {

  const [starobj, setStarobj] = useState([]);
  const [mainID, setMainID] = useState(1);



  // Functions for next/previous buttons
  const nextID = (mainID) => {
    if (mainID < 10) 
    {
    setMainID(mainID => mainID + 1);
    } else {
      setMainID(mainID = 1);
    }
  };

  const previousID = (mainID) => {
    if (mainID <= 1) 
    {
    setMainID(mainID = 10);
    } else {
      setMainID(mainID => mainID - 1);
    }
  };
  // End of functions foe next/previous buttons

  // Axios request part
    useEffect(() => {
      const token = localStorage.getItem('token');

    axios
      .get(`https://finding-planets.herokuapp.com/stars/`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        const starData = response.data;
        console.log("Star data is here", starData);
        setStarobj(starData);
        console.log(token)
      })
      .catch(function (error) {
          console.log("Oh-oh, something wrong", error);
      });
  }, []);
  console.log("ID counter value: ", mainID)
  // End of Axios request part

  // Preparing array for rendering of one element
  const oneElement = starobj.filter(function(oneEl) {
    if (oneEl.id === mainID) {
      return true;
    }
    return false;
  });
  console.log("Current element", oneElement);
  // End Preparing

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

       <div>
         <SomeForm mainID={mainID} starobj={starobj} />
       </div>

       <div className="Cards-listing">
        {oneElement.map(data => {
      return (
        <div >

          <Infocard 
           key={data.id}
           ticid={data.ticid}
           id={data.id}
           InsolationFlux={data.InsolationFlux}
           ratioSemiMajorAxisToStarRadius={data.ratioSemiMajorAxisToStarRadius}
           starTeffKelvin={data.starTeffKelvin}
          />
        </div>
      );
    })}
        </div>



      </header>
    </div>
  );
}

export default AppPage;

