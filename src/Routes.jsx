import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import HelloWorld from './containers//HelloWorld';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HelloWorld} />
    </Router>
  );
};
