import {
  RECEIVE_MOVIES,
  RECEIVE_GENRES
} from '../actions/movie_actions';

const _defaultState = {
  "popular": null,
  "upcoming": null,
  "now_playing": null,
  "genres": null
};

const MoviesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {[action.section]: action.movies});
    case RECEIVE_GENRES:
      return Object.assign({}, state, {"genres": action.genres});
    default:
      return state;
  }
};

export default MoviesReducer;
