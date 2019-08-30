import React from 'react';

import { Image, Item, Dimmer, Loader, Segment } from 'semantic-ui-react';

const StarCard = props => {
  if (!props.id)
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      </div>
    );
  // const key = {props.key}
  else
    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Star {props.ticid_x}</Item.Header>
            <Item.Meta>
              <span className="price">From</span>
              <span className="stay">
                {props.constellation} constellation
              </span>
            </Item.Meta>
            <div className="CentralCard">
              <div>
                <p>Magnitude: </p><p className="PropsCard">{props.magnitude}</p><br />
                <p>Luminosity: </p><p className="PropsCard">{props.luminosity}</p><br />
                <p>Star mass:</p> <p className="PropsCard">{props.star_mass} in masses of our sun</p><br />
                <p>Star radius:</p> <p className="PropsCard">{props.star_radius}°</p><br />
              </div>
              <div>
                <p>Right ascension: </p><p className="PropsCard">{props.rightascension}°</p><br />
                <p>Declination: </p><p className="PropsCard">{props.declination}°</p><br />
                <p>Effective temperature of star: </p><p className="PropsCard">{props.starTeffKelvin} Kelvin</p><br />

                <p>Distance from Earth: </p><p className="PropsCard">{props.distance} light years</p><br />
              </div>
            </div>
          </Item.Content>
        </Item>
      </Item.Group>
    );
};

export default StarCard;

