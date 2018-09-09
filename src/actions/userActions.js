import * as types from './actionTypes';

export function setUserState(state) { // eslint-disable-line
  return {
    type: types.SET_USER_STATE,
    state,
  };
}

export function clearUserState() {
  return {
    type: types.CLEAR_USER_STATE,
  };
}
