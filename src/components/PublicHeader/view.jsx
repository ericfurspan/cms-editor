import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { BrandLogo } from '..';

const PublicHeader = () => (
  <Navbar bg="dark">
    <Container fluid className="p-2">
      <BrandLogo withTitle withSubtitle />
    </Container>
  </Navbar>
);

export default PublicHeader;
