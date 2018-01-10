import { UPDATE_FILTER } from '../actions/filter_actions';
import { RECEIVE_MOVIES } from '../actions/movie_actions';

const _defaultState = {
  "query": null
};

const FilterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, {[action.filter]: action.value});
    case RECEIVE_MOVIES:
      if(action.query) {
        return Object.assign({}, state, {"query": action.query});
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default FilterReducer;
