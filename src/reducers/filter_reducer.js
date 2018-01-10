import { UPDATE_FILTER } from '../actions/filter_actions';

const _defaultState = {
  query: null
};

const FilterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, {[action.filter]: action.value});
    default:
      return state;
  }
};

export default FilterReducer;
