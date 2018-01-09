import axios from 'axios';

const url = 'https://api.themoviedb.org/3/';
const apiKey = '5b19221d20b929615d236692cea743e4';

const multiSearch = (query) => (
  axios.get(`${url}search/multi?api_key=${apiKey}&query=${query}`)
);
