import {
  searchMovies,
  getMovies,
  getMovieGenres
} from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_GENRES = "RECEIVE_GENRES";

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

export const filterMovies = (query) => dispatch => (
  searchMovies(query)
    .then(res => dispatch(receiveMovies(res.data.results)))
);

export const fetchMovies = (section, page) => dispatch => (
  getMovies(section, page)
    .then(res =>
      dispatch(receiveMovies(res.data.results, section, res.data.total_pages)))
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
