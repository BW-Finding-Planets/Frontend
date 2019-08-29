import axios from 'axios';




export const SET_ID = 'SET_ID';

export const storeUserId = id => {
  console.log('action fired', id);
  return { type: 'SET_ID', payload: id };
};



export const IS_LOGGEDIN = 'IS_LOGGEDIN';

export const isLoggedIn = loggedIn => {
  console.log('action fired authen', loggedIn);
  return { type: 'IS_LOGGEDIN', payload: loggedIn };
};









export const FETCH_USER_DATA_START = 'FETCH_USER_DATA_START';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

export const getUserData = id => {
  return dispatch => {
    console.log("ACTION FIRED")
    dispatch({ type: FETCH_USER_DATA_START });
    return axios
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
