import React from 'react';
import { Route, Switch } from 'react-router';

import App from '../App';

export default class AuthorizedRoutes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path="/"><App/></Route>
      </Switch>
    )
  }
}