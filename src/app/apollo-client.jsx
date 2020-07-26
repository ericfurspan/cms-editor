/* eslint-disable no-console */
import { ApolloClient, ApolloLink, InMemoryCache, from } from '@apollo/client';
import { createUploadLink as UploadLink } from 'apollo-upload-client';
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

  // an httpLink with upload support
  const uploadLink = new UploadLink({
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
    link: from([authLink, errorLink, uploadLink]),
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
