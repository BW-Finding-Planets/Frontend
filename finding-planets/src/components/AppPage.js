import React, { useState, useEffect } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Header, Button, Statistic } from 'semantic-ui-react';
import axios from 'axios';

import RatingStar from './RatingStar';
import Infocard from './Infocard';

function AppPage(props) {
  const [starobj, setStarobj] = useState([]);
  const [starStat, setStarStat] = useState([]);
  const [mainID, setMainID] = useState(1);

  // Functions for next/previous/middle buttons
  const nextID = mainID => {
    if (mainID < 54) {
      setMainID(mainID => mainID + 1);
    } else {
      setMainID((mainID = 1));
    }
  };

  const previousID = mainID => {
    if (mainID <= 1) {
      setMainID(54);
    } else {
      setMainID(mainID => mainID - 1);
    }
  };
  const againID = () => {
    axios
      .get(`https://finding-planets.herokuapp.com/candidate/`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(response => {
        const starStatistic = response.data;
        console.log('Statistic data is here', starStatistic);
        setStarStat(starStatistic);
      })
      .catch(function(error) {
        console.log('Oh-oh, something wrong with repeiter statistic', error);
      });
  };
  // End of functions foe next/previous buttons

  // Axios request part
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`https://finding-planets.herokuapp.com/stars/`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(response => {
        const starData = response.data;
        console.log('Star data is here', starData);
        setStarobj(starData);
        console.log(token);
      })
      .catch(function(error) {
        console.log('Oh-oh, something wrong with main array', error);
      });
  }, []);
  console.log('ID counter value: ', mainID);
  // End of Axios request part

  // Preparing array for rendering of one element
  const oneElement = starobj.filter(function(oneEl) {
    if (oneEl.id === mainID) {
      return true;
    }
    return false;
  });
  // console.log("Current element", oneElement);
  // End Preparing

  // Axios statistic request part
  useEffect(() => {
    axios
      .get(`https://finding-planets.herokuapp.com/candidate/`, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(response => {
        const starStatistic = response.data;
        console.log('Statistic data is here', starStatistic);
        setStarStat(starStatistic);
      })
      .catch(function(error) {
        console.log('Oh-oh, something wrong with statistic', error);
      });
  }, []);
  // console.log("ID counter value: ", mainID)
  // End of Axios request part

  // Preparing array for rendering of statistic
  const oneStatElement = starStat.filter(function(oneEl) {
    if (oneEl.id === mainID) {
      return true;
    }
    return false;
  });
  // console.log("Current stat element", oneStatElement);

  //Getting grade from Object of Array
  let totalRate = oneStatElement.reduce((previousValue, vote) => {
    return (
      previousValue +
      vote.veryUnLikely * 1 +
      vote.neutralLikely * 2 +
      vote.someWhatLikely * 3 +
      vote.someWhatUnLikely * 4 +
      vote.veryLikely * 5
    );
  }, 0);

  let totalVotes = oneStatElement.reduce((previousValue, vote) => {
    return (
      previousValue +
      vote.veryUnLikely +
      vote.neutralLikely +
      vote.someWhatLikely +
      vote.someWhatUnLikely +
      vote.veryLikely
    );
  }, 0);

  let finalRate;

  let finalRates = (totalRate, totalVotes) => {
    if (totalVotes === 0) {
      return (finalRate = 0);
    } else {
      return (finalRate = (totalRate / totalVotes).toFixed(2));
    }
  };

  finalRate = finalRates(totalRate, totalVotes);
  // console.log("Statistic Value: ", finalRate);

  // End Preparing

  //===============> findind start image
  console.log('StarObject', starobj);

  const starImage = starobj.find(e => mainID === e.id);

  return (
    <div className="App">
      <header className="App-header">
        <Header as="h1">The Transit Light Curve</Header>

        {starImage && (
          <img
            src={`https://res.cloudinary.com/dbqdmpn0m/image/upload/v1567127641/lightwave/${starImage.ticid_x}.png`}
            className="Curve-Graph"
            alt="Light Curve Graph"
          />
        )}

        <div className="Buttons">
          <Button
            labelPosition="left"
            icon="left chevron"
            content="Previous"
            onClick={() => previousID(mainID)}
          />
          <RatingStar mainID={mainID} className="Rating-Stars" />
          <Button
            labelPosition="right"
            icon="right chevron"
            content="Forward"
            onClick={() => nextID(mainID)}
          />
        </div>

        <div className="CentralBtn">
          <Button onClick={() => againID()}>Rate</Button>
        </div>

        <div className="Rating">
          <Statistic>
            <Statistic.Value>{finalRate}</Statistic.Value>
            <Statistic.Label>Rating of light curve</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{totalVotes}</Statistic.Value>
            <Statistic.Label>Votes</Statistic.Label>
          </Statistic>
        </div>

        <div className="Cards-listing">
          {oneElement.map(data => {
            return (
              <div>
                <Header as="h1">
                  Model prediction: 
                  {parseFloat(data.predictions * 100).toFixed(2) + '%'}
                </Header>
                <Infocard
                  key={data.id}
                  ticid_x={data.ticid_x}
                  id={data.id}
                  InsolationFlux={data.InsolationFlux}
                  star_radius={data.star_radius}
                  starTeffKelvin={data.starTeffKelvin}
                  magnitude={data.magnitude}
                  luminosity={data.luminosity}
                  star_mass={data.star_mass}
                  constellation={data.constellation}
                  rightascension={data.rightascension}
                  declination={data.declination}
                  predictions={data.predictions}
                  distance={data.distance}
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
