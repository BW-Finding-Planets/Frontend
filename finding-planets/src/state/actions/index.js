import axios from 'axios';

export const ADD_USERNAME = 'ADD_USERNAME';

export const storeUserName = name => {
  console.log('action fired', name);
  return { type: 'ADD_USERNAME', payload: name };
};

export const AUTHENTICATION = 'AUTHENTICATION';

export const authenToken = token => {
  console.log('action fired authen', token);
  return { type: 'AUTHENTICATION', payload: token };
};

export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const getUserData = id => {
  return dispatch => {
    console.log("ACTION FIRED")
    dispatch({ type: FETCH_USER_DATA_START });
    axios
      .get(`https://finding-planets.herokuapp.com/users/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then(res => {
        console.log('Response', res.data);
        dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_USER_DATA_FAILURE, payload: err });
      });
  };
};
