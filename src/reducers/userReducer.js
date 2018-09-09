import initialState from './initialState';
import { SET_USER_STATE, CLEAR_USER_STATE } from '../actions/actionTypes';

const userReducer = (state = initialState.userState, action) => {
  switch (action.type) {
    case SET_USER_STATE:
      return action.state;

    case CLEAR_USER_STATE:
      return initialState.userState;

    default:
      return state;
  }
};

export default userReducer;
