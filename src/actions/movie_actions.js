import {
  searchMovies,
  getMovies,
  getMovieGenres
} from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_GENRES = "RECEIVE_GENRES";

export const receiveMovies = (movies, section) => ({
  type: RECEIVE_MOVIES,
  movies,
  section
});

export const receiveGenres = (genres) => ({
  type: RECEIVE_GENRES,
  genres
});

export const filterMovies = (query) => dispatch => (
  searchMovies(query)
    .then(res => dispatch(receiveMovies(res.data.results)))
);

export const fetchMovies = (section) => dispatch => (
  getMovies(section)
    .then(res => dispatch(receiveMovies(res.data.results, section)))
);

export const fetchMovieGenres = () => dispatch => (
  getMovieGenres()
    .then(res => dispatch(receiveGenres(res.data.results)))
);
