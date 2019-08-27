import axios from 'axios';

export const ADD_USERNAME = 'ADD_USERNAME'


export const storeUserName = name => {
  console.log("action fired", name)
  return{type:"ADD_USERNAME", payload: name };
}

export const AUTHENTICATION = 'AUTHENTICATION';

export const authenToken = token => {
  console.log("action fired authen", token)
  return{type:"AUTHENTICATION", payload: token }


}
