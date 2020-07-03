import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import BREAKPOINTS from '../../utils/breakpoints';

export const StyledMobileToggle = styled.div`
  display: none;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: inline;
  }
`;

export const StyledDefaultToggle = styled.div`
  display: inline;

  @media only screen and (max-width: ${BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

export const StyledDropdownItem = styled(Dropdown.Item)`
  padding: 0.75rem 1rem;
`;
