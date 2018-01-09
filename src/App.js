import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import RootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Hello
      </div>
    </Provider>
  );
};

export default App;
