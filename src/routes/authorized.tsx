import React from 'react';
import { Route, Switch } from 'react-router';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default class AuthorizedRoutes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path="/login"><Login/></Route>
        <Route path="/"><Dashboard/></Route>
      </Switch>
    )
  }
}