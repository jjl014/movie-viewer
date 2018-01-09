import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import RootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// CSS
import './App.css';

// Components
import Header from './components/header';
import MovieIndex from './components/movie_index';

// Store
const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MovieIndex type="Now Playing"/>
        <MovieIndex type="Popular"/>
        <MovieIndex type="Upcoming"/>
        <div>Hello</div>
      </div>
    </Provider>
  );
};

export default App;
