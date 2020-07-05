import styled from 'styled-components';
import { Navbar, Row } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: var(--dark);
`;

export const StyledBrandRow = styled(Row)`
  width: fit-content;
  align-items: center;
  cursor: pointer;
`;

export const StyledBrandTitle = styled.h1`
  margin: 0 0 0 1rem;
  font-size: 1.3rem;
  color: var(--white);
  font-weight: 300;
`;
