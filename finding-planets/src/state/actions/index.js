import axios from 'axios';

export const ADD_USERNAME = 'ADD_USERNAME'


export const storeUserName = name => {
  console.log("action fired", name)
  return{type:"ADD_USERNAME", payload: feature };
}
