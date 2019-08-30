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
              <span className='price'>From</span>
              <span className='stay'>"{props.constellation}" constellation</span>
            </Item.Meta>
            <div className='CentralCard'>
                <div>
                    <p>Magnitude: {props.magnitude}</p>   
                    <p>Luminosity: {props.luminosity}</p>     
                    <p>Star_mass: {props.star_mass}</p>     
                    <p>Star_radius: {props.star_radius}</p>     
                    <p>Constellation: {props.constellation}</p>     
                </div>
                <div>
                    <p>Rightascension: {props.rightascension}</p>     
                    <p>Declination: {props.declination}</p>   
                    <p>StarTeffKelvin: {props.starTeffKelvin}</p>   
                    <p>Model_prediction: {props.predictions}</p>   
                    <p>Distance: {props.distance}</p>
                </div>
            </div>
          </Item.Content>
        </Item>
    
      </Item.Group>
    
    );
  };
  
  export default StarCard;