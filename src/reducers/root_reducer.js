import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  movies: MoviesReducer,
  filters: FilterReducer
});

export default RootReducer;
