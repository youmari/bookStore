import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './books/books';

const reducers = combineReducers({
  reducer,
});

const middlewares = [thunk, logger];

const store = createStore(reducers,
  applyMiddleware(...middlewares));

export default store;
