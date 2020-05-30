import { gql } from '@apollo/client';

export const GET_BUSINESS = gql`
  query getBusiness($businessId: ID!) {
    business(id: $businessId) {
      id
      name
      caption
      contact_links
      additional_links
      business_hours
      mission_statement
      events
      gallery {
        name
        url
        alternativeText
      }
      news
    }    
  }
`;
