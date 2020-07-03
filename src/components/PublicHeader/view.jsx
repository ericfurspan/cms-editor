import React from 'react';
import { Container } from 'react-bootstrap';
import { BrandLogo } from '..';
import { StyledNavbar } from './style';

const PublicHeader = () => (
  <StyledNavbar>
    <Container fluid className="p-2">
      <BrandLogo withTitle withSubtitle />
    </Container>
  </StyledNavbar>
);

export default PublicHeader;
