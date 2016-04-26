import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory } from 'react-router';
import InitialPage from './pages/initial-page';
import reducers from './reducers';
import setGlobal from './bootstrap/set-global';

setGlobal();
process.on('uncaughtException', (error) => console.error(error.message, error.stack))

let store = createStore(reducers)

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
