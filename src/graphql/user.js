import { gql } from '@apollo/client';

export const READ_USER = gql`
  query ReadUser {
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        description
        name
      }
    }
  }
`;

export const USER_ID = gql`
  query UserId {
    uid @client(always: true)
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client(always: true)
  }
`;

export const LOGIN = gql`
  mutation Login($loginPayload: UsersPermissionsLoginInput!) {
    login(input: $loginPayload) {
      jwt
      user {
        id
        email
        username
        confirmed
        blocked
        role {
          description
          name
        }
      }
    }
  }
`;
