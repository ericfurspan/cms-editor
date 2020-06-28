import { gql } from '@apollo/client';

export const FETCH_BUSINESSES = gql`
  query FetchBusinesses($where: JSON!) {
    businesses(where: $where) {
      id
      name
      caption
      contact_links
      additional_links
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
  }
`;

export const UPDATE_BUSINESS = gql`
  mutation UpdateBusiness($input: updateBusinessInput) {
    updateBusiness(input: $input) {
      business {
        name
        caption
        mission_statement
      }
    }
  }
`;