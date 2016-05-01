import React from 'react';
import ReactDOM from 'react-dom';
import setGlobal from './bootstrap/set-global';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hashHistory } from 'react-router';
import InitialPage from './pages/initial-page';
import reducers from './reducers';
import requestMiddleware from './utils/request-middleware';
import createLogger from 'redux-logger';

process.on('uncaughtException', (error) => console.error(error.message, error.stack))

let middleware = applyMiddleware(requestMiddleware, createLogger());
let store = createStore(reducers, middleware);
window.store = store;

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={InitialPage} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
