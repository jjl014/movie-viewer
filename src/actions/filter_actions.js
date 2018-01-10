export const UPDATE_FILTER = "RECEIVE_FILTER";

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
