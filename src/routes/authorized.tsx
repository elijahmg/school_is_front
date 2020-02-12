import React from 'react';
import { Route, Switch } from 'react-router';

import App from '../pages/Login/App';

export default class AuthorizedRoutes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path="/login"><App/></Route>
      </Switch>
    )
  }
}