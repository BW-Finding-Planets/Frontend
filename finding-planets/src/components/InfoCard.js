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
            <Item.Header>Star {props.ticid}</Item.Header>
            <Item.Meta>
              <span className='price'>Radius</span>
              <span className='stay'>{props.ratioSemiMajorAxisToStarRadius}</span>
            </Item.Meta>
            <p>Insolation Flux: {props.InsolationFlux}</p>
            {/* <p>magnitude: {props.}</p>    */}
            {/* <p>luminosity: {props.}</p>      */}
            {/* <p>star_mass: {props.}</p>      */}
            <p>star_radius: {props.ratioSemiMajorAxisToStarRadius}</p>     
            {/* <p>constellation: {props.}</p>      */}
            {/* <p>rightascension: {props.}</p>      */}
            {/* <p>declination: {props.}</p>    */}
            <p>starTeffKelvin: {props.starTeffKelvin}</p>   
            {/* <p>model_prediction: {props.}</p>    */}
            {/* <p>distance: {props.}</p> */}
          </Item.Content>
        </Item>
    
      </Item.Group>
    
    );
  };
  
  export default StarCard;