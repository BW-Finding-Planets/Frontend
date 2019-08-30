import React from 'react'
import { Rating } from 'semantic-ui-react'
import axios from "axios";
import { WSASYSCALLFAILURE } from 'constants';


function RatingStar (props) {



  const handleRate = (e, { rating }) => {
  console.log("Given rating is: ", rating)
 
  // Arrays which one have our data for dynamic woting
  let ranking = ['veryLikely', 'someWhatLikely', 'neutralLikely', 'someWhatUnLikely', 'veryUnLikely']
  let addressing = [{veryLikely: 1}, {someWhatLikely: 1}, {neutralLikely: 1}, {someWhatUnLikely: 1}, {veryUnLikely: 1}]

  // Functions which one helps to choose right way, depends on vote
  let rankingSearch = (ranking, rating) => {
    if (rating === 5) 
    {
      return ranking[0]
    } else if 
      (rating === 4) {
        return ranking[1]
      } else if 
        (rating === 3) {
          return ranking[2]
        } else if 
          (rating === 2) {
            return ranking[3]
          } else if 
            (rating === 1) {
              return ranking[4]
            }
  };

  let addressingSearch = (addressing, rating) => {
    if (rating === 5) 
    {
      return addressing[0]
    } else if 
      (rating === 4) {
        return addressing[1]
      } else if 
        (rating === 3) {
          return addressing[2]
        } else if 
          (rating === 2) {
            return addressing[3]
          } else if 
            (rating === 1) {
              return addressing[4]
            }
  };

  // Asking functions to do something important
  let address = rankingSearch(ranking, rating)
  let addressTo = addressingSearch(addressing, rating)
  console.log("The ADDRESS to voting: ", address, "The WAY to voting: ", addressTo, "Vote was given: ", rating);

  axios
    
    .put(`https://finding-planets.herokuapp.com/candidate/${props.mainID}/${address}`, addressTo,  {
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

  // 5 => veryLikely
  // 4 => someWhatLikely
  // 3 => neutral
  // 2 => someWhatUnLikely
  // 1 => veryUnLikely
    

    
    return (
      <div>
        <Rating maxRating={5} onRate={handleRate} />
      </div>
    )

}

export default RatingStar;