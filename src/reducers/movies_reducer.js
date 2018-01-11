import {
  RECEIVE_MOVIES,
  RECEIVE_MOVIE_DETAILS,
  UPDATE_LOADING
} from '../actions/movie_actions';

const _defaultState = {
  "popular": {
    "total_pages": null,
    "list": null
  },
  "upcoming": {
    "total_pages": null,
    "list": null
  },
  "now_playing": {
    "total_pages": null,
    "list": null
  },
  "top_rated": {
    "total_pages": null,
    "list": null
  },
  "search_results": {
    "total_pages": null,
    "list": null
  },
  "movie_details": null,
  "loading": false
};

const MoviesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        [action.section]: {
          "list": action.movies,
          "total_pages": action.total_pages
        },
        "loading": false
      });
    case RECEIVE_MOVIE_DETAILS:
      return Object.assign({}, state, {"movie_details": action.details});
    case UPDATE_LOADING:
      return Object.assign({}, state, {"loading": true});
    default:
      return state;
  }
};

export default MoviesReducer;
