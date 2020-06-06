import { gql } from '@apollo/client';

export const FETCH_BUSINESSES = gql`
  query FetchBusinesses {
    businesses {
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
