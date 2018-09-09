import { combineReducers } from 'redux';

import userReducer from './userReducer';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  quoteState: quoteReducer,
});

export default rootReducer;
