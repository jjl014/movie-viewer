import { RECEIVE_MOVIES } from '../actions/movie_actions';

const MoviesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default MoviesReducer;
