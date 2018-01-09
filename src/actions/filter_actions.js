export const UPDATE_FILTER = "RECEIVE_FILTER";

export const receiveFilter = (filter) => ({
  type: UPDATE_FILTER,
  filter
});
