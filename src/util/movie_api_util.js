import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';
const apiKey = '5b19221d20b929615d236692cea743e4';

export const searchMovies = (query) => (
  axios.get(`${url}search/movie?api_key=${apiKey}&query=${query}`)
);

export const getMovies = (type, page) => {
  switch(type) {
    case "Now Playing":
      return axios.get(`${url}movie/now_playing?api_key=${apiKey}&page=${page}`);
    case "Popular":
      return axios.get(`${url}movie/popular?api_key=${apiKey}&page=${page}`);
    case "Upcoming":
      return axios.get(`${url}movie/popular?api_key=${apiKey}&page=${page}`);
    default:
      return false;
  }
};

export const getMovieGenres = () => (
  axios.get(`${url}genre/movie/list`)
);

export const getLatestMovie = () => (
  axios.get(`${url}movie/latest?api_key=${apiKey}`)
);

export const getNowPlayingMovies = (page) => (
  axios.get(`${url}movie/now_playing?api_key=${apiKey}&page=${page}`)
);

export const getPopularMovies = (page) => (
  axios.get(`${url}movie/popular?api_key=${apiKey}&page=${page}`)
);

export const getUpcomingMovies = (page) => (
  axios.get(`${url}movie/popular?api_key=${apiKey}&page=${page}`)
);

export const getMovieDetails = (movieId) => (
  axios.get(`${url}movie/${movieId}`)
);

export const getMovieReview = (movieId) => (
  axios.get(`${url}movie/${movieId}/reviews`)
);
