import React, { Component, useEffect } from 'react'
import { Rating } from 'semantic-ui-react'
import axios from "axios";

export default class RatingExampleOnRate extends Component {


  handleRate = (e, { rating }) => {
  console.log("Given rating is: ", rating)

  axios
    .put(`https://finding-planets.herokuapp.com/candidate/3/veryLikely`, {veryLikely: rating},  {
      headers: { Authorization: localStorage.getItem("token") }
    })

    .then(response => {
      console.log("Vote data is here", response);
    })
    .catch(function (error) {
        console.log("rating inside", rating);
        console.log("Oh-oh, something wrong with sending of vote", error);
    });

  }

    
    
  render() {
    
    return (
      <div>
        <Rating maxRating={5} onRate={this.handleRate} />
      </div>
    )
  }
}
