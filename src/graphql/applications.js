import { gql } from '@apollo/client';

const applicationFragment = gql`
  fragment ApplicationFragment on Application {
    name
    app_type
    live_url
    short_info
    deploy_hook_url
    deploy_status_url
    deploy_panel_url
    users {
      id
      username
    }
    business {
      id
      name
      users {
        id
      }
    }
  }
`;

export const FETCH_APPLICATIONS = gql`
  query FetchApplications($where: JSON!) {
    applications(where: $where) {
      ...ApplicationFragment
    }
  }
  ${applicationFragment}
`;
