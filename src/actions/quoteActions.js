import axios from 'axios';

import * as types from './actionTypes';

const BASE = 'http://35.185.0.252/';

export const getQuote = ({ lng, lat }) => { // eslint-disable-line
  return async (dispatch) => {
    dispatch({
      type: types.GET_QUOTE_REQUESTED,
    });

    try {
      const { data } = await axios.get(`${BASE}?long=${lng}&lat=${lat}`);

      dispatch({
        type: types.GET_QUOTE_RESOLVED,
        data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_QUOTE_REJECTED,
        error: error.message,
      });
    }
  };
};
