import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache, concat,
} from '@apollo/client';
import AppRouter from './utils/router';
import { Auth, Context } from './utils/auth';
import '../style/main.scss';

class Application {
  constructor() {
    this.client = null;
    this.auth = null;
    this.history = null;
  }

  bootstrap() {
    this.history = createBrowserHistory();
    this.auth = new Auth({ history: this.history });

    const httpLink = new HttpLink({ uri: process.env.GQL_SERVER, credentials: 'include' });

    // forward the authorization header
    const authMiddleware = new ApolloLink((operation, forward) => {
      const { token } = this.auth;
      const bearerAuth = token ? `Authorization: Bearer ${token}` : '';
      operation.setContext({ headers: { bearerAuth } });
      return forward(operation);
    });

    // create networking client
    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      credentials: 'include',
      link: concat(authMiddleware, httpLink),
    });
  }

  entrypoint() {
    return (
      <Context.Provider value={this.auth}>
        <ApolloProvider client={this.client}>
          <React.Suspense fallback={null}>
            <Router history={this.history}>
              <AppRouter auth={this.auth} />
            </Router>
          </React.Suspense>
        </ApolloProvider>
      </Context.Provider>
    );
  }
}

export default Application;
