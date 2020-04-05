import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { Routes } from './routes';

import { TOKEN } from './utils/global.constants';

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
    background: linear-gradient(45deg, rgb(220,222,216) 0%, rgb(202,202,202) 100%);
  }
  html {
    height: 100%;
    width: 100%;
  }
  
  div#root {
    height: 100%;
    width: 100%;
  }
`;

const theme: any = {
  colors: {
    primaryButton: '#9AD55C',
    secondaryButton: '#b01925',
  },
};

const client = new ApolloClient({
  uri: 'http://localhost:3010/graphql',
  request: (operation) => {
    const token = localStorage.getItem(TOKEN);

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

const AppContainer: React.FC = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle/>
        <Switch>
          <Routes/>
        </Switch>
      </Router>
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(<AppContainer/>, document.getElementById('root'));

declare const module: any;

if (module.hot) {
  module.hot.accept();
}
