//@ts-nocheck
import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Home from '../pages/Home';

const Routes = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
);

export default Routes;
