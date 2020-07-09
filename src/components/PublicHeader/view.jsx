import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledNavbar, StyledBrandRow, StyledBrandTitle } from './style';

const PublicHeader = () => (
  <StyledNavbar>
    <Container fluid className="p-1">
      <Col>
        <StyledBrandRow onClick={() => window.location.replace('/')}>
          <FontAwesomeIcon
            color="var(--warning)"
            icon={['fas', 'tools']}
            size="lg"
          />
          <StyledBrandTitle>CMS</StyledBrandTitle>
        </StyledBrandRow>
      </Col>
    </Container>
  </StyledNavbar>
);

export default PublicHeader;
