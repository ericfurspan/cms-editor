import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrandHeader = ({ headerText }) => (
  <Container className="mt-3 mb-3">
    <Row>
      <Col className="text-center">
        <FontAwesomeIcon color="var(--warning)" size="2x" icon={[ 'fas', 'tools' ]} />
        <h1 className="text-white ml-1 mb-0 mt-1">{headerText}</h1>
      </Col>
    </Row>
  </Container>
);

export default BrandHeader;
