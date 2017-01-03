import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import { configureStore } from './Store';
import './styles/index.scss';

require('es6-promise').polyfill();

const rootEl = document.getElementById('root');
const store = configureStore();

function render() {
  const Routes = require('./Routes').default;
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  // Support hot reloading of components
  module.hot.accept('./Routes', render);
}

render();

