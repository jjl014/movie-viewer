import { searchMovies } from '../util/movie_api_util';
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies
});

export const filterMovies = (query) => dispatch =>(
  searchMovies
    .then(movies => dispatch(receiveMovies(movies)))
);
