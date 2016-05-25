import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Channel from './channel.js';
import Programmes from './programmes.js';

export default (
    <Route path='/' component={App}>
      <IndexRoute component={Channel} />
      <Route path='/{programmes*}' component={Programmes} />
    </Route>
)
