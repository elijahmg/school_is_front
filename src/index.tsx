import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import { Routes } from './routes/index';

import './index.scss';

const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Oswald, sans-serif;
  }
  body {
    margin: 0;
  }
`

const theme: any = {
  colors: {
    primaryButton: '#282c34',
    secondaryButton: '#b01925',
  }
};

const AppContainer: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <GlobalStyle/>
      <Switch>
        <Routes/>
      </Switch>
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<AppContainer/>, document.getElementById('root'));

declare const module: any;

if (module.hot) {
  module.hot.accept();
}
