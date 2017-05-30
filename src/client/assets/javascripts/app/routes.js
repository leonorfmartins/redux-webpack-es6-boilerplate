import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import NotFoundView from 'components/NotFound';
import Dashboard from 'components/Dashboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
