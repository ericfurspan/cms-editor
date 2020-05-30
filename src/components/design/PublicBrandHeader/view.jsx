import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  content: { cursor: 'pointer' },
};

const PublicBrandHeader = () => (
  <Container className="mb-3" onClick={() => window.location.reload()}>
    <Row>
      <Col className="text-center">
        <Row className="align-items-center justify-content-flex-start mt-2 ml-2">
          <Col style={styles.content} lg={{ span: 3, offset: 0 }}>
            <Row className="align-items-baseline">
              <FontAwesomeIcon color="var(--warning)" size="2x" icon={[ 'fas', 'tools' ]} />
              <h1 className="text-white ml-1">WebEdit</h1>
            </Row>
            <Row>
              <p className="text-white-50">Manage your website content</p>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default PublicBrandHeader;
