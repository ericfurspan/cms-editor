import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
  footer: {
    position: 'fixed',
    bottom: 8,
    left: 0,
  },
  copyright: { color: 'var(--white-50)' },
  item: { fontSize: '0.875rem', padding: 0, marginLeft: '0.75rem' },
};

const PublicFooter = () => (
  <Col lg={{ span: 6, offset: 3 }} style={styles.footer}>
    <Row className="justify-content-center align-items-center m-0">
      <span>© 2020 Eric Furspan</span>
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
