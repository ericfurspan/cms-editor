import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ApolloProvider } from '@apollo/client';
import AppRouter from './router';
import createApolloClient from './client';
import { LoadSpinner } from '../components';
import '../style/main.scss';

class Application {
  constructor() {
    this.client = createApolloClient();
    this.history = createBrowserHistory();
    this.handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('uid');
      this.client.resetStore();
    };
  }

  entrypoint() {
    return (
      <ApolloProvider client={this.client}>
        <React.Suspense fallback={<LoadSpinner />}>
          <Router history={this.history}>
            <AppRouter handleLogout={this.handleLogout} />
          </Router>
        </React.Suspense>
      </ApolloProvider>
    );
  }
}

export default Application;
