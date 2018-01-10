import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import RootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// CSS
import './App.css';

// Components
import Header from './components/header';
import NowPlayingMovies from './components/now_playing_movies';
import PopularMovies from './components/popular_movies';
import UpcomingMovies from './components/upcoming_movies';
import NavBar from './components/navbar';


// Store
const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-container">
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/popular" component={PopularMovies}/>
            <Route exact path="/upcoming" component={UpcomingMovies}/>
            <Route exact path="/now_playing" component={NowPlayingMovies}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
