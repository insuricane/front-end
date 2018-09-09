import initialState from './initialState';
import {
  GET_QUOTE_REQUESTED,
  GET_QUOTE_REJECTED,
  GET_QUOTE_RESOLVED,
} from '../actions/actionTypes';

const userReducer = (state = initialState.userState, action) => {
  switch (action.type) {
    case GET_QUOTE_REQUESTED:
      return {
        loading: true,
      };

    case GET_QUOTE_REJECTED:
      return {
        error: action.error,
        loading: false,
      };

    case GET_QUOTE_RESOLVED:
      return {
        probDestruction: action.data.house_destroyed,
        positions: action.data.positions,
        factor: action.data.avg_factor,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
