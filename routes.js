import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import Itv from './itv.js';

export default (
    <Route path='/' component={App}>
      <IndexRoute component={Itv} />
    </Route>
)