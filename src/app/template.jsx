import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/link-error';
import AppRouter from './router';
import { IS_LOGGED_IN, READ_USER } from '../graphql/user';
import { LoadSpinner } from '../components';
import '../style/main.scss';

class Application {
  constructor() {
    this.client = null;
    this.history = null;
    this.handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('uid');
      this.client.resetStore();
    };
  }

  bootstrap() {
    /* Browser History */
    this.history = createBrowserHistory();

    /* Cache initialization with defaults */
    const apolloCache = new InMemoryCache();
    apolloCache.writeQuery({
      query: IS_LOGGED_IN,
      data: { isLoggedIn: !!localStorage.getItem('token') },
    });
    apolloCache.writeQuery({
      query: READ_USER,
      data: { user: { id: localStorage.getItem('uid') } },
    });

    const authLink = new ApolloLink((operation, forward) => {
      const token = localStorage.getItem('token');
      const bearerAuth = token ? `Authorization: Bearer ${token}` : '';
      operation.setContext({ headers: { bearerAuth } });
      return forward(operation);
    });

    const httpLink = new HttpLink({
      uri: process.env.GQL_SERVER,
      credentials: 'include',
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.error(`[Network error]: ${networkError}`);
    });

    /* Apollo Client */
    this.client = new ApolloClient({
      cache: apolloCache,
      credentials: 'include',
      link: from([authLink, errorLink, httpLink]),
      resolvers: {
        Query: {
          isLoggedIn: () => {
            const uid = localStorage.getItem('uid');
            const token = localStorage.getItem('token');
            return !!uid && !!token && token.length > 0;
          },
        },
      },
    });
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
