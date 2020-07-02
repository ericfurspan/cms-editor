import { gql } from '@apollo/client';

const businessFragment = gql`
  fragment BusinessFragment on Business {
    id
    name
    caption
    logo {
      name
      url
      alternativeText
    }
    business_email
    social_media_links
    payment_links
    podcast_links
    business_hours
    mission_statement
    events
    news
    gallery {
      name
      url
      alternativeText
    }
  }
`;

export const FETCH_BUSINESSES = gql`
  query FetchBusinesses($where: JSON!) {
    businesses(where: $where) {
      ...BusinessFragment
    }
  }
  ${businessFragment}
`;

export const UPDATE_BUSINESS = gql`
  mutation UpdateBusiness($input: updateBusinessInput) {
    updateBusiness(input: $input) {
      business {
        ...BusinessFragment
      }
    }
  }
  ${businessFragment}
`;
