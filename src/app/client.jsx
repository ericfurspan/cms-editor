/* eslint-disable no-console */
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/link-error';
import { IS_LOGGED_IN, USER_ID } from '../graphql/user';

const createApolloClient = () => {
  /* Cache initialization with defaults */
  const apolloCache = new InMemoryCache();
  apolloCache.writeQuery({
    query: IS_LOGGED_IN,
    data: { isLoggedIn: !!localStorage.getItem('token') },
  });
  apolloCache.writeQuery({
    query: USER_ID,
    data: { uid: localStorage.getItem('uid') },
  });

  /* Authorization link handler */
  const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: { Authorization: token ? `Bearer ${token}` : '' },
    });
    return forward(operation);
  });

  /* HTTP link handler */
  const httpLink = new HttpLink({
    uri: process.env.GQL_SERVER,
    credentials: 'include',
  });

  /* Error link handler */
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
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
        uid: () => localStorage.getItem('uid'),
      },
    },
  });
};

export default createApolloClient;
