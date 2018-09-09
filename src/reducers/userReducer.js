import initialState from './initialState';
import { SET_USER_STATE } from '../actions/actionTypes';

const userReducer = (state = initialState.userState, action) => {
  let newState;

  switch (action.type) {
    case SET_USER_STATE:
      newState = action.state;
      return newState;

    default:
      return state;
  }
};

export default userReducer;
