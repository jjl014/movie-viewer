export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies
});
