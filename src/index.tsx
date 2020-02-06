import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import { Routes } from './routes';

import './index.scss';

const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Oswald, sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;  
    background: linear-gradient(45deg, rgba(187,213,159,1) 0%, rgba(154,213,92,1) 100%);
  }
  html {
    height: 100%;
    width: 100%;
  }
  
  div#root {
    height: 100%;
    width: 100%;
  }
`

const theme: any = {
  colors: {
    primaryButton: '#9AD55C',
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
