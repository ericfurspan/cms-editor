import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledFooterColumn, StyledFooterBtn } from './style';

const PublicFooter = () => (
  <StyledFooterColumn sm={{ span: 6, offset: 3 }}>
    <Row className="justify-content-between align-items-center m-0">
      <span style={{ color: 'var(--gray)' }}>© 2020 Eric Furspan</span>
      <StyledFooterBtn variant="link" as={Link} to="/terms">
        Terms of Service
      </StyledFooterBtn>
      <StyledFooterBtn variant="link" as={Link} to="/privacy">
        Privacy Policy
      </StyledFooterBtn>
      <StyledFooterBtn variant="link" as={Link} to="mailto:admin@quanda.dev">
        Support
      </StyledFooterBtn>
    </Row>
  </StyledFooterColumn>
);

export default PublicFooter;
