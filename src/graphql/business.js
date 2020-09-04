import { gql } from '@apollo/client';

const businessFragment = gql`
  fragment BusinessFragment on Business {
    id
    updated_at
    name
    caption
    description
    banner
    email
    web_links
    promotions
    events
    news
    logo {
      name
      url
      alternativeText
      width
      id
    }
    gallery {
      name
      url
      alternativeText
      id
    }
    operating_hours {
      monday_start
      monday_end
      tuesday_start
      tuesday_end
      wednesday_start
      wednesday_end
      thursday_start
      thursday_end
      friday_start
      friday_end
      saturday_start
      saturday_end
      sunday_start
      sunday_end
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
