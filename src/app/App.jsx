import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import AppRouter from './router';

class App {
  constructor() {
    this.history = createBrowserHistory();
    this.client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.GRAPHQL_SERVER || 'http://127.0.0.1:1337/graphql',
      }),
    });
  }

  entrypoint() {
    return (
      <ApolloProvider client={this.client}>
        <Router history={this.history}>
          <React.Suspense fallback={null}>
            <AppRouter />
          </React.Suspense>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
