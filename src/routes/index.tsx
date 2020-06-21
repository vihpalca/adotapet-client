//@ts-nocheck
import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Home from '../pages/Home';
import Example from '../pages/Example';

const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/exemplo' component={Example} />
    </Switch>
  </Router>
);

export default Routes;
