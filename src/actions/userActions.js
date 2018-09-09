import * as types from './actionTypes';

export function setUserState(state) { // eslint-disable-line
  return {
    type: types.SET_USER_STATE,
    state,
  };
}
