import React from 'react';
import { Router } from 'react-router-dom';
import {
  ApolloClient, ApolloProvider, ApolloLink, HttpLink, InMemoryCache, concat,
} from '@apollo/client';
import history from './history';
import AppRouter from './router';
import Auth from './auth';
import { AuthContext } from './context';

class App {
  constructor() {
    this.client = null;
    this.auth = null;
  }

  initNetworkClient() {
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

  initAuth() {
    this.auth = new Auth();
  }

  entrypoint() {
    return (
      <AuthContext.Provider value={this.auth}>
        <ApolloProvider client={this.client}>
          <React.Suspense fallback={null}>
            <Router history={history}>
              <AppRouter auth={this.auth} />
            </Router>
          </React.Suspense>
        </ApolloProvider>
      </AuthContext.Provider>
    );
  }
}

export default App;
