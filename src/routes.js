import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import UsersList from './components/usersList';
import requireAuth from './components/higherOrderComponents/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <Route path="resources" component={requireAuth(Resources)} />
    <Route path="users" component={requireAuth(UsersList)} />
  </Route>
);
