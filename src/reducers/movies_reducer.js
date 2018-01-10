import {
  RECEIVE_MOVIES,
  RECEIVE_GENRES
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
  "genres": null
};

const MoviesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        [action.section]: {
          "list": action.movies,
          "total_pages": action.total_pages
        }
      });
    case RECEIVE_GENRES:
      return Object.assign({}, state, {"genres": action.genres});
    default:
      return state;
  }
};

export default MoviesReducer;
