import { createStore, applyMiddleware } from 'redux';

import RootReducer from './reducers/root_reducer';

let store;

export const configureStore = (preloadedState = {}) => {
  return store = createStore(RootReducer, preloadedState, applyMiddleware());
}