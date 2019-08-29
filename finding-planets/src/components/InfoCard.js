import React from "react";

import { Image, Item, Dimmer, Loader, Segment } from 'semantic-ui-react'


const StarCard = props => {
     
    if (!props.id) return <div>    
        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src='/images/wireframe/short-paragraph.png' />
        </Segment>
    </div>;
    else
    // const key = {props.key}
    return (
        <Item.Group >
        <Item>
         
           
          <Item.Content>
            <Item.Header>Star {props.ticid_x}</Item.Header>
            <Item.Meta>
              <span className='price'>Radius</span>
              <span className='stay'>{props.star_radius}</span>
            </Item.Meta>
            <p>Insolation Flux: {props.InsolationFlux}</p>
            <p>magnitude: {props.magnitude}</p>   
            <p>luminosity: {props.luminosity}</p>     
            <p>star_mass: {props.star_mass}</p>     
            <p>star_radius: {props.star_radius}</p>     
            <p>constellation: {props.constellation}</p>     
            <p>rightascension: {props.rightascension}</p>     
            <p>declination: {props.declination}</p>   
            <p>starTeffKelvin: {props.starTeffKelvin}</p>   
            <p>model_prediction: {props.predictions}</p>   
            <p>distance: {props.distance}</p>
          </Item.Content>
        </Item>
    
      </Item.Group>
    
    );
  };
  
  export default StarCard;