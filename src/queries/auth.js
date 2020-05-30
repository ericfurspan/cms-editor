import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($loginPayload: UsersPermissionsLoginInput!) {
    login(input: $loginPayload) {
      jwt
      user {
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
