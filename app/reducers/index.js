// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import tracker from './tracker';

const rootReducer = combineReducers({
  counter,
  router,
  tracker,
});

export default rootReducer;
