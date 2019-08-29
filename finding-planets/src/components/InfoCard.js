import React from "react";

import { Image, Item, Container } from 'semantic-ui-react'


const StarCard = props => {
    // const items = [
    //     {
    //       header: `${props.name}`,
    //       meta: `Gender: ${props.gender}`,
    //       description: `Hair_color: ${props.hair_color}, Height: ${props.height}`,
    //     }

    //   ]
      
      const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    
    // if (!props.name) return <h3>Loading...</h3>;
    // else
    // const key = {props.key}
    return (
        <Item.Group >
        <Item>
          <Item.Image size='tiny' src={require(`../images/star${props.id}.jpg`)} />
           
          <Item.Content>
            <Item.Header>{props.tceid}</Item.Header>
            <Item.Meta>
              <span className='price'>$1200</span>
              <span className='stay'>1 Month</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
          </Item.Content>
        </Item>
    
      </Item.Group>
    
    );
  };
  
  export default StarCard;