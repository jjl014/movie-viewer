import {
  searchMovies,
  getMovies,
  getMovieGenres,
  getMovieDetails
} from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_MOVIE_DETAILS = "RECEIVE_MOVIE_DETAILS";
export const RECEIVE_MOVIE_REVIEWS = "RECEIVE_MOVIE_DETAILS";
export const UPDATE_LOADING = "UPDATE_LOADING";

export const updateLoading = () => ({
  type: UPDATE_LOADING
});

export const receiveMovies = (movies, section, total_pages, query) => ({
  type: RECEIVE_MOVIES,
  movies,
  section,
  total_pages,
  query
});

export const receiveGenres = (genres) => ({
  type: RECEIVE_GENRES,
  genres
});

export const receiveMovieDetails = (details) => ({
  type: RECEIVE_MOVIE_DETAILS,
  details
});

export const filterMovies = (query) => dispatch => (
  searchMovies(query)
    .then(res => dispatch(receiveMovies(res.data.results)))
);

export const fetchMovies = (section, page) => dispatch => (
  getMovies(section, page)
    .then(res => dispatch(receiveMovies(res.data.results, section, res.data.total_pages)))
);

export const fetchMovieGenres = () => dispatch => (
  getMovieGenres()
    .then(res => dispatch(receiveGenres(res.data.genres)))
);

export const queryMovies = (query, page) => dispatch => (
  searchMovies(query, page)
    .then(res =>
      dispatch(receiveMovies(res.data.results, "search_results", res.data.total_pages, query)))
);

export const fetchMovieDetails = (movieId) => dispatch => (
  getMovieDetails(movieId)
    .then(res => dispatch(receiveMovieDetails(res.data)))
);
