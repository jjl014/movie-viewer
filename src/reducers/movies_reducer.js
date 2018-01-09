import {
  RECEIVE_MOVIES,
  RECEIVE_GENRES
} from '../actions/movie_actions';

const _defaultState = {
  "popular": null,
  "upcoming": null,
  "now_playing": null,
};

const MoviesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(action.section);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {[action.section]: action.movies});
    case RECEIVE_GENRES:
      return Object.assign({}, state, {["Genres"]: action.genres});
    default:
      return state;
  }
};

export default MoviesReducer;
