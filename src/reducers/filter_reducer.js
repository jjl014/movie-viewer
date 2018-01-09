import { UPDATE_FILTER } from '../actions/movie_actions';

const FilterReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default FilterReducer;
