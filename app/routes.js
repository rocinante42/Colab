/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TrackerPage from './containers/TrackerPage';

export default () => (
  <App>
    <Switch>
      <Route path="/tracker" component={TrackerPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
