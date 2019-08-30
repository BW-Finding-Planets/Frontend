import React from 'react'
import { Rating } from 'semantic-ui-react'
import axios from "axios";


function RatingStar (props) {



  const handleRate = (e, { rating }) => {
  console.log("Given rating is: ", rating)
  // console.log("ID inside child: ", props.mainID)
 
  let ranking = ['veryLikely', 'someWhatLikely', 'neutral', 'someWhatUnLikely', 'veryUnLikely']
    


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

  let address = rankingSearch(ranking, rating)
  console.log("The address to voting: ", address);
  axios
    
    .put(`https://finding-planets.herokuapp.com/candidate/${props.mainID}/veryLikely`, {veryLikely: 1},  {
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