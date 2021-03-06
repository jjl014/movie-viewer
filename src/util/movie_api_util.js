import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';
const apiKey = '5b19221d20b929615d236692cea743e4';

export const searchMovies = (query, page) => (
  axios.get(`${url}search/movie?api_key=${apiKey}&query=${query}&page=${page}`)
);

export const getMovies = (section, page) => {
  switch(section) {
    case "now_playing":
      return axios.get(`${url}movie/now_playing?api_key=${apiKey}&page=${page}`);
    case "popular":
      return axios.get(`${url}movie/popular?api_key=${apiKey}&page=${page}`);
    case "upcoming":
      return axios.get(`${url}movie/upcoming?api_key=${apiKey}&page=${page}`);
    case "top_rated":
      return axios.get(`${url}movie/top_rated?api_key=${apiKey}&page=${page}`);
    default:
      return false;
  }
};

export const getMovieGenres = () => (
  axios.get(`${url}genre/movie/list?api_key=${apiKey}`)
);

export const getLatestMovie = () => (
  axios.get(`${url}movie/latest?api_key=${apiKey}`)
);

export const getMovieDetails = (movieId) => (
  axios.get(`${url}movie/${movieId}?api_key=${apiKey}`)
);

export const getMovieReview = (movieId) => (
  axios.get(`${url}movie/${movieId}/reviews?api_key=${apiKey}`)
);
