import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home';
import Tickets from './containers/Tickets';

export default ({ dispatch, getState }) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/tickets' component={Tickets} />
    </Switch>
  );
}
