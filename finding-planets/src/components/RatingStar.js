import React, { Component, useEffect } from 'react'
import { Rating } from 'semantic-ui-react'


export default class RatingExampleOnRate extends Component {
  state = {}

  handleRate = (e, { rating, maxRating }) => {
  console.log("Given rating is: ", rating)
  // console.log("Maxrating is: ", maxRating)

  // useEffect(() => {

//   axios
//     .put(`https://finding-planets.herokuapp.com/candidate/:id/veryLikely`, {
//       headers: { Authorization: localStorage.getItem("token") }
//     })
//     .then(response => {
//       const starData = response.data;
//       console.log("Star data is here", starData);
//       setStarobj(starData);
//       console.log(token)
//     })
//     .catch(function (error) {
//         console.log("Oh-oh, something wrong with main array", error);
//     });
// }, []);




  }
  // this.setState({ rating, maxRating })
    
    
  render() {
    
    return (
      <div>
        <Rating maxRating={5} onRate={this.handleRate} />
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}
