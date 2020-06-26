import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
  footer: {
    position: 'fixed',
    bottom: 12,
    left: 0,
  },
  copyright: { color: 'var(--white-50)' },
  item: { fontSize: 12, padding: 0, marginLeft: '1rem' },
};

const PublicFooter = () => (
  <Col lg={{ span: 6, offset: 3 }} style={styles.footer}>
    <Row className="justify-content-center align-items-center">
      <span style={{ ...styles.item }}>© 2020 Eric Furspan</span>
      <Button variant="link" as={Link} style={styles.item} to="/terms">
        Terms of Service
      </Button>
      <Button variant="link" as={Link} style={styles.item} to="/privacy">
        Privacy Policy
      </Button>
      <Button
        variant="link"
        as={Link}
        style={styles.item}
        to="mailto:admin@quanda.dev"
      >
        Support
      </Button>
    </Row>
  </Col>
);

export default PublicFooter;
