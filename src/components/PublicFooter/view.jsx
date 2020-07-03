import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FooterColumn, StyledFooterBtn } from './style';

const PublicFooter = () => (
  <FooterColumn lg={{ span: 6, offset: 3 }}>
    <Row className="justify-content-center align-items-center m-0">
      <span>© 2020 Eric Furspan</span>
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
  </FooterColumn>
);

export default PublicFooter;
