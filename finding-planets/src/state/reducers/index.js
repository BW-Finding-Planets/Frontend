import {
  FETCH_USER_DATA_START,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE
} from '../actions/index';

const initialState = {
  id: ' ',
  firstName: '',
  lastName: '',
  email: '',
  profession: '',
  username: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_START:
      return { ...state };
    case FETCH_USER_DATA_SUCCESS:
      console.log('User data payload', action.payload);
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        profession: action.payload.profession,
        username: action.payload.username
      };
    default:
      return { ...state };
  }
};
