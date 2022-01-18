import { createStore, combineReducers } from 'redux';
import reducer from './books/books';

const reducers = combineReducers({
  reducer,
});

const store = createStore(reducers);

export default store;
